import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero({ dark }) {
  const font = "var(--sans, system-ui, 'Segoe UI', Roboto, sans-serif)";

  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#c2bdd5" : "#566176",

    background: dark
      ? "linear-gradient(110deg, #17152b 0%, #211a3b 100%)"
      : "linear-gradient(110deg, #fff9f7 0%, #f7f6ff 100%)",

    pill: dark ? "#30264e" : "#eee8ff",
    pillText: dark ? "#d9ccff" : "#5135a4",

    cardBorder: dark ? "#3b3658" : "#e0e2eb",
    secondaryButton: dark ? "#211d39" : "#ffffff",
  };

  return (
    <section
      id="home"
      style={{
        width: "100%",
        minHeight: "calc(100vh - 79px)",
        boxSizing: "border-box",
        overflow: "hidden",
        display: "grid",
        alignItems: "center",
        background: colors.background,
        padding: "clamp(32px, 5vh, 60px) 0",
        fontFamily: font,
      }}
    >
      <div
        className="skillswap-hero-inner"
        style={{
          width: "calc(100% - 48px)",
          maxWidth: 1600,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
          alignItems: "center",
          gap: "clamp(24px, 3vw, 48px)",
        }}
      >
        <div
          className="skillswap-hero-content"
          style={{
            minWidth: 0,
            width: "100%",
            maxWidth: 650,
            justifySelf: "start",
            fontFamily: font,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 13px",
              borderRadius: 10,
              background: colors.pill,
              color: colors.pillText,
              fontSize: 13,
              lineHeight: 1.4,
              fontFamily: font,
            }}
          >
            <Sparkles size={16} />
            Join a community of learners and teachers
          </div>

          <h1
            style={{
              margin: "22px 0 16px",
              color: colors.text,
              fontFamily: font,
              fontSize: "clamp(36px, 3.7vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.4px",
              overflowWrap: "normal",
              wordBreak: "normal",
            }}
          >
            Exchange Skills.
            <br />
            <span
              style={{
                color: "#8b5cf6",
                fontFamily: font,
                fontWeight: "inherit",
              }}
            >
              Build Opportunities.
            </span>
          </h1>

          <p
            style={{
              maxWidth: 600,
              margin: 0,
              color: colors.muted,
              fontFamily: font,
              fontSize: "clamp(15px, 1.2vw, 18px)",
              lineHeight: 1.7,
            }}
          >
            SkillSwap connects people who want to teach and learn skills from
            each other. No money, just knowledge and growth.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 12,
              marginTop: 25,
            }}
          >
            <Link
              to="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "13px 20px",
                borderRadius: 14,
                background: "linear-gradient(100deg, #7435e8, #4b28df)",
                color: "#fff",
                textDecoration: "none",
                fontFamily: font,
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
            >
              Get Started for Free
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/howitworks"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "13px 20px",
                border: `1px solid ${colors.cardBorder}`,
                borderRadius: 14,
                background: colors.secondaryButton,
                color: colors.text,
                textDecoration: "none",
                fontFamily: font,
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
              }}
            >
              <Play size={16} color="#8b5cf6" />
              How It Works
            </Link>
          </div>
        </div>

        <div
          className="skillswap-hero-visual"
          style={{
            position: "relative",
            minWidth: 0,
            width: "100%",
            height: "min(76vh, 760px)",
            minHeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/heroimage.png"
            alt="Learner using a laptop, surrounded by a community of teachers and learners"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              maxWidth: "none",
              objectFit: "contain",
              objectPosition: "center",
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) and (min-width: 761px) {
          .skillswap-hero-inner {
            width: calc(100% - 40px) !important;
            grid-template-columns:
              minmax(0, 0.95fr)
              minmax(0, 1.05fr) !important;
            gap: 24px !important;
          }

          .skillswap-hero-content {
            max-width: 100% !important;
          }

          #home h1 {
            font-size: clamp(34px, 3.8vw, 46px) !important;
            letter-spacing: -1px !important;
          }

          .skillswap-hero-visual {
            height: min(65vh, 600px) !important;
            min-height: 320px !important;
          }
        }

        @media (max-width: 760px) {
          #home {
            min-height: auto;
            padding: 36px 0 24px;
          }

          .skillswap-hero-inner {
            width: calc(100% - 40px) !important;
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 28px !important;
          }

          .skillswap-hero-content {
            width: 100% !important;
            max-width: 100% !important;
          }

          #home h1 {
            font-family: var(--sans, system-ui, 'Segoe UI', Roboto, sans-serif) !important;
            font-size: clamp(34px, 7.5vw, 48px) !important;
            letter-spacing: -1px !important;
            line-height: 1.12 !important;
          }

          .skillswap-hero-visual {
            width: 100% !important;
            height: clamp(300px, 75vw, 460px) !important;
            min-height: 0 !important;
            justify-content: center !important;
          }

          .skillswap-hero-visual img {
            width: 100% !important;
            height: 100% !important;
            object-position: center !important;
          }
        }

        @media (max-width: 420px) {
          .skillswap-hero-inner {
            width: calc(100% - 32px) !important;
          }

          .skillswap-hero-visual {
            height: 300px !important;
          }

          #home h1 {
            font-size: 34px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #home {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}
