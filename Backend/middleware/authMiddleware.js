import jwt from "jsonwebtoken";
import User from "../model/userModel.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies?.jwt;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - No token provided",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_TOKEN);

        if (!decoded?.userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - Invalid token",
            });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - User not found",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.error("Error in protectRoute:", error);

        if (
            error.name === "JsonWebTokenError" ||
            error.name === "TokenExpiredError"
        ) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized - Invalid or expired token",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export default protectRoute;