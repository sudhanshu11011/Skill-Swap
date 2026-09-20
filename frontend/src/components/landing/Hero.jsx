import { ArrowRight, Play, Sparkles } from "lucide-react";
import useResponsive from "../../hooks/useResponsive";

export default function Hero() {
  const { isMobile, isSmallMobile } = useResponsive();

  return (
    <section
      id="home"
      style={{
        ...s.hero,
        minHeight: "calc(100svh - 69px)",
        gridTemplateColumns: isMobile ? "1fr" : "0.92fr 1.08fr",
        padding: isSmallMobile
          ? "34px 18px 42px"
          : isMobile
            ? "44px 28px 50px"
            : "48px 6% 55px",
      }}
    >
      <div
        style={{
          ...s.content,
          textAlign: isMobile ? "center" : "left",
          alignItems: isMobile ? "center" : "flex-start",
        }}
      >
        <div style={s.badge}>
          <Sparkles size={14} />
          <span>Learn together. Grow together.</span>
        </div>

        <h1
          style={{
            ...s.title,
            fontSize: isSmallMobile ? 42 : isMobile ? 50 : 66,
          }}
        >
          Exchange Skills.
          <br />
          <span>Build Opportunities.</span>
        </h1>

        <p
          style={{
            ...s.text,
            fontSize: isSmallMobile ? 15 : 17,
            marginLeft: isMobile ? "auto" : 0,
            marginRight: isMobile ? "auto" : 0,
          }}
        >
          SkillSwap connects people who want to teach and learn skills from each
          other. No money, just knowledge and growth.
        </p>

        <div
          style={{
            ...s.buttons,
            justifyContent: isMobile ? "center" : "flex-start",
            flexDirection: isSmallMobile ? "column" : "row",
            width: isSmallMobile ? "100%" : "auto",
          }}
        >
          <a href="/register" style={s.primary}>
            Get Started for Free
            <ArrowRight size={17} />
          </a>

          <button type="button" style={s.secondary}>
            <Play size={14} fill="currentColor" />
            Watch Video
          </button>
        </div>
      </div>

      <div
        style={{
          ...s.visual,
          minHeight: isMobile ? 360 : 520,
        }}
      >
        <div style={s.glow} />

        <img
          src="/heroimage.png"
          alt="SkillSwap community"
          style={{
            ...s.image,
            maxWidth: isSmallMobile ? 360 : isMobile ? 520 : 700,
          }}
        />
      </div>
    </section>
  );
}

const s = {
  hero: {
    position: "relative",
    marginTop: 68,
    display: "grid",
    alignItems: "center",
    boxSizing: "border-box",
    overflow: "hidden",
    background:
      "radial-gradient(circle at 78% 45%, rgba(139,92,246,.12), transparent 28%), radial-gradient(circle at 15% 85%, rgba(91,32,229,.06), transparent 24%), var(--page-bg)",
    fontFamily:
      "Inter, Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  },

  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    maxWidth: 650,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    width: "fit-content",
    padding: "9px 14px",
    border: "1px solid rgba(91,32,229,.12)",
    borderRadius: 999,
    background: "var(--soft)",
    color: "var(--primary)",
    fontSize: 13,
    fontWeight: 600,
    boxShadow: "0 5px 18px rgba(91,32,229,.07)",
  },

  title: {
    margin: "25px 0 20px",
    color: "var(--text)",
    fontWeight: 800,
    lineHeight: 1.03,
    letterSpacing: "-2.4px",
  },

  text: {
    maxWidth: 530,
    marginTop: 0,
    marginBottom: 0,
    color: "var(--muted)",
    lineHeight: 1.7,
  },

  buttons: {
    display: "flex",
    gap: 13,
    marginTop: 31,
  },

  primary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    minHeight: 50,
    padding: "0 23px",
    borderRadius: 12,
    background: "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 700,
    boxShadow: "0 12px 25px rgba(91,32,229,.22)",
    transition: "transform .2s ease, box-shadow .2s ease",
  },

  secondary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    minHeight: 50,
    padding: "0 22px",
    border: "1px solid var(--border)",
    borderRadius: 12,
    background: "var(--surface)",
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform .2s ease, background .2s ease",
  },

  trust: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginTop: 27,
    color: "var(--muted)",
    fontSize: 13,
    fontWeight: 500,
  },

  dots: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },

  visual: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  glow: {
    position: "absolute",
    width: "70%",
    aspectRatio: "1",
    borderRadius: "50%",
    background: "rgba(139,92,246,.11)",
    filter: "blur(45px)",
  },

  image: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    height: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 22px 35px rgba(60,35,120,.12))",
    animation: "heroFloat 5s ease-in-out infinite",
  },
};
