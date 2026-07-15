import jwt from "jsonwebtoken"
import userModel from "../model/userModel";

export const protectRoute = async (req,res,next) => {
    try {

        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorized- No Token"})
        }
        const decode = jwt.verify(token,process.env.JWT_TOKEN)
        if(!decode){
            return res.status(401).json({message:"Unauthorized- token were not decoded"})
        }
        const user = await userModel.findById(decode.userId).select("-password");
        if(!user){
            return res.status(400).json({message:"Unauthorized- user not found"})
        }
        
        req.user = user;
        next();
    } catch (error) {
        console.error("error in protect route", error)
        return res.status(500).json({message:"Internal server error"});
    }
};