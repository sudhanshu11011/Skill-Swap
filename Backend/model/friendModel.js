import mongoose from "mongoose";


const friendSchema = new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum: ["pending","accepted"],
        default:"pending",
    },
},{timestamps:true})

const friendRequest = new mongoose.model("friend", friendSchema);

export default friendRequest ;