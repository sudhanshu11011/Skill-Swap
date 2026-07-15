import express from "express";
import Dotenv  from "dotenv";
import dns from "dns"
Dotenv.config();

dns.setServers(["1.1.1.1" ,"8.8.8.8"]);

import authRoute from "./router/authRoute.js"
import { connectDB } from "./lib/db.js";

const app = express()
app.use("/api/auth", authRoute);


const PORT = process.env.PORT;


app.get("/",(req,res)=>{
    console.log("hello world");
})

app.listen(3001, (req,res)=>{
    console.log("server is running on port 3001");
    connectDB();
});