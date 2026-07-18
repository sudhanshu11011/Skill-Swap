import express from "express";
import User from "../model/userModel";

export const getRecommendedUser = (req,res)=>{
    try {
        const currUserId = req.user.Id;
        const currId = req.user;

        const recommendedUser = await User.find({
            $and:[
                {_id:{$ne: currUserId}},
                {_id:{$nin: currId.friends}},
                {isOnboarding: true},
            ],
        }).select("-password");


        res.status(201).json(recommendedUser);    

    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getMyFriends = (req,res)=>{
    try {
        const user = await User.findById(req.user.is).select("friends").populate("firends", "fullName profilPic skillYouWant SkillYouWant language ");

        res.status(200).json(user.friends)
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getFriendsRequest = (req,res)=>{
    try {
        
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getOutgoingFriendsRequest = (req,res)=>{
    try {
        
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const sendFriendsRequest = (req,res)=>{
    try {
        
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const acceptFriendsRequest = (req,res)=>{
    try {
        
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}