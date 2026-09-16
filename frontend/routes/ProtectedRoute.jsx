import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "../services/authService";

export default function ProtectedRoute({
  children,
  requireOnboarding = false,
}) {
  const location = useLocation();
  const [status, setStatus] = useState({
    loading: true,
    user: null,
    error: "",
  });

  useEffect(() => {
    let active = true;

    getCurrentUser()
      .then((result) => {
        if (active) {
          setStatus({
            loading: false,
            user: result.user || null,
            error: "",
          });
        }
      })
      .catch((error) => {
        if (active) {
          setStatus({
            loading: false,
            user: null,
            error: error.message || "Unable to verify your session.",
          });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  if (status.loading) {
    return <main>Checking your session...</main>;
  }

  if (status.error) {
    return (
      <main>
        <p>{status.error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </main>
    );
  }

  if (!status.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireOnboarding && status.user.isOnboarded) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!requireOnboarding && !status.user.isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
}