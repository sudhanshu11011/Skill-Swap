import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, loginUser } from "../services/authService";

export default function LoginPage({ dark = false }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const text = dark ? "#f4f2ff" : "#172033";
  const muted = dark ? "#b8b4cc" : "#687187";
  const card = dark ? "#1b1930" : "#ffffff";
  const border = dark ? "#37334f" : "#e5e7eb";

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginUser({ email, password });

      try {
        const result = await getCurrentUser();
        navigate(result.user?.isOnboarded ? "/" : "/onboarding");
      } catch {
        navigate("/");
      }
    } catch (err) {
      setError(err.message || "Unable to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100%",
        display: "grid",
        placeItems: "center",
        padding: 24,
        boxSizing: "border-box",
        color: text,
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 440,
          padding: 32,
          border: `1px solid ${border}`,
          borderRadius: 20,
          background: card,
          boxSizing: "border-box",
        }}
      >
        <h1 style={{ margin: "0 0 8px", fontSize: 30 }}>Welcome back</h1>
        <p style={{ margin: "0 0 28px", color: muted }}>
          Login to your SkillSwap account.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
          <label style={{ display: "grid", gap: 8 }}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              style={{
                width: "100%",
                padding: 12,
                border: `1px solid ${border}`,
                borderRadius: 10,
                background: "transparent",
                color: text,
                boxSizing: "border-box",
              }}
            />
          </label>

          <label style={{ display: "grid", gap: 8 }}>
            Password
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              style={{
                width: "100%",
                padding: 12,
                border: `1px solid ${border}`,
                borderRadius: 10,
                background: "transparent",
                color: text,
                boxSizing: "border-box",
              }}
            />
          </label>

          {error && (
            <p role="alert" style={{ margin: 0, color: "#ef4444" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: 13,
              border: 0,
              borderRadius: 10,
              background: "#642de0",
              color: "#fff",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ margin: "24px 0 0", color: muted, textAlign: "center" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "#8b5cf6", fontWeight: 600 }}>
            Sign Up
          </Link>
        </p>
      </section>
    </main>
  );
}