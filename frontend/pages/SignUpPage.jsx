import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser } from "../services/authService";

export default function SignUpPage({ dark = false }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
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
      await signupUser({ fullName, email, password });
      navigate("/onboarding");
    } catch (err) {
      setError(err.message || "Unable to create your account. Please try again.");
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
        <h1 style={{ margin: "0 0 8px", fontSize: 30 }}>Create account</h1>
        <p style={{ margin: "0 0 28px", color: muted }}>
          Join the SkillSwap community.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16 }}>
          <label style={{ display: "grid", gap: 8 }}>
            Full name
            <input
              type="text"
              placeholder="Your name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              autoComplete="name"
              required
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
            Email
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
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
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
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
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p style={{ margin: "24px 0 0", color: muted, textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#8b5cf6", fontWeight: 600 }}>
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}