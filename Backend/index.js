import express from "express";
import Dotenv  from "dotenv";
Dotenv.config();

import authRoute from "./router/authRoute.js"

const app = express.Router() ;


app.use("/api/auth", authRoute);

export default router ;