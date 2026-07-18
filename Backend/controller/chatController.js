import generateToken from "../lib/stream.js"


export const getStreamToken = async () => {
    try {
        const token = generateToken(requestAnimationFrame.user.id);
        res.status(200).json({token});

    } catch (error) {
        console.error("error in get stream token", error);
        res.status(500).json({message:"internal server error"})
    }
}