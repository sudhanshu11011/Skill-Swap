import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  UsersRound,
  BookOpen,
  Crown,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";
import { getCurrentUser, loginUser } from "../services/authService";

export default function LoginPage({ dark = false, onToggleTheme = () => {} }) {
  const navigate = useNavigate();
  const location = useLocation();
  const successMessage = location.state?.message;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b8b4cc" : "#687187",
    panel: dark ? "#1b1930" : "#f3f0ff",
    form: dark ? "#111020" : "#ffffff",
    border: dark ? "#37334f" : "#e1e5e9",
    input: dark ? "#19172b" : "#ffffff",
    accent: "#5526d7",
    softAccent: dark ? "#2b2147" : "#eee8ff",
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginUser({ email, password });

      const result = await getCurrentUser();

      if (!result.user) {
        throw new Error("Unable to verify your account. Please try again.");
      }

      navigate(result.user.isOnboarded ? "/dashboard" : "/onboarding");
    } catch (err) {
      setError(err.message || "Unable to log in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    boxSizing: "border-box",
    padding: "15px 14px 15px 48px",
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    background: colors.input,
    color: colors.text,
    fontSize: 15,
    outlineOffset: 2,
  };

  const iconStyle = {
    position: "absolute",
    left: 16,
    top: "50%",
    transform: "translateY(-50%)",
    color: colors.muted,
    pointerEvents: "none",
  };

  const features = [
    {
      icon: UsersRound,
      title: "Learn Anything",
      description: "Discover new skills from amazing people.",
      color: "#5526d7",
    },
    {
      icon: BookOpen,
      title: "Teach & Earn Respect",
      description: "Share your knowledge and help others grow.",
      color: "#159665",
    },
    {
      icon: Crown,
      title: "Build Connections",
      description: "Connect, collaborate and grow together.",
      color: "#d99a13",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100%",
        padding: 18,
        boxSizing: "border-box",
        display: "grid",
        placeItems: "center",
        background: dark ? "#111020" : "#f7f8fa",
        color: colors.text,
        fontFamily: "inherit",
      }}
    >
      <style>{`
        @keyframes loginFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loginFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .login-animated {
          animation: loginFadeUp 650ms ease both;
        }

        .login-form-animated {
          animation: loginFadeUp 700ms ease 100ms both;
        }

        .login-feature-animated {
          animation: loginFadeUp 550ms ease both;
        }

        .login-theme-button {
          transition: transform 180ms ease, background 180ms ease;
        }

        .login-theme-button:hover {
          transform: rotate(-8deg);
          background: ${colors.softAccent};
        }

        .login-input:focus {
          border-color: ${colors.accent} !important;
          box-shadow: 0 0 0 3px ${
            dark ? "rgba(124, 58, 237, 0.2)" : "rgba(85, 38, 215, 0.12)"
          };
        }

        .login-submit {
          transition: transform 180ms ease, filter 180ms ease;
        }

        .login-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        .login-check {
          appearance: none;
          -webkit-appearance: none;
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          margin: 0;
          display: grid;
          place-items: center;
          border: 1.5px solid ${dark ? "#625b7f" : "#c8cbd5"};
          border-radius: 5px;
          background: ${colors.input};
          cursor: pointer;
          transition: background 160ms ease, border-color 160ms ease;
        }

        .login-check:checked {
          border-color: ${colors.accent};
          background: ${colors.accent};
        }

        .login-check:checked::after {
          content: "";
          width: 5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .login-check:focus-visible {
          outline: 3px solid ${
            dark ? "rgba(167, 139, 250, 0.5)" : "rgba(85, 38, 215, 0.25)"
          };
          outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .login-animated,
          .login-form-animated,
          .login-feature-animated {
            animation: none;
          }

          .login-theme-button,
          .login-submit,
          .login-check {
            transition: none;
          }
        }

        @media (max-width: 850px) {
          .login-card {
            grid-template-columns: 1fr !important;
            max-width: 620px !important;
          }

          .login-left-panel {
            display: none !important;
          }

          .login-right-panel {
            min-height: 650px;
          }
        }

        @media (max-width: 480px) {
          .login-page-shell {
            padding: 0 !important;
          }

          .login-card {
            min-height: 100% !important;
            border-radius: 0 !important;
            border: 0 !important;
          }

          .login-right-panel {
            padding: 24px !important;
          }
        }
      `}</style>

      <div
        className="login-card"
        style={{
          width: "100%",
          maxWidth: 1460,
          minHeight: "min(940px, calc(100% - 36px))",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.05fr)",
          border: `1px solid ${colors.border}`,
          borderRadius: 22,
          overflow: "hidden",
          background: colors.form,
          boxShadow: dark ? "none" : "0 8px 30px rgba(20, 30, 50, 0.06)",
        }}
      >
        <section
          className="login-left-panel"
          style={{
            position: "relative",
            overflow: "hidden",
            padding: "42px clamp(28px, 5vw, 64px)",
            background: colors.panel,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              width: "fit-content",
              color: colors.text,
              textDecoration: "none",
            }}
          >
            <img
              src="/skillswaplogo.png"
              alt="SkillSwap Logo"
              style={{
                width: 40,
                height: 40,
                objectFit: "contain",
                borderRadius: 10,
              }}
            />
            <span>
              <strong style={{ display: "block", fontSize: 21 }}>
                SkillSwap
              </strong>
              <small style={{ color: colors.muted }}>Learn. Teach. Grow.</small>
            </span>
          </Link>

          <div
            className="login-animated"
            style={{ marginTop: "clamp(44px, 7vh, 82px)", maxWidth: 560 }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(30px, 3.4vw, 48px)",
                lineHeight: 1.2,
                letterSpacing: "-1.5px",
              }}
            >
              Exchange Skills.
              <br />
              <span style={{ color: colors.accent }}>Build Opportunities.</span>
            </h1>

            <p
              style={{
                maxWidth: 470,
                margin: "20px 0 28px",
                color: colors.muted,
                fontSize: 17,
                lineHeight: 1.7,
              }}
            >
              SkillSwap connects learners and teachers around the world to share
              knowledge, grow together, and achieve more.
            </p>

            <div style={{ display: "grid", gap: 20 }}>
              {features.map(
                ({ icon: Icon, title, description, color }, index) => (
                  <div
                    key={title}
                    className="login-feature-animated"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 18,
                      animationDelay: `${180 + index * 100}ms`,
                    }}
                  >
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        flex: "0 0 56px",
                        display: "grid",
                        placeItems: "center",
                        borderRadius: 12,
                        background: colors.form,
                        color,
                        boxShadow: "0 2px 8px rgba(20, 30, 50, 0.05)",
                      }}
                    >
                      <Icon size={27} strokeWidth={1.8} />
                    </div>
                    <div>
                      <strong style={{ display: "block", fontSize: 17 }}>
                        {title}
                      </strong>
                      <span
                        style={{
                          display: "block",
                          marginTop: 5,
                          color: colors.muted,
                          fontSize: 14,
                          lineHeight: 1.5,
                        }}
                      >
                        {description}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              marginTop: "auto",
              paddingTop: 32,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "min(100%, 470px)",
                minHeight: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                borderRadius: "48% 48% 12px 12px",
                background: dark ? "#202039" : "#e4ddff",
              }}
            >
              <div
                style={{
                  width: 86,
                  height: 86,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 20,
                  background: colors.form,
                  color: colors.accent,
                }}
              >
                <UsersRound size={48} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  width: 86,
                  height: 86,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: 20,
                  background: colors.form,
                  color: "#159665",
                }}
              >
                <BookOpen size={48} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        <section
          className="login-right-panel"
          style={{
            position: "relative",
            padding: "32px clamp(24px, 5vw, 76px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: colors.form,
          }}
        >
          <button
            type="button"
            className="login-theme-button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
            style={{
              position: "absolute",
              top: 28,
              right: 32,
              width: 46,
              height: 46,
              display: "grid",
              placeItems: "center",
              border: `1px solid ${colors.border}`,
              borderRadius: "50%",
              background: "transparent",
              color: colors.accent,
              cursor: "pointer",
            }}
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div
            className="login-form-animated"
            style={{ width: "100%", maxWidth: 620, margin: "42px auto 0" }}
          >
            <h2 style={{ margin: "0 0 8px", fontSize: 32 }}>Welcome Back</h2>

            <p style={{ margin: "0 0 28px", color: colors.muted }}>
              Login to continue your SkillSwap journey.
            </p>

            {successMessage && (
              <p role="status" style={{ margin: "0 0 18px", color: "#159665" }}>
                {successMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 20 }}>
              <label style={{ display: "grid", gap: 8, fontSize: 14 }}>
                Email Address
                <span style={{ position: "relative" }}>
                  <Mail size={20} style={iconStyle} />
                  <input
                    className="login-input"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    autoComplete="email"
                    required
                    style={inputStyle}
                  />
                </span>
              </label>

              <label style={{ display: "grid", gap: 8, fontSize: 14 }}>
                Password
                <span style={{ position: "relative" }}>
                  <LockKeyhole size={20} style={iconStyle} />
                  <input
                    className="login-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    required
                    style={{ ...inputStyle, paddingRight: 48 }}
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((value) => !value)}
                    style={{
                      position: "absolute",
                      right: 13,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: 0,
                      padding: 4,
                      background: "transparent",
                      color: colors.muted,
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </span>
              </label>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    color: colors.muted,
                    fontSize: 14,
                    cursor: "pointer",
                  }}
                >
                  <input
                    className="login-check"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                  />
                  Remember me
                </label>

                <span style={{ color: colors.accent, fontSize: 14 }}>
                  Forgot Password?
                </span>
              </div>

              {error && (
                <p role="alert" style={{ margin: 0, color: "#dc2626" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="login-submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 12,
                  padding: 16,
                  border: 0,
                  borderRadius: 8,
                  background: colors.accent,
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: loading ? "not-allowed" : "pointer",
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? "Logging in..." : "Login"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>

            <p
              style={{
                margin: "30px 0 0",
                color: colors.muted,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Don't have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: colors.accent,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
