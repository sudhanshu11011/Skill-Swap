import User from "../model/userModel.js";
import FriendRequest from "../model/friendModel.js";

export const getRecommendedUser = async (req, res) => {
    try {
        const currentUser = req.user;

        const recommendedUsers = await User.find({
            _id: {
                $ne: currentUser._id,
                $nin: currentUser.friends,
            },
            isOnboarded: true,
        })
            .select("-password")
            .limit(20);

        return res.status(200).json(recommendedUsers);
    } catch (error) {
        console.error("Error getting recommended users:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const searchUsers = async (req, res) => {
    try {
        const { skill } = req.query;

        if (!skill?.trim()) {
            return res.status(200).json([]);
        }

        const search = skill.trim();

        const users = await User.find({
            _id: {
                $ne: req.user._id,
            },
            isOnboarded: true,
            $or: [
                {
                    fullName: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    skillYouHave: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    skillYouWant: {
                        $regex: search,
                        $options: "i",
                    },
                },
            ],
        })
            .select("-password")
            .limit(20);

        return res.status(200).json(users);
    } catch (error) {
        console.error("Error searching users:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getMyFriends = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select("friends")
            .populate(
                "friends",
                "fullName profilePic skillYouHave skillYouWant language"
            );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json(user.friends);
    } catch (error) {
        console.error("Error getting friends:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getFriendsRequest = async (req, res) => {
    try {
        const incomingRequests = await FriendRequest.find({
            recipient: req.user._id,
            status: "pending",
        }).populate(
            "sender",
            "fullName profilePic skillYouHave skillYouWant language"
        );

        const acceptedRequests = await FriendRequest.find({
            $or: [
                {
                    sender: req.user._id,
                    status: "accepted",
                },
                {
                    recipient: req.user._id,
                    status: "accepted",
                },
            ],
        })
            .populate(
                "sender",
                "fullName profilePic skillYouHave skillYouWant language"
            )
            .populate(
                "recipient",
                "fullName profilePic skillYouHave skillYouWant language"
            );

        return res.status(200).json({
            incomingRequests,
            acceptedRequests,
        });
    } catch (error) {
        console.error("Error getting friend requests:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const getOutgoingFriendsRequest = async (req, res) => {
    try {
        const outgoingRequests = await FriendRequest.find({
            sender: req.user._id,
            status: "pending",
        }).populate(
            "recipient",
            "fullName profilePic skillYouHave skillYouWant language"
        );

        return res.status(200).json(outgoingRequests);
    } catch (error) {
        console.error(
            "Error getting outgoing friend requests:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const sendFriendsRequest = async (req, res) => {
    try {
        const senderId = req.user._id;
        const { id: recipientId } = req.params;

        if (!recipientId) {
            return res.status(400).json({
                success: false,
                message: "Recipient ID is required",
            });
        }

        if (senderId.toString() === recipientId) {
            return res.status(400).json({
                success: false,
                message: "You cannot send a friend request to yourself",
            });
        }

        const recipient = await User.findById(recipientId);

        if (!recipient) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const alreadyFriends = recipient.friends.some(
            (friendId) => friendId.toString() === senderId.toString()
        );

        if (alreadyFriends) {
            return res.status(400).json({
                success: false,
                message: "You are already friends with this user",
            });
        }

        const existingRequest = await FriendRequest.findOne({
            $or: [
                {
                    sender: senderId,
                    recipient: recipientId,
                },
                {
                    sender: recipientId,
                    recipient: senderId,
                },
            ],
        });

        if (existingRequest) {
            return res.status(409).json({
                success: false,
                message:
                    "A friend request already exists between these users",
            });
        }

        const friendRequest = await FriendRequest.create({
            sender: senderId,
            recipient: recipientId,
        });

        return res.status(201).json({
            success: true,
            request: friendRequest,
        });
    } catch (error) {
        console.error("Error sending friend request:", error);

        if (error.code === 11000) {
            return res.status(409).json({
                success: false,
                message:
                    "A friend request already exists between these users",
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export const acceptFriendsRequest = async (req, res) => {
    try {
        const { id: requestId } = req.params;

        const request = await FriendRequest.findById(requestId);

        if (!request) {
            return res.status(404).json({
                success: false,
                message: "Friend request not found",
            });
        }

        if (
            request.recipient.toString() !==
            req.user._id.toString()
        ) {
            return res.status(403).json({
                success: false,
                message:
                    "You are not authorized to accept this request",
            });
        }

        if (request.status !== "pending") {
            return res.status(400).json({
                success: false,
                message: "This friend request has already been processed",
            });
        }

        request.status = "accepted";

        await request.save();

        await User.findByIdAndUpdate(request.sender, {
            $addToSet: {
                friends: request.recipient,
            },
        });

        await User.findByIdAndUpdate(request.recipient, {
            $addToSet: {
                friends: request.sender,
            },
        });

        return res.status(200).json({
            success: true,
            message: "Friend request accepted",
        });
    } catch (error) {
        console.error("Error accepting friend request:", error);

        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};