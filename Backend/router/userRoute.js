import express from "express";
import User from "../model/userModel.js";
import { getRecommendedUser, getMyFriends, getFriendsRequest, getOutgoingFriendsRequest, sendFriendsRequest, acceptFriendsRequest } from "../controller/friendsController.js";
import protectRoute from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/recommended", getRecommendedUser);
router.get("/friends", getMyFriends);
router.get("/friend-requests", getFriendsRequest);
router.get("/friend-request/outgoing", getOutgoingFriendsRequest);


router.post("/friend-requests/:id", sendFriendsRequest);
router.post("/friend-requests/:id/accept", acceptFriendsRequest);

export default router;