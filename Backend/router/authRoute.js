import express from "express";

import {
    login,
    signup,
    logout,
    onboarding,
} from "../controller/authController.js";

import protectRoute from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboarding);

router.get("/me", protectRoute, (req, res) => {
    return res.status(200).json({
        success: true,
        user: req.user,
    });
});

export default router;