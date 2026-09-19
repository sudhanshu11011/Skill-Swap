import { StreamChat } from "stream-chat";

const streamClient = StreamChat.getInstance(import.meta.env.VITE_STREAM_API_KEY);

export default streamClient;