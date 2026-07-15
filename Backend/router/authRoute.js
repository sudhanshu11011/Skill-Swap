import express from "express"
import { login, singup, logout, onBoarding } from "../controller/authController.js";
import protectRoute from "../middleware/authMiddleware.js"


const router = express.Router();

router.post("/signup",singup);
router.post("/login",login);
router.post("/logout",logout);

router.post("/onboarding", protectRoute, onBoarding);

router.get("/me", protectRoute, (req,res)=>{
    res.status(200).json({success:true, user: req.user})
})

export  default router ;