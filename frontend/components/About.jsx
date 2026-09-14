
import { useState } from "react";
import {
  Sparkles,
  RefreshCw,
  BookOpen,
  GraduationCap,
  UsersRound,
  Lightbulb,
  MessageCircle,
  Target,
} from "lucide-react";

export default function About({ dark }) {
  const [activeTab, setActiveTab] = useState("learn");

  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b8b4cc" : "#687187",
    accent: "#8b5cf6",
    card: dark ? "#1b1930" : "#ffffff",
    border: dark ? "#37334f" : "#e5e7eb",
    soft: dark ? "#30264e" : "#eee8ff",
    softText: dark ? "#d9ccff" : "#5135a4",
    input: dark ? "#25223d" : "#f0f1f6",
  };

  const experiences = {
    learn: {
      title: "Learn something new.",
      description:
        "Find people who can guide you, answer your questions, and help you develop practical skills through shared experiences.",
      icon: BookOpen,
      label: "Explore possibilities",
      skills: ["Web Development", "UI/UX Design", "Communication"],
      footer:
        "Every conversation is an opportunity to learn something new.",
    },

    teach: {
      title: "Share what you know.",
      description:
        "Turn your existing knowledge into someone else's opportunity. Help others learn while strengthening your own understanding.",
      icon: GraduationCap,
      label: "Share your expertise",
      skills: ["Programming", "Graphic Design", "Public Speaking"],
      footer:
        "Your knowledge can make a difference in someone's journey.",
    },

    exchange: {
      title: "Grow together.",
      description:
        "Connect with people who have different strengths, exchange knowledge, and build new abilities through mutual learning.",
      icon: RefreshCw,
      label: "Make a meaningful exchange",
      skills: [
        "Find a learning partner",
        "Practice together",
        "Build confidence",
      ],
      footer:
        "The best learning experiences create value for everyone.",
    },
  };

  const current = experiences[activeTab];
  const CurrentIcon = current.icon;

  // Four compact cards at the bottom
  const benefits = [
    {
      icon: UsersRound,
      title: "Learn from People",
      description:
        "Connect with others who can share their experience, guidance, and practical knowledge.",
    },
    {
      icon: Lightbulb,
      title: "Practice Together",
      description:
        "Explore new ideas, solve problems, and strengthen your skills through collaboration.",
    },
    {
      icon: RefreshCw,
      title: "Exchange Skills",
      description:
        "Teach what you know, learn what you need, and create opportunities for both sides.",
    },
    {
      icon: Target,
      title: "Achieve Your Goals",
      description:
        "Build confidence, develop useful abilities, and make meaningful progress in your learning journey.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        width: "100%",
        minHeight: "calc(100vh - 79px)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "clamp(24px, 3.5vh, 40px) clamp(20px, 4vw, 64px)",
        color: colors.text,
      }}
    >
      <div className="about-main">

        {/* LEFT: ABOUT CONTENT */}

        <div className="about-copy">
          <div
            className="about-badge"
            style={{
              background: colors.soft,
              color: colors.softText,
            }}
          >
            <Sparkles size={15} />
            ABOUT SKILLSWAP
          </div>

          <h1 className="about-heading">
            Skills grow when they’re shared.
          </h1>

          <p
            className="about-intro"
            style={{ color: colors.muted }}
          >
            SkillSwap is a skill-exchange platform where people teach
            what they know and learn from others. It brings learners
            and teachers together to make learning more collaborative,
            practical, and accessible.
          </p>

          <p
            className="about-paragraph"
            style={{ color: colors.muted }}
          >
            Everyone has something valuable to share. Whether you're
            exploring web development, improving your communication
            skills, or discovering a completely new field, SkillSwap
            helps you connect with people who can support your
            learning journey.
          </p>

          <p
            className="about-paragraph"
            style={{ color: colors.muted }}
          >
            Our approach is simple: exchange knowledge, practice
            together, and grow through shared experiences. Instead
            of learning alone, you can ask questions, share ideas,
            and develop practical abilities with someone who
            understands your goals.
          </p>

          <p
            className="about-paragraph"
            style={{ color: colors.muted }}
          >
            We believe learning should be a two-way experience.
            You don't need to know everything to teach something,
            and you don't need to start from zero to learn something
            new. Every skill has value, and every person has
            something to contribute.
          </p>

          <div className="about-tags">
            {[
              "Learn Together",
              "Share Knowledge",
              "Grow Together",
            ].map((value) => (
              <span
                key={value}
                className="about-tag"
                style={{
                  background: colors.card,
                  borderColor: colors.border,
                  color: colors.text,
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT: INTERACTIVE EXPERIENCE CARD */}

        <div
          className="about-experience"
          style={{
            background: colors.card,
            borderColor: colors.border,
          }}
        >
          <div className="experience-header">
            <div>
              <p className="experience-eyebrow">
                THE SKILLSWAP EXPERIENCE
              </p>

              <h2 className="experience-heading">
                Learning works both ways.
              </h2>
            </div>
          </div>

          <div
            className="experience-tabs"
            style={{ background: colors.input }}
            role="tablist"
            aria-label="Explore the SkillSwap experience"
          >
            {["learn", "teach", "exchange"].map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`experience-tab ${
                  activeTab === tab ? "active" : ""
                }`}
                style={{
                  color:
                    activeTab === tab
                      ? colors.accent
                      : colors.muted,
                  background:
                    activeTab === tab
                      ? colors.card
                      : "transparent",
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="experience-content" key={activeTab}>
            <div
              className="experience-content-icon"
              style={{
                background: colors.soft,
                color: colors.accent,
              }}
            >
              <CurrentIcon size={24} />
            </div>

            <h3 className="experience-title">
              {current.title}
            </h3>

            <p
              className="experience-description"
              style={{ color: colors.muted }}
            >
              {current.description}
            </p>

            <p className="experience-label">
              {current.label}
            </p>

            <div className="experience-skills">
              {current.skills.map((skill) => (
                <span
                  key={skill}
                  className="experience-skill"
                  style={{
                    background: colors.soft,
                    color: colors.softText,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div
            className="experience-footer"
            style={{ borderColor: colors.border }}
          >
            <MessageCircle
              size={19}
              color={colors.accent}
              style={{ flexShrink: 0 }}
            />

            <p style={{ color: colors.muted }}>
              {current.footer}
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM: FOUR COMPACT BENEFIT CARDS */}

      <div className="about-benefits">
        <div className="benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="benefit-card"
                style={{
                  background: colors.card,
                  borderColor: colors.border,
                }}
              >
                <div
                  className="benefit-icon"
                  style={{
                    background: colors.soft,
                    color: colors.accent,
                  }}
                >
                  <Icon size={21} />
                </div>

                <h3>{benefit.title}</h3>

                <p style={{ color: colors.muted }}>
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
        #about {
          font-family: inherit;
        }

        .about-main {
          display: grid;
          grid-template-columns:
            minmax(0, 1.08fr)
            minmax(0, 0.92fr);
          align-items: center;
          gap: clamp(32px, 4vw, 64px);
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
        }

        .about-copy {
          min-width: 0;
          max-width: 760px;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 8px 13px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.07em;
        }

        .about-heading {
          font-size: clamp(36px, 3.6vw, 56px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1.8px;
          margin: 24px 0 20px;
          max-width: 680px;
        }

        .about-intro,
        .about-paragraph {
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.75;
          margin: 0 0 14px;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 22px;
        }

        .about-tag {
          border: 1px solid;
          border-radius: 12px;
          padding: 9px 14px;
          font-size: 13px;
          font-weight: 600;
        }

        /* EXPERIENCE CARD */

        .about-experience {
          min-width: 0;
          width: 100%;
          box-sizing: border-box;
          border: 1px solid;
          border-radius: 24px;
          padding: clamp(22px, 2.4vw, 34px);
          box-shadow: 0 16px 45px rgba(60, 45, 100, 0.06);
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 25px;
        }

        .experience-eyebrow {
          color: #8b5cf6;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.09em;
          margin: 0 0 10px;
        }

        .experience-heading {
          font-size: clamp(20px, 1.8vw, 26px);
          line-height: 1.3;
          font-weight: 750;
          margin: 0;
        }

        .experience-icon,
        .experience-content-icon,
        .benefit-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          border-radius: 15px;
        }

        .experience-icon {
          width: 44px;
          height: 44px;
        }

        .experience-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 5px;
          padding: 5px;
          border-radius: 13px;
          margin-bottom: 25px;
        }

        .experience-tab {
          border: 0;
          border-radius: 9px;
          padding: 12px 5px;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: background 180ms ease, color 180ms ease;
        }

        .experience-tab.active {
          box-shadow: 0 2px 8px rgba(25, 25, 50, 0.08);
        }

        .experience-tab:focus-visible {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        .experience-content {
          animation: about-fade-in 220ms ease both;
        }

        .experience-content-icon {
          width: 54px;
          height: 54px;
          margin-bottom: 15px;
        }

        .experience-title {
          font-size: clamp(20px, 1.8vw, 25px);
          font-weight: 750;
          margin: 0 0 12px;
        }

        .experience-description {
          font-size: 14px;
          line-height: 1.75;
          margin: 0 0 20px;
        }

        .experience-label {
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 10px;
        }

        .experience-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .experience-skill {
          font-size: 12px;
          font-weight: 500;
          padding: 9px 12px;
          border-radius: 9px;
        }

        .experience-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid;
          padding-top: 20px;
          margin-top: 24px;
        }

        .experience-footer p {
          font-size: 12px;
          line-height: 1.6;
          margin: 0;
        }

        /* FOUR COMPACT CARDS */

        .about-benefits {
          width: 100%;
          max-width: 1500px;
          margin: auto auto 0;
          padding-top: clamp(28px, 4vh, 42px);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .benefit-card {
          min-width: 0;
          border: 1px solid;
          border-radius: 17px;
          padding: 18px 19px;
          transition:
            transform 180ms ease,
            border-color 180ms ease;
        }

        .benefit-icon {
          width: 42px;
          height: 42px;
          margin-bottom: 12px;
        }

        .benefit-card h3 {
          font-size: 15px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 7px;
        }

        .benefit-card p {
          font-size: 13px;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes about-fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .benefit-card:hover {
            transform: translateY(-3px);
            border-color: #a78bfa;
          }
        }

        /* TABLET */

        @media (max-width: 1100px) {
          .about-main {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(0, 0.9fr);
            gap: 28px;
          }

          .about-heading {
            font-size: clamp(32px, 4vw, 42px);
            letter-spacing: -1px;
          }

          .about-experience {
            padding: 22px;
          }

          .benefits-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* MOBILE */

        @media (max-width: 760px) {
          #about {
            min-height: auto;
            padding: 32px 20px;
          }

          .about-main {
            grid-template-columns: minmax(0, 1fr);
            gap: 30px;
          }

          .about-heading {
            font-size: clamp(34px, 7vw, 46px);
            margin-top: 22px;
          }

          .about-experience {
            border-radius: 20px;
          }

          .about-benefits {
            padding-top: 28px;
            margin-top: 0;
          }

          .benefits-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }

          .benefit-card {
            padding: 18px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-content {
            animation: none;
          }

          .experience-tab,
          .benefit-card {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}