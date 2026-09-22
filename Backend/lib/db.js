import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (!process.env.MONGO_DB) {
            throw new Error("MONGO_DB is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGO_DB);

        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
};