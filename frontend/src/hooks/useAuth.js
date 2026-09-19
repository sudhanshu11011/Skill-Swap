import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import * as authService from "../services/authService";

export const useAuth = () => {
  const queryClient = useQueryClient();

  const userQuery = useQuery({
    queryKey: ["authUser"],
    queryFn: authService.getCurrentUser,
    retry: false,
  });

  const login = useMutation({
    mutationFn: authService.login,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const signup = useMutation({
    mutationFn: authService.signup,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  });

  const logout = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => queryClient.setQueryData(["authUser"], null),
  });

  const onboarding = useMutation({
    mutationFn: authService.onboarding,
    onSuccess: ({ data }) => queryClient.setQueryData(["authUser"], data.user),
  });

  return { userQuery, login, signup, logout, onboarding };
};