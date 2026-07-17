import {StreamChat} from "stream-chat"

import dotenv from "dotenv"
dotenv.config()

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

if(!apiKey || !apiSecret){
    console.error("Api secret key and api key is missing")
};

const streamClient = StreamChat.getInstance(apiKey,apiSecret);

export const upsertStream = async(userData)=>{
    try {
        await streamClient.upsertUsers([userData]);
        return userData;
    } catch (error) {
        console.error("error in stream client", error);
    }
}

export const generateToken = (userId) => {
    try {
        const userIdStream = userId.toString();
        return streamClient.createToken(userIdStream);
    } catch (error) {
        console.error("error in generate token in stream ", error);
        res.status(500).json({message:"internal server error"});
    }
}