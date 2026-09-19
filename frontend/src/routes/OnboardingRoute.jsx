import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function OnboardingRoute() {
  const { userQuery } = useAuthContext();

  if (userQuery.isLoading) return null;
  if (userQuery.isError || !userQuery.data?.data?.user) return <Navigate to="/login" replace />;
  if (userQuery.data.data.user.isOnboarded) return <Navigate to="/dashboard" replace />;

  return <Outlet />;
}

export default OnboardingRoute;