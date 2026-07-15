import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    bio:{
        type:String,
    },
    skillYouHave:{
        type:String,
        required:true,
    },
    skillYouWant:{
        type:String,
        required:true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    isOnboarded: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});


userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error;
    }
});

userSchema.method.matchPassword = async function (enterPassword) {
    const isPassCorrect = await bcrypt.compare(enterPassword, this.password);
    return isPassCorrect;
}

const userModel = new mongoose.model("User",userSchema);
export default userModel ;