import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useResponsive from "../../hooks/useResponsive";

export default function RegisterForm() {
  const { signup } = useAuthContext();
  const navigate = useNavigate();
  const { isSmallMobile } = useResponsive();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const change = (e) =>
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const { data } = await signup.mutateAsync({
        fullName: form.fullName,
        email: form.email,
        password: form.password,
      });

      if (data?.success) {
        navigate("/onboarding", { replace: true });
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Unable to create account."
      );
    }
  };

  return (
    <div
      style={{
        ...s.wrapper,
        padding: isSmallMobile ? 20 : 30,
      }}
    >
      <div style={s.header}>
        <div>
          <span style={s.eyebrow}>GET STARTED</span>

          <h1 style={s.title}>Create Account</h1>

          <p style={s.subtitle}>
            Join SkillSwap and start exchanging skills.
          </p>
        </div>

        <img
          src="/skillswaplogo.png"
          alt="SkillSwap"
          style={s.logo}
        />
      </div>

      <form onSubmit={submit}>
        <label style={s.label}>Full Name</label>

        <input
          name="fullName"
          type="text"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={change}
          autoComplete="name"
          required
          style={s.input}
        />

        <label style={s.label}>Email Address</label>

        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={change}
          autoComplete="email"
          required
          style={s.input}
        />

        <label style={s.label}>Password</label>

        <div style={s.password}>
          <input
            name="password"
            type={show ? "text" : "password"}
            placeholder="Create a password"
            value={form.password}
            onChange={change}
            autoComplete="new-password"
            required
            style={s.input}
          />

          <button
            type="button"
            onClick={() => setShow((current) => !current)}
            aria-label={show ? "Hide password" : "Show password"}
            style={s.show}
          >
            {show ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        <label style={s.label}>Confirm Password</label>

        <input
          name="confirm"
          type={show ? "text" : "password"}
          placeholder="Confirm your password"
          value={form.confirm}
          onChange={change}
          autoComplete="new-password"
          required
          style={s.input}
        />

        {(error || signup.isError) && (
          <p style={s.error}>
            {error ||
              signup.error?.response?.data?.message ||
              "Unable to create account."}
          </p>
        )}

        <button
          type="submit"
          disabled={signup.isPending}
          style={{
            ...s.submit,
            opacity: signup.isPending ? 0.7 : 1,
          }}
        >
          {signup.isPending ? "Creating Account..." : "Create Account"}
          <span>→</span>
        </button>
      </form>

      <div style={s.divider}>
        <span style={s.line} />
        <small>or continue with</small>
        <span style={s.line} />
      </div>

      <div style={s.socials}>
        <button type="button" style={s.social}>
          <Mail size={17} />
          Google
        </button>

        <button type="button" style={s.social}>
          GitHub
        </button>
      </div>

      <p style={s.login}>
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/login", { replace: true })}
          style={s.linkButton}
        >
          Login
        </button>
      </p>

      <p style={s.security}>
        Your data is secure and encrypted
      </p>
    </div>
  );
}

const s = {
  wrapper: {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    overflow: "hidden",
    background: "var(--surface)",
    color: "var(--text)",
    fontFamily:
      "Inter, Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  header: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 12,
  },

  eyebrow: {
    display: "block",
    marginBottom: 5,
    color: "var(--primary)",
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 1.4,
  },

  title: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.1,
  },

  subtitle: {
    margin: "6px 0 0",
    color: "var(--muted)",
    fontSize: 13,
    lineHeight: 1.4,
  },

  logo: {
    width: 48,
    height: 48,
    objectFit: "contain",
    flexShrink: 0,
  },

  label: {
    display: "block",
    margin: "7px 0 4px",
    color: "var(--text)",
    fontSize: 12,
    fontWeight: 600,
  },

  input: {
    width: "100%",
    height: 42,
    boxSizing: "border-box",
    padding: "0 13px",
    border: "1px solid var(--border)",
    borderRadius: 9,
    outline: "none",
    background: "var(--bg)",
    color: "var(--text)",
    fontSize: 13,
  },

  password: {
    position: "relative",
  },

  show: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 42,
    height: 42,
    display: "grid",
    placeItems: "center",
    border: 0,
    background: "transparent",
    color: "var(--muted)",
    cursor: "pointer",
  },

  error: {
    margin: "7px 0",
    color: "#ef5350",
    fontSize: 12,
  },

  submit: {
    width: "100%",
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 11,
    border: 0,
    borderRadius: 10,
    background: "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 8px 18px rgba(91,32,229,.20)",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    margin: "12px 0 9px",
    color: "var(--muted)",
    fontSize: 11,
  },

  line: {
    flex: 1,
    height: 1,
    background: "var(--border)",
  },

  socials: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 8,
  },

  social: {
    height: 38,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    border: "1px solid var(--border)",
    borderRadius: 9,
    background: "var(--surface)",
    color: "var(--text)",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  },

  login: {
    margin: "11px 0 0",
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 12,
  },

  linkButton: {
    border: 0,
    padding: 0,
    background: "transparent",
    color: "var(--primary)",
    cursor: "pointer",
    fontWeight: 600,
  },

  security: {
    margin: "8px 0 0",
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 10,
  },
};