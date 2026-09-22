import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

if (!apiKey || !apiSecret) {
    console.warn(
        "Stream Chat API key or secret is missing. Chat functionality will not work until they are configured."
    );
}

const streamClient =
    apiKey && apiSecret
        ? StreamChat.getInstance(apiKey, apiSecret)
        : null;

export const upsertStream = async (userData) => {
    if (!streamClient) {
        throw new Error("Stream Chat is not configured");
    }

    try {
        await streamClient.upsertUsers([userData]);

        return userData;
    } catch (error) {
        console.error("Error creating/updating Stream user:", error);
        throw error;
    }
};

export const generateToken = (userId) => {
    if (!streamClient) {
        throw new Error("Stream Chat is not configured");
    }

    if (!userId) {
        throw new Error("Stream user ID is required");
    }

    try {
        const userIdStream = userId.toString();

        return streamClient.createToken(userIdStream);
    } catch (error) {
        console.error("Error generating Stream token:", error);
        throw error;
    }
};