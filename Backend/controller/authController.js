import express from "express";
import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body();
        if(!email || !password){
            return res.status(400).json({message:"All field Required"})
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Account Not Found"});
        }

        const isPassCorrect = await User.matchPassword(password);
        if(!isPassCorrect){
            return res.status(401).json({message:"Invalid EmailId and Password"});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_TOKEN,{
            expiresIn:"7d",
        })

        req.cookie("jwt",token,{
            maxAge: 7*24*60*60*1000,
            httpOnly:true,
            sameSite:"strict",
            secure:process.env.NODE_ENV === "production",
        });

        res.status(200).json({success: true})

        
    } catch (error) {
        console.error("error in login controller", error);
    }
};

export const singup = async (req,res) => {
    try {
        const {email, password, fullName} = req.body ;
    } catch (error) {
        
    }
};

export const logout = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
};

export const onBoarding = async (req,res) => {
    try {
        
    } catch (error) {
        
    }
};