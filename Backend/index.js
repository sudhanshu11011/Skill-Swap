import express from "express";
import Dotenv  from "dotenv";
import dns from "dns"
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors"

Dotenv.config();
dns.setServers(["1.1.1.1" ,"8.8.8.8"]);

import authRoute from "./router/authRoute.js";
import userRoute from "./router/userRoute.js";
import chatRoute from "./router/chatRoute.js";


const app = express();
const PORT = process.env.PORT ||3001 ;


app.use(cookieParser());
app.use(express.json());

// app.use(cors({
//     origin:"",
//     credentials:true,
// }))


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)
app.use("/api/chat", chatRoute)



app.get("/",(req,res)=>{
    console.log("hello world");
})

app.listen(3001, (req,res)=>{
    console.log("server is running on port 3001");
    connectDB();
});