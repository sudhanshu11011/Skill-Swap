import api from "../lib/axios";

export const getFriends = () => api.get("/users/friends");

export const getFriendRequests = () =>
  api.get("/users/friend-requests");

export const getOutgoingRequests = () =>
  api.get("/users/friend-request/outgoing");

export const sendFriendRequest = (id) =>
  api.post(`/users/friend-requests/${id}`);

export const acceptFriendRequest = (id) =>
  api.post(`/users/friend-requests/${id}/accept`);