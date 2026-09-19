import api from "../lib/axios";

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);
export const logout = () => api.post("/auth/logout");
export const onboarding = (data) => api.post("/auth/onboarding", data);
export const getCurrentUser = () => api.get("/auth/me");