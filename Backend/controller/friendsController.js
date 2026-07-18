import User from "../model/userModel.js";
import friendRequest from "../model/friendModel.js";


export const getRecommendedUser = async (req,res)=>{
    try {
        const currUserId = req.user._id;
        const currUser = req.user;

        const recommendedUser = await User.find({
            $and:[
                {_id:{$ne: currUserId}},
                {_id:{$nin: currUser.friends}},
                {isOnboarded: true},
            ],
        }).select("-password");


        res.status(200).json(recommendedUser);    

    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getMyFriends = async (req,res)=>{
    try {
        const user = await User.findById(req.user.id).select("friends").populate("friends", "fullName profilePic skillYouWant skillYouWant language ");

        res.status(200).json(user.friends)
    } catch (error) {
        console.error("error in get my friend user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getFriendsRequest = async(req,res)=>{
    try {
        const incomingRequest = await friendRequest.find({
            recipient: req.user.id,
            status:"pending"
        }).populate("sender", "fullName profilePic skillYouHave skillYouWant");

        const acceptedRequest = await friendRequest.find({
            sender: req.user.id,
            status: "accepted",
        }).populate("recipient", "fullName profilePic");
        
        res.status(200).json({
            incomingRequests: incomingRequest,
            acceptedRequests: acceptedRequest,
        })

    } catch (error) {
        console.error("error in get recommended user", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const getOutgoingFriendsRequest = async (req,res)=>{
    try {
        const outgoingRequest = await friendRequest.find({
            sender: req.user.id,
            status: "pending",
        }).populate("recipient", "fullName profilePic skillYouHave skillYouWant");

        res.status(200).json(outgoingRequest);
    } catch (error) {
        console.error("error in get outgoing friend request", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const sendFriendsRequest = async (req,res)=>{
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
        if(recipient.friends.includes(myId)){
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
        console.error("error in send friend request", error);
        return res.status(500).json({message:"internal server error"})
    }
}

export const acceptFriendsRequest = async (req,res)=>{
    try {
        const {id:requestId} = req.params;

        const friendrequest = await friendRequest.findById(requestId);
        if (!friendrequest) {
            return res.status(404).json({ message: "friend request not found" })
        }
        if (friendrequest.recipient.toString() !== req.user.id) {
            return res.status(403).json({ message: "Yoou are not authorized to accept this request" })
        }

        friendrequest.status = "accepted";
        await friendrequest.save();
        
        await User.findByIdAndUpdate(friendrequest.sender, {
            $addToSet: { friends: friendrequest.recipient },
        })
        await User.findByIdAndUpdate(friendrequest.recipient, {
            $addToSet: { friends: friendrequest.sender },
        });

        res.status(200).json({ message: "friend request accecpted" });


    } catch (error) {
        console.error("error in accept friend request", error);
        return res.status(500).json({message:"internal server error"})
    }
}