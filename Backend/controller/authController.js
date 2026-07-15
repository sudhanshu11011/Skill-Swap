import express from "express"
import userModel from "../model/userModel.js"

export const login = async(req,res)=>{
    try {
        const {email, password} = req.body();
        if(!email || !password){
            return res.status(400).json({message:"All field Required"})
        }

        
    } catch (error) {
        console.error("error in login controller", error);
    }
};

export const singup = async (req,res) => {
    try {
        
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