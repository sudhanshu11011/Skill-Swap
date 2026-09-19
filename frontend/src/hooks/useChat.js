import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../services/chatService";

export default function useChat() {
  return useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    retry: false,
  });
}