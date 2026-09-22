import { generateToken } from "../lib/stream.js";

export const getStreamToken = async (req, res) => {
    try {
        const token = generateToken(req.user._id);

        return res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        console.error("Error getting Stream token:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};