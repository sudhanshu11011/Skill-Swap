import api from "../lib/axios";

export const getStreamToken = () => api.get("/chat/token");