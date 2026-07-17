import express from "express";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { upsertStream } from "../lib/stream.js";

export const login = async (req, res) => {
    try {
        const { email, password } = req.body();
        if (!email || !password) {
            return res.status(400).json({ message: "All field Required" })
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Account Not Found" });
        }

        const isPassCorrect = await User.matchPassword(password);
        if (!isPassCorrect) {
            return res.status(401).json({ message: "Invalid EmailId and Password" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
            expiresIn: "7d",
        })

        req.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({ success: true })


    } catch (error) {
        console.error("error in login controller", error);
    }
};

export const singup = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;

        if (!email || !password || !fullName) {
            return res.status(400).json({ message: "All Field Required" })
        };

        if (password < 6) {
            return res.status(400).json({ message: "Password Must Be Atleast 6 Character Long" })
        };

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.text(email)) {
            return req.status(400).json({ message: "Invalid Email Id" })
        };

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: "user already exist" })
        };

        const newUser = await User.create({
            email,
            fullName,
            password,
        })

        try {

            await upsertStream({
                id: newUser._id.toString(),
                name: newUser._fullName
            });

        } catch (error) {
            console.error("error in creating stream user", error);
        }


        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_TOKEN, {
            expiresIn: "7d",
        })

        req.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production"
        })

        res.status(201).json({ message: true });

    } catch (error) {

    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });
        res.status(200).json({ success: true, message: "Logout Successfully" });
    } catch (error) {
        console.error("error in logout", error);
        return res.status(500).json({ message: "internal server error" });
    }
};

export const onBoarding = async (req, res) => {
    try {
        const userId = req.user._id;

        const { fullName, bio, skillYouHave, skillYouWant } = req.body;
        if (!fullName || !skillYouHave || !skillYouWant) {
            return res.status(400).json({ message: "All Field Required" })
        };

        const updateUser = await User.findByIdAndUpdate(userId, {
            ...req.body,
            isOnboarding: true,
        }, { new: true })
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }

        try {
            await upsertStream({
                id: updateUser._id.toString(),
                name: updateUser.fullName,
            })
        } catch (error) {
            console.error("error in update user in stream", error);
        }

        res.status(200).json({ success: true, user: updateUser });

    } catch (error) {
        console.error("error in onBoarding", error)
        res.status(500).json({ message: "Internal server Error" })
    }
};