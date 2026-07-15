import express from "express"
import userModel from "../model/userModel.js"

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body();
        if(!email){
            return res.status(400).json({message:"Email Required"})
        }

        if(!password){
            return res.status(400).json({message:"Password Required"})
        }

        
    } catch (error) {
        console.error("error in login controller", error);
    }
}