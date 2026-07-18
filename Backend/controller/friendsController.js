import express from "express";
import User from "../model/userModel";
import friendRequest from "../model/friendModel.js";
import friendRequest from "../model/friendModel.js";

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
        const incommingRequest = await friendRequest.find({
            recipient: req.user.id,
            status:"pending"
        }).populate("sender", "fullName profilePic skillYouHave skillYouWant");

        const acceptedRequest = await friendRequest.find({
            sender: req.user.id,
            status: "accepted",
        }).populate("recipient", "fullName profilePic");
        
        res.status(200).json({
            incommingRequests: incommingRequest,
            acceptedRequests: acceptedRequest,
        })

    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getOutgoingFriendsRequest = (req,res)=>{
    try {
        const outgoingRequest = await friendRequest.find({
            sender: req.user.id,
            status: "pending",
        }).populate("recipient", "fullName profilePic skillYouHave skillYouWant");

        res.status(200).json(outgoingRequest);
    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const sendFriendsRequest = (req,res)=>{
    try {
        const myId = req.user.id;
        const {id:recipientId} = req.params ;

        if(myId === recipientId){
            return res.status(400).json({message:"You Can't send request to yourself"});
        };

        const recipient = await User.findById(recipientId)
        if(!recipient){
            return res.status(400).json({message:"Friends Not exists"})
        };
        if(recipient.friends.include(myId)){
            return res.status(400).json({message:"You were already Friends Of This Users"})
        };

        const existingRequest = await friendRequest.findOne({
            $or:[
                {sender:myId, recipient:recipientId},
                {sender:recipientId, recipient:myId}
            ],
        });

        if(existingRequest){
            return res.status(400).json({message:"friend request were already exists between you and this user"})
        };

        const friendrequest = await friendRequest.create({
            sender:myId,
            recipient:recipientId
        });

        res.status(200).json(friendrequest);

    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const acceptFriendsRequest = (req,res)=>{
    try {
        const {id:requestId} = req.params;

        const friendrequest = await friendRequest.findById(requestId);
        if (!friendRequest) {
            return res.status(404).json({ message: "friend request not found" })
        }
        if (friendRequest.recipient.toString() !== req.user.id) {
            return res.status(403).json({ message: "Yoou are not authorized to accept this request" })
        }

        friendrequest.status = "accepted";
        await friendrequest.save();
        
        await User.findByIdAndUpdate(friendRequest.sender, {
            $addToSet: { friends: friendRequest.recipient },
        })
        await User.findByIdAndUpdate(friendRequest.recipient, {
            $addToSet: { friends: friendRequest.sender },
        });

        res.status(200).json({ message: "friend request accecpted" });


    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}