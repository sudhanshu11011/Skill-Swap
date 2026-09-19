import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export default function PublicRoute() {
  const { userQuery } = useAuthContext();
  if (userQuery.isLoading) return null;

  const user = userQuery.data?.data?.user;
  if (!user) return <Outlet />;

  return <Navigate to={user.isOnboarded ? "/dashboard" : "/onboarding"} replace />;
}