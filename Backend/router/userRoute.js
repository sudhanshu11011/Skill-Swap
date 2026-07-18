import express from "express";
import User from "../model/userModel.js";
import { getRecommendedUser, getMyFriends, getFriendsRequest, getOutgoingFriendsRequest, sendFriendsRequest, acceptFriendsRequest } from "../controller/friendsController.js";
import protectRoute from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(protectRoute);

router.get("/", getRecommendedUser);
router.get("/friend", getMyFriends);
router.get("/friend-request", getFriendsRequest);
router.get("/outgoing-friend-request", getOutgoingFriendsRequest);


router.post("/friend-request/:id", sendFriendsRequest);
router.post("/friend-request/:id/accept", acceptFriendsRequest);

export default router;