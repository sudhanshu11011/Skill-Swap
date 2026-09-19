import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as userService from "../services/userService";

export default function useUser() {
  const client = useQueryClient();

  const recommended = useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: userService.getRecommendedUsers,
  });

  const friends = useQuery({
    queryKey: ["friends"],
    queryFn: userService.getFriends,
  });

  const requests = useQuery({
    queryKey: ["friendRequests"],
    queryFn: userService.getFriendRequests,
  });

  const outgoing = useQuery({
    queryKey: ["outgoingRequests"],
    queryFn: userService.getOutgoingRequests,
  });

  const sendRequest = useMutation({
    mutationFn: userService.sendFriendRequest,
    onSuccess: () => client.invalidateQueries({ queryKey: ["recommendedUsers"] }),
  });

  const acceptRequest = useMutation({
    mutationFn: userService.acceptFriendRequest,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["friendRequests"] });
      client.invalidateQueries({ queryKey: ["friends"] });
    },
  });

  return {
    recommended,
    friends,
    requests,
    outgoing,
    sendRequest,
    acceptRequest,
  };
}