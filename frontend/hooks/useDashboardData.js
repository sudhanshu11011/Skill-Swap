import { useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";

export default function useDashboardData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    getCurrentUser()
      .then((result) => {
        if (active) {
          setUser(result.user || null);
          setError("");
        }
      })
      .catch((err) => {
        if (active) {
          setError(err.message || "Unable to load your profile.");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { user, loading, error };
}