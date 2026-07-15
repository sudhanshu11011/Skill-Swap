import express from "express";
import Dotenv  from "dotenv";
Dotenv.config();


import authRoute from "./router/authRoute.js"

const app = express.Router() ;
app.use = express()

app.use("/api/auth", authRoute);

app.get("/",(req,res)=>{
    console.log("hello world");
})

app.listen(3001, (req,res)=>{
    console.log("server is running on port 3001")
});