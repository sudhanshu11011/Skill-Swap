import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { upsertStream } from "../lib/stream.js";

const createToken = (userId) => {
    if (!process.env.JWT_TOKEN) {
        throw new Error("JWT_TOKEN is not configured");
    }

    return jwt.sign(
        {
            userId: userId.toString(),
        },
        process.env.JWT_TOKEN,
        {
            expiresIn: "7d",
        }
    );
};

const setAuthCookie = (res, token) => {
    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
    });
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: normalizedEmail,
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Account not found",
            });
        }

        const isPasswordCorrect = await user.matchPassword(password);

        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = createToken(user._id);

        setAuthCookie(res, token);

        const safeUser = await User.findById(user._id).select("-password");

        return res.status(200).json({
            success: true,
            user: safeUser,
        });
    } catch (error) {
        console.error("Error in login controller:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const signup = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;

        if (!email || !password || !fullName) {
            return res.status(400).json({
                success: false,
                message: "Full name, email and password are required",
            });
        }

        const trimmedFullName = fullName.trim();
        const normalizedEmail = email.trim().toLowerCase();

        if (!trimmedFullName) {
            return res.status(400).json({
                success: false,
                message: "Full name cannot be empty",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters long",
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(normalizedEmail)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email address",
            });
        }

        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists",
            });
        }

        const newUser = await User.create({
            email: normalizedEmail,
            fullName: trimmedFullName,
            password,
        });

        try {
            await upsertStream({
                id: newUser._id.toString(),
                name: newUser.fullName,
            });
        } catch (streamError) {
            console.error(
                "Error creating Stream user:",
                streamError
            );
        }

        const token = createToken(newUser._id);

        setAuthCookie(res, token);

        const safeUser = await User.findById(newUser._id).select(
            "-password"
        );

        return res.status(201).json({
            success: true,
            user: safeUser,
        });
    } catch (error) {
        console.error("Error in signup controller:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        return res.status(200).json({
            success: true,
            message: "Logout successfully",
        });
    } catch (error) {
        console.error("Error in logout:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const onboarding = async (req, res) => {
    try {
        const userId = req.user._id;

        const {
            fullName,
            bio,
            skillYouHave,
            skillYouWant,
            language,
            profilePic,
        } = req.body;

        if (!fullName || !skillYouHave || !skillYouWant) {
            return res.status(400).json({
                success: false,
                message:
                    "Full name, skill you have and skill you want are required",
            });
        }

        const updateData = {
            fullName: fullName.trim(),
            bio: bio?.trim() || "",
            skillYouHave: skillYouHave.trim(),
            skillYouWant: skillYouWant.trim(),
            language: language?.trim() || "",
            profilePic: profilePic?.trim() || "",
            isOnboarded: true,
        };

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateData,
            {
                new: true,
                runValidators: true,
            }
        ).select("-password");

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        try {
            await upsertStream({
                id: updatedUser._id.toString(),
                name: updatedUser.fullName,
            });
        } catch (streamError) {
            console.error(
                "Error updating Stream user:",
                streamError
            );
        }

        return res.status(200).json({
            success: true,
            user: updatedUser,
        });
    } catch (error) {
        console.error("Error in onboarding:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};