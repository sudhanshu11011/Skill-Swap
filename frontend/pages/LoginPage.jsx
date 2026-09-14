import { Link } from "react-router-dom";

export default function LoginPage({ dark = false }) {
  const text = dark ? "#f4f2ff" : "#172033";
  const muted = dark ? "#b8b4cc" : "#687187";
  const card = dark ? "#1b1930" : "#ffffff";
  const border = dark ? "#37334f" : "#e5e7eb";

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

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          style={{ display: "grid", gap: 16 }}
        >
          <label style={{ display: "grid", gap: 8 }}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
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
              placeholder="Enter your password"
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

          <button
            type="submit"
            style={{
              padding: 13,
              border: 0,
              borderRadius: 10,
              background: "#642de0",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Login
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
