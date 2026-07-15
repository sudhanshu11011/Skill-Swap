import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB);
        console.log("dataBase connected")
    } catch (error) {
        console.error("error in connecting database", error);
        process.exit(1);
    }
}