import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import LandingPage from "../pages/landing/Landing/Landing";

export default function AuthLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/register";
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setFlipped(isRegister);
    });

    return () => cancelAnimationFrame(frame);
  }, [isRegister]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <>
      <LandingPage />

      <div style={s.overlay}>
        <div style={s.backdrop} />

        <button
          type="button"
          onClick={() => navigate("/", { replace: true })}
          aria-label="Close"
          style={s.close}
        >
          <X size={20} />
        </button>

        <div style={s.scene}>
          <div
            style={{
              ...s.card,
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div
              style={{
                ...s.face,
                ...s.front,
                pointerEvents: flipped ? "none" : "auto",
              }}
            >
              <LoginForm />
            </div>

            <div
              style={{
                ...s.face,
                ...s.back,
                pointerEvents: flipped ? "auto" : "none",
              }}
            >
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const s = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  backdrop: {
    position: "absolute",
    inset: 0,
    background: "rgba(20,14,35,.22)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  close: {
    position: "fixed",
    top: 18,
    right: 18,
    zIndex: 1002,
    width: 40,
    height: 40,
    display: "grid",
    placeItems: "center",
    border: "1px solid var(--border)",
    borderRadius: 11,
    background: "var(--surface)",
    color: "var(--text)",
    cursor: "pointer",
    boxShadow: "0 8px 24px rgba(0,0,0,.16)",
  },

  scene: {
    position: "relative",
    zIndex: 1001,
    width: "min(700px, 92vw)",
    height: "min(610px, calc(100vh - 50px))",
    perspective: "1400px",
  },

  card: {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform .8s cubic-bezier(.22,.61,.36,1)",
  },

  face: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    border: "1px solid var(--border)",
    borderRadius: 20,
    background: "var(--surface)",
    color: "var(--text)",
    boxShadow: "0 25px 70px rgba(25,15,50,.22)",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  },

  front: {
    transform: "rotateY(0deg)",
  },

  back: {
    transform: "rotateY(180deg)",
  },
};