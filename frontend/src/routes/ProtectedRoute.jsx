import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function ProtectedRoute() {
  const { userQuery } = useAuthContext();

  if (userQuery.isLoading) return null;
  if (userQuery.isError || !userQuery.data?.data?.user) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute;