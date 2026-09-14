
import {
  Sparkles,
  UsersRound,
  GraduationCap,
  Heart,
  ShieldCheck,
  Clock3,
  Trophy,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: UsersRound,
    title: "Learn Anything",
    description:
      "Discover new skills and grow at your own pace with people who can guide you.",
    details: [
      "Explore different skill categories",
      "Learn directly from experienced people",
      "Practice at your own pace",
    ],
    accent: "#8b5cf6",
    soft: "rgba(139, 92, 246, 0.14)",
  },
  {
    icon: GraduationCap,
    title: "Teach Easily",
    description:
      "Turn your existing knowledge into meaningful learning opportunities for others.",
    details: [
      "Share your existing expertise",
      "Help others achieve their goals",
      "Build confidence through teaching",
    ],
    accent: "#10b981",
    soft: "rgba(16, 185, 129, 0.14)",
  },
  {
    icon: Heart,
    title: "Build Connections",
    description:
      "Meet like-minded people, discover shared interests, and develop meaningful connections.",
    details: [
      "Connect through shared interests",
      "Exchange ideas and experiences",
      "Build a learning community",
    ],
    accent: "#ec4899",
    soft: "rgba(236, 72, 153, 0.14)",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description:
      "Learn in a respectful environment where people support one another.",
    details: [
      "Encourage respectful interactions",
      "Create a supportive learning space",
      "Make learning a positive experience",
    ],
    accent: "#3b82f6",
    soft: "rgba(59, 130, 246, 0.14)",
  },
  {
    icon: Clock3,
    title: "Flexible Learning",
    description:
      "Learn and teach on a schedule that works for your daily routine.",
    details: [
      "Choose a convenient learning time",
      "Balance learning with your routine",
      "Progress at a comfortable pace",
    ],
    accent: "#f97316",
    soft: "rgba(249, 115, 22, 0.14)",
  },
  {
    icon: Trophy,
    title: "Grow Together",
    description:
      "Support others while developing your own abilities through shared experiences.",
    details: [
      "Learn through practical collaboration",
      "Strengthen your existing skills",
      "Achieve meaningful learning goals",
    ],
    accent: "#a78bfa",
    soft: "rgba(167, 139, 250, 0.14)",
  },
];

export default function Features({ dark = true }) {
  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b8b4cc" : "#687187",
    background: dark ? "#100e20" : "#f8f9fc",
    card: dark ? "#1b1930" : "#ffffff",
    border: dark ? "#37334f" : "#e5e7eb",
    soft: dark ? "#30264e" : "#eee8ff",
    softText: dark ? "#d9ccff" : "#5135a4",
  };

  return (
    <section
      id="features"
      className="features-page"
      style={{
        color: colors.text,
        background: colors.background,
      }}
    >
      <div className="features-container">
        {/* PAGE INTRODUCTION */}

        <header className="features-header">
          <div
            className="features-badge"
            style={{
              background: colors.soft,
              color: colors.softText,
            }}
          >
            <Sparkles size={15} />
            SKILLSWAP FEATURES
          </div>

          <h1 className="features-heading">
            Why You'll Love{" "}
            <span>SkillSwap</span>
          </h1>

          <p
            className="features-subtitle"
            style={{ color: colors.muted }}
          >
            Learn from others, share what you know, and grow
            through meaningful skill exchanges.
          </p>

          <div className="features-underline" />
        </header>

        {/* ALL SIX FEATURES — PERMANENTLY EXPANDED */}

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="feature-card"
                style={{
                  background: colors.card,
                  borderColor: colors.border,
                  "--feature-accent": feature.accent,
                  "--feature-soft": feature.soft,
                }}
              >
                <div className="feature-card-header">
                  <div
                    className="feature-icon"
                    style={{
                      background: feature.soft,
                      color: feature.accent,
                    }}
                  >
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <div className="feature-card-heading">
                    <h2>{feature.title}</h2>

                    <p style={{ color: colors.muted }}>
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div
                  className="feature-divider"
                  style={{
                    background: colors.border,
                  }}
                />

                <div className="feature-card-content">
                  <p
                    className="feature-content-label"
                    style={{ color: colors.muted }}
                  >
                    WHAT YOU CAN DO
                  </p>

                  <ul className="feature-list">
                    {feature.details.map((detail) => (
                      <li key={detail}>
                        <CheckCircle2
                          size={16}
                          color={feature.accent}
                          strokeWidth={1.8}
                        />

                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="feature-card-bottom">
                  <span
                    className="feature-bottom-line"
                    style={{
                      background: feature.accent,
                    }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        /* PAGE */

        .features-page {
          width: 100%;
          min-height: calc(100vh - 79px);
          box-sizing: border-box;
          padding: 42px 0px 56px;
          font-family: inherit;
        }

        .features-page *,
        .features-page *::before,
        .features-page *::after {
          box-sizing: border-box;
        }

        .features-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0;
          box-sizing: border-box;
        }

        /* INTRODUCTION */

        .features-header {
          width: 100%;
          margin-bottom: 30px;
        }

        .features-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 8px 13px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .features-heading {
          margin: 20px 0 10px;
          font-size: clamp(34px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -1.8px;
          overflow-wrap: break-word;
        }

        .features-heading span {
          color: #8b5cf6;
        }

        .features-subtitle {
          max-width: 720px;
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
        }

        .features-underline {
          width: 36px;
          height: 3px;
          margin-top: 18px;
          border-radius: 999px;
          background: #8b5cf6;
        }

        /* SIX-CARD GRID */

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 1fr;
          gap: 18px;
          width: 100%;
          align-items: stretch;
        }

        /* FEATURE CARD */

        .feature-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 255px;
          padding: 22px;
          border: 1px solid;
          border-radius: 18px;
          overflow: hidden;
          transition:
            border-color 180ms ease,
            transform 180ms ease,
            box-shadow 180ms ease;
        }

        .feature-card-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          min-width: 0;
        }

        .feature-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 14px;
        }

        .feature-card-heading {
          flex: 1;
          min-width: 0;
        }

        .feature-card-heading h2 {
          margin: 2px 0 8px;
          font-size: 17px;
          font-weight: 750;
          line-height: 1.4;
          overflow-wrap: break-word;
        }

        .feature-card-heading p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
          overflow-wrap: break-word;
        }

        /* EXPANDED CONTENT */

        .feature-divider {
          width: 100%;
          height: 1px;
          margin: 20px 0 17px;
          flex-shrink: 0;
        }

        .feature-card-content {
          flex: 1;
          min-width: 0;
        }

        .feature-content-label {
          margin: 0 0 13px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.09em;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          min-width: 0;
          font-size: 12px;
          line-height: 1.55;
        }

        .feature-list li svg {
          flex-shrink: 0;
          margin-top: 1px;
        }

        .feature-list li span {
          min-width: 0;
          overflow-wrap: break-word;
        }

        /* CARD ACCENT */

        .feature-card-bottom {
          display: flex;
          align-items: center;
          margin-top: 19px;
        }

        .feature-bottom-line {
          width: 28px;
          height: 3px;
          border-radius: 999px;
          opacity: 0.9;
        }

        @media (hover: hover) and (pointer: fine) {
          .feature-card:hover {
            transform: translateY(-3px);
            border-color: var(--feature-accent);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          }
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .feature-card {
            min-height: 250px;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .features-page {
            min-height: auto;
            padding: 32px 18px 40px;
          }

          .features-header {
            margin-bottom: 24px;
          }

          .features-heading {
            font-size: clamp(32px, 8vw, 42px);
            letter-spacing: -1px;
            margin-top: 18px;
          }

          .features-subtitle {
            font-size: 14px;
          }

          .features-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .feature-card {
            min-height: 0;
            padding: 20px;
          }

          .feature-card-heading h2 {
            font-size: 16px;
          }

          .feature-card-heading p {
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .feature-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}