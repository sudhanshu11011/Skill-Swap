import { useQuery } from "@tanstack/react-query";
import { searchUsers } from "../services/matchingService";

export default function useMatching(query) {
  const value = query.trim();

  return useQuery({
    queryKey: ["userSearch", value],
    queryFn: () => searchUsers(value),
    enabled: Boolean(value),
    retry: false,
    staleTime: 30000,
  });
}