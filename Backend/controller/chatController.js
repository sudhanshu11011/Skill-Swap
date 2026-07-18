import { generateToken } from "../lib/stream.js";


export const getStreamToken = async (req,res) => {
    try {
        const token = generateToken(req.user.id);
        res.status(200).json({token});

    } catch (error) {
        console.error("error in get stream token", error);
        res.status(500).json({message:"internal server error"})
    }
}