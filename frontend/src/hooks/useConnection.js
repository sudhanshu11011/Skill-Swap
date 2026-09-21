import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as connectionService from "../services/connectionService";

export default function useConnection() {
  const client = useQueryClient();

  const friends = useQuery({
    queryKey: ["friends"],
    queryFn: connectionService.getFriends,
  });

  const requests = useQuery({
    queryKey: ["friendRequests"],
    queryFn: connectionService.getFriendRequests,
  });

  const outgoing = useQuery({
    queryKey: ["outgoingRequests"],
    queryFn: connectionService.getOutgoingRequests,
  });

  const sendRequest = useMutation({
    mutationFn: connectionService.sendFriendRequest,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["friends"] });
      client.invalidateQueries({ queryKey: ["friendRequests"] });
      client.invalidateQueries({ queryKey: ["outgoingRequests"] });
      client.invalidateQueries({ queryKey: ["recommendedUsers"] });
      client.invalidateQueries({ queryKey: ["userSearch"] });
    },
  });

  const acceptRequest = useMutation({
    mutationFn: connectionService.acceptFriendRequest,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["friends"] });
      client.invalidateQueries({ queryKey: ["friendRequests"] });
      client.invalidateQueries({ queryKey: ["outgoingRequests"] });
      client.invalidateQueries({ queryKey: ["recommendedUsers"] });
      client.invalidateQueries({ queryKey: ["userSearch"] });
    },
  });

  return {
    friends,
    requests,
    outgoing,
    sendRequest,
    acceptRequest,
  };
}