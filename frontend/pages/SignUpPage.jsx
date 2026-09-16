import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  UsersRound,
  BookOpen,
  Network,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";
import { signupUser } from "../services/authService";

export default function SignUpPage({ dark = false, onToggleTheme = () => {} }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Sign Up | SkillSwap";
  }, []);

  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b8b4cc" : "#687187",
    panel: dark ? "#1b1930" : "#f0f8f3",
    form: dark ? "#111020" : "#ffffff",
    border: dark ? "#37334f" : "#e1e5e9",
    input: dark ? "#19172b" : "#ffffff",
    accent: "#159665",
    soft: dark ? "#24213b" : "#e4f1e9",
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!agreed) {
      setError("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);

    try {
      await signupUser({
        fullName: fullName.trim(),
        email: email.trim(),
        password,
      });

      navigate("/login", {
        replace: true,
        state: { message: "Account created. Kindly login." },
      });
    } catch (err) {
      setError(
        err.message || "Unable to create your account. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%",
    minWidth: 0,
    boxSizing: "border-box",
    padding: "14px 14px 14px 46px",
    border: `1px solid ${colors.border}`,
    borderRadius: 9,
    background: colors.input,
    color: colors.text,
    fontSize: 15,
    outlineOffset: 3,
  };

  const iconStyle = {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: "translateY(-50%)",
    color: colors.muted,
    pointerEvents: "none",
  };

  const features = [
    {
      icon: UsersRound,
      title: "Share Your Skills",
      description: "Teach what you know and inspire others.",
      color: "#159665",
    },
    {
      icon: BookOpen,
      title: "Learn Anything",
      description: "Explore new skills and level up.",
      color: "#7c3aed",
    },
    {
      icon: Network,
      title: "Build Connections",
      description: "Connect with learners and experts worldwide.",
      color: "#2563eb",
    },
  ];

  return (
    <main
      className="signup-page"
      style={{
        "--signup-text": colors.text,
        "--signup-muted": colors.muted,
        "--signup-border": colors.border,
        "--signup-form": colors.form,
        "--signup-input": colors.input,
        "--signup-accent": colors.accent,
        "--signup-soft": colors.soft,
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
        @keyframes signup-enter {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .signup-shell {
          width: 100%;
          max-width: 1460px;
          min-height: min(900px, calc(100% - 36px));
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
          overflow: hidden;
          border: 1px solid var(--signup-border);
          border-radius: 22px;
          background: var(--signup-form);
          box-shadow: 0 8px 30px rgba(20, 30, 50, 0.06);
          animation: signup-enter 550ms ease-out both;
        }

        .signup-brand-content {
          animation: signup-enter 650ms ease-out 80ms both;
        }

        .signup-feature {
          animation: signup-enter 500ms ease-out both;
        }

        .signup-form-content {
          animation: signup-enter 650ms ease-out 120ms both;
        }

        .signup-input {
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .signup-input:focus {
          border-color: var(--signup-accent) !important;
          outline: none;
          box-shadow: 0 0 0 3px rgba(21, 150, 101, 0.14);
        }

        .signup-theme-button {
          transition: transform 180ms ease, background 180ms ease;
        }

        .signup-theme-button:hover {
          transform: rotate(-8deg);
          background: var(--signup-soft);
        }

        .signup-submit {
          transition: transform 160ms ease, filter 160ms ease;
        }

        .signup-submit:hover:not(:disabled) {
          filter: brightness(1.06);
          transform: translateY(-2px);
        }

        .signup-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .signup-check {
          appearance: none;
          -webkit-appearance: none;
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          margin: 2px 0 0;
          display: grid;
          place-items: center;
          border: 1.5px solid ${dark ? "#625b7f" : "#c8cbd5"};
          border-radius: 5px;
          background: var(--signup-input);
          cursor: pointer;
          transition: background 160ms ease, border-color 160ms ease;
        }

        .signup-check:checked {
          border-color: var(--signup-accent);
          background: var(--signup-accent);
        }

        .signup-check:checked::after {
          content: "";
          width: 5px;
          height: 9px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg) translate(-1px, -1px);
        }

        .signup-check:focus-visible {
          outline: 3px solid rgba(21, 150, 101, 0.25);
          outline-offset: 3px;
        }

        @media (max-width: 850px) {
          .signup-shell {
            max-width: 620px;
            grid-template-columns: minmax(0, 1fr);
          }

          .signup-brand {
            display: none !important;
          }

          .signup-form-panel {
            padding: 76px clamp(22px, 6vw, 48px) 42px !important;
          }
        }

        @media (max-width: 480px) {
          .signup-page {
            padding: 8px !important;
          }

          .signup-shell {
            min-height: calc(100% - 16px);
            border-radius: 14px;
          }

          .signup-form-panel {
            padding: 76px 18px 30px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .signup-shell,
          .signup-brand-content,
          .signup-feature,
          .signup-form-content {
            animation: none;
          }

          .signup-input,
          .signup-theme-button,
          .signup-submit,
          .signup-check {
            transition: none;
          }
        }
      `}</style>

      <div className="signup-shell">
        <section
          className="signup-brand"
          style={{
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
            className="signup-brand-content"
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
              Create Your Account
              <br />
              <span style={{ color: colors.accent }}>
                Start Your Journey Today!
              </span>{" "}
              <span aria-hidden="true">🚀</span>
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
              Join SkillSwap and connect with amazing people. Share your skills,
              learn new ones, and grow together.
            </p>

            <div style={{ display: "grid", gap: 20 }}>
              {features.map(
                ({ icon: Icon, title, description, color }, index) => (
                  <div
                    key={title}
                    className="signup-feature"
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
                minHeight: 145,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 18,
                borderRadius: "48% 48% 12px 12px",
                background: colors.soft,
              }}
            >
              <UsersRound size={46} color={colors.accent} strokeWidth={1.5} />
              <BookOpen size={46} color="#7c3aed" strokeWidth={1.5} />
            </div>
          </div>
        </section>

        <section
          className="signup-form-panel"
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
            className="signup-theme-button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
            style={{
              position: "absolute",
              top: 24,
              right: 28,
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
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          <div
            className="signup-form-content"
            style={{ width: "100%", maxWidth: 620, margin: "36px auto 0" }}
          >
            <h2 style={{ margin: "0 0 8px", fontSize: 32 }}>Create Account</h2>

            <p style={{ margin: "0 0 28px", color: colors.muted }}>
              Join SkillSwap and be part of a global learning community.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 17 }}>
              <label style={{ display: "grid", gap: 8, fontSize: 14 }}>
                Full Name
                <span style={{ position: "relative" }}>
                  <UserRound size={20} style={iconStyle} />
                  <input
                    className="signup-input"
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    autoComplete="name"
                    required
                    style={inputStyle}
                  />
                </span>
              </label>

              <label style={{ display: "grid", gap: 8, fontSize: 14 }}>
                Email Address
                <span style={{ position: "relative" }}>
                  <Mail size={20} style={iconStyle} />
                  <input
                    className="signup-input"
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
                    className="signup-input"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="new-password"
                    minLength={6}
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
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: 0,
                      padding: 5,
                      background: "transparent",
                      color: colors.muted,
                      cursor: "pointer",
                    }}
                  >
                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                  </button>
                </span>
              </label>

              <label style={{ display: "grid", gap: 8, fontSize: 14 }}>
                Confirm Password
                <span style={{ position: "relative" }}>
                  <LockKeyhole size={20} style={iconStyle} />
                  <input
                    className="signup-input"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    autoComplete="new-password"
                    required
                    style={{ ...inputStyle, paddingRight: 48 }}
                  />
                  <button
                    type="button"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      border: 0,
                      padding: 5,
                      background: "transparent",
                      color: colors.muted,
                      cursor: "pointer",
                    }}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>
                </span>
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                  color: colors.muted,
                  fontSize: 13,
                  lineHeight: 1.5,
                  cursor: "pointer",
                }}
              >
                <input
                  className="signup-check"
                  type="checkbox"
                  checked={agreed}
                  onChange={(event) => setAgreed(event.target.checked)}
                  required
                />
                <span>
                  I agree to the <strong>Terms of Service</strong> and{" "}
                  <strong>Privacy Policy</strong>.
                </span>
              </label>

              {error && (
                <p role="alert" style={{ margin: 0, color: "#dc2626" }}>
                  {error}
                </p>
              )}

              <button
                className="signup-submit"
                type="submit"
                disabled={loading}
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
                  opacity: loading ? 0.75 : 1,
                }}
              >
                {loading ? "Creating account..." : "Sign Up"}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>

            <p
              style={{
                margin: "26px 0 0",
                color: colors.muted,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: colors.accent,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
