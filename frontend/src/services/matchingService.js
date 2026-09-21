import api from "../lib/axios";

export const searchUsers = (skill) =>
  api.get("/users/search", {
    params: { skill: skill.trim() },
  });