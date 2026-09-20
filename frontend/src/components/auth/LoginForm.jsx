import { Eye, EyeOff, Mail } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useResponsive from "../../hooks/useResponsive";

export default function LoginForm() {
  const { login, userQuery } = useAuthContext();
  const navigate = useNavigate();
  const { isSmallMobile } = useResponsive();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const change = (e) =>
    setForm((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));

  const submit = async (e) => {
    e.preventDefault();

    try {
      await login.mutateAsync(form);

      const { data } = await userQuery.refetch();
      const user = data?.data?.user;

      navigate(user?.isOnboarded ? "/dashboard" : "/onboarding", {
        replace: true,
      });
    } catch {
      // React Query exposes the authentication error through login.isError.
    }
  };

  return (
    <div
      style={{
        ...s.wrapper,
        padding: isSmallMobile ? 20 : 34,
      }}
    >
      <div style={s.header}>
        <div>
          <span style={s.eyebrow}>WELCOME BACK</span>
          <h1 style={s.title}>Login</h1>
          <p style={s.subtitle}>
            Continue your SkillSwap journey.
          </p>
        </div>

        <img
          src="/skillswaplogo.png"
          alt="SkillSwap"
          style={s.logo}
        />
      </div>

      <form onSubmit={submit}>
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
            placeholder="Enter your password"
            value={form.password}
            onChange={change}
            autoComplete="current-password"
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

        <div style={s.options}>
          <label style={s.remember}>
            <input type="checkbox" />
            Remember me
          </label>

          <button type="button" style={s.linkButton}>
            Forgot Password?
          </button>
        </div>

        {login.isError && (
          <p style={s.error}>
            {login.error?.response?.data?.message || "Login failed."}
          </p>
        )}

        <button
          type="submit"
          disabled={login.isPending}
          style={{
            ...s.submit,
            opacity: login.isPending ? 0.7 : 1,
          }}
        >
          {login.isPending ? "Logging in..." : "Login"}
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

      <p style={s.signup}>
        Don't have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/register", { replace: true })}
          style={s.linkButton}
        >
          Sign up
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
    gap: 20,
    marginBottom: 25,
  },

  eyebrow: {
    display: "block",
    marginBottom: 7,
    color: "var(--primary)",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: 1.4,
  },

  title: {
    margin: 0,
    fontSize: 30,
    lineHeight: 1.15,
  },

  subtitle: {
    margin: "8px 0 0",
    color: "var(--muted)",
    fontSize: 14,
  },

  logo: {
    width: 52,
    height: 52,
    objectFit: "contain",
    flexShrink: 0,
  },

  label: {
    display: "block",
    margin: "14px 0 7px",
    fontSize: 13,
    fontWeight: 600,
  },

  input: {
    width: "100%",
    height: 46,
    boxSizing: "border-box",
    padding: "0 14px",
    border: "1px solid var(--border)",
    borderRadius: 10,
    outline: "none",
    background: "var(--bg)",
    color: "var(--text)",
    fontSize: 14,
  },

  password: {
    position: "relative",
  },

  show: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 46,
    height: 46,
    display: "grid",
    placeItems: "center",
    border: 0,
    background: "transparent",
    color: "var(--muted)",
    cursor: "pointer",
  },

  options: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    margin: "18px 0 22px",
    color: "var(--muted)",
    fontSize: 13,
  },

  remember: {
    display: "flex",
    alignItems: "center",
    gap: 7,
  },

  linkButton: {
    border: 0,
    padding: 0,
    background: "transparent",
    color: "var(--primary)",
    cursor: "pointer",
    fontWeight: 600,
  },

  error: {
    margin: "0 0 12px",
    color: "#ef5350",
    fontSize: 13,
  },

  submit: {
    width: "100%",
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    border: 0,
    borderRadius: 11,
    background: "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    fontSize: 14,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 9px 22px rgba(91,32,229,.20)",
  },

  divider: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    margin: "22px 0 14px",
    color: "var(--muted)",
  },

  line: {
    flex: 1,
    height: 1,
    background: "var(--border)",
  },

  socials: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
  },

  social: {
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "1px solid var(--border)",
    borderRadius: 10,
    background: "var(--surface)",
    color: "var(--text)",
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
  },

  signup: {
    margin: "20px 0 0",
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 13,
  },

  security: {
    margin: "18px 0 0",
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 11,
  },
};