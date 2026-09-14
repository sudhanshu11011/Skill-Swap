import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  GraduationCap,
  Handshake,
  Lightbulb,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    label: "GET STARTED",
    title: "Share what you know.",
    subtitle: "Every skill has value.",
    description:
      "Create your learning profile. Tell the community what you can teach, what you want to learn, and what you're passionate about.",
    icon: BookOpen,
    color: "#8b5cf6",
    soft: "rgba(139, 92, 246, 0.12)",
    points: [
      "Add skills you can teach",
      "Choose skills you want to learn",
      "Set your learning goals",
    ],
    visualTitle: "Your skill profile",
    visualDescription:
      "A little about what you know and what you want to discover.",
    tags: ["React", "UI/UX Design", "Communication"],
    footer: "Your knowledge is your contribution.",
  },
  {
    number: "02",
    label: "FIND YOUR MATCH",
    title: "Meet your learning partner.",
    subtitle: "The right people make a difference.",
    description:
      "Discover people with complementary skills. Find someone who can teach what you want to learn and who wants to learn something you already know.",
    icon: Users,
    color: "#0d9488",
    soft: "rgba(13, 148, 136, 0.12)",
    points: [
      "Explore compatible skill profiles",
      "Discover shared learning interests",
      "Connect with the right partner",
    ],
    visualTitle: "A perfect skill match",
    visualDescription:
      "Two people. Different strengths. A shared opportunity to grow.",
    tags: ["You teach React", "Partner teaches Figma"],
    footer: "The best connections create value for both.",
  },
  {
    number: "03",
    label: "LEARN & GROW",
    title: "Exchange skills. Grow together.",
    subtitle: "Learning becomes a shared experience.",
    description:
      "Connect, exchange knowledge, and practice together. Set your own pace, ask questions, and turn your learning goals into real progress.",
    icon: GraduationCap,
    color: "#ea580c",
    soft: "rgba(234, 88, 12, 0.12)",
    points: [
      "Plan your learning sessions",
      "Teach, practice, and exchange ideas",
      "Celebrate your progress together",
    ],
    visualTitle: "Your next milestone",
    visualDescription:
      "Turn what you learn into something you can actually do.",
    tags: ["Practice together", "Build confidence"],
    footer: "Every exchange is a step forward.",
  },
];

export default function HowItWorks({ dark = true }) {
  const [activeStep, setActiveStep] = useState(0);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  const colors = {
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#aaa5c2" : "#697187",
    card: dark ? "#1b1930" : "#ffffff",
    border: dark ? "#37334f" : "#e5e7eb",
    soft: dark ? "#25213a" : "#f0edfa",
  };

  return (
    <section
      id="how-it-works"
      className={`hiw-page ${dark ? "hiw-dark" : "hiw-light"}`}
      style={{
        "--hiw-text": colors.text,
        "--hiw-muted": colors.muted,
        "--hiw-card": colors.card,
        "--hiw-border": colors.border,
        "--hiw-soft": colors.soft,
        "--hiw-accent": current.color,
        "--hiw-accent-soft": current.soft,
      }}
    >
      <div className="hiw-container">
        {/* INTRODUCTION */}
        <header className="hiw-header">
          <div className="hiw-eyebrow">
            <Sparkles size={15} />
            HOW IT WORKS
          </div>

          <h1 className="hiw-heading">
            Learn together.
            <br />
            <span>Grow beyond limits.</span>
          </h1>

          <p className="hiw-subtitle">
            Your skills can take you further when you share them. Discover how
            SkillSwap makes learning a two-way experience.
          </p>
        </header>

        {/* STEP SELECTOR */}
        <div className="hiw-step-selector">
          <div className="hiw-progress-track" aria-hidden="true">
            <div
              className="hiw-progress-fill"
              style={{
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
              }}
            />
          </div>

          <div
            className="hiw-step-tabs"
            role="tablist"
            aria-label="How SkillSwap works"
          >
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const active = activeStep === index;
              const completed = index < activeStep;

              return (
                <button
                  key={step.number}
                  type="button"
                  role="tab"
                  id={`hiw-tab-${index}`}
                  aria-selected={active}
                  aria-controls="hiw-step-panel"
                  tabIndex={active ? 0 : -1}
                  className={`hiw-step-tab ${active ? "is-active" : ""}`}
                  onClick={() => setActiveStep(index)}
                  style={{
                    "--step-color": step.color,
                    "--step-soft": step.soft,
                  }}
                >
                  <span className="hiw-tab-icon" aria-hidden="true">
                    {completed ? <Check size={19} /> : <StepIcon size={19} />}
                  </span>

                  <span className="hiw-tab-copy">
                    <span className="hiw-tab-number">STEP {step.number}</span>
                    <span className="hiw-tab-label">
                      {index === 0
                        ? "Share your skills"
                        : index === 1
                          ? "Find a partner"
                          : "Start exchanging"}
                    </span>
                  </span>

                  <ChevronRight
                    className="hiw-tab-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* INTERACTIVE EXPERIENCE */}
        <div
          className="hiw-experience"
          id="hiw-step-panel"
          role="tabpanel"
          aria-labelledby={`hiw-tab-${activeStep}`}
          key={activeStep}
        >
          {/* LEFT: STEP DETAILS */}
          <div className="hiw-details">
            <div className="hiw-step-badge">
              <span>{current.number}</span>
              <span>{current.label}</span>
            </div>

            <h2 className="hiw-step-heading">{current.title}</h2>

            <p className="hiw-step-subtitle">{current.subtitle}</p>

            <p className="hiw-description">{current.description}</p>

            <div className="hiw-checklist">
              {current.points.map((point) => (
                <div key={point} className="hiw-check-item">
                  <span className="hiw-check-icon" aria-hidden="true">
                    <Check size={14} />
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="hiw-navigation">
              <div className="hiw-navigation-dots" aria-label="Step navigation">
                {steps.map((step, index) => (
                  <button
                    key={step.number}
                    type="button"
                    aria-label={`Go to step ${step.number}`}
                    aria-current={activeStep === index ? "step" : undefined}
                    className={`hiw-dot ${
                      activeStep === index ? "is-active" : ""
                    }`}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="hiw-next-button"
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
              >
                {activeStep === 2 ? "Explore again" : "Next step"}
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* RIGHT: VISUAL LEARNING CARD */}
          <div className="hiw-visual">
            <div className="hiw-visual-top">
              <div className="hiw-visual-label">
                <span className="hiw-live-dot" aria-hidden="true" />
                THE SKILLSWAP EXPERIENCE
              </div>

              <span className="hiw-visual-number">{current.number} / 03</span>
            </div>

            <div className="hiw-visual-main">
              <div className="hiw-illustration" aria-hidden="true">
                <div className="hiw-orbit hiw-orbit-one" />
                <div className="hiw-orbit hiw-orbit-two" />

                <div className="hiw-floating-icon hiw-floating-one">
                  <Lightbulb size={23} />
                </div>

                <div className="hiw-floating-icon hiw-floating-two">
                  <MessageCircle size={22} />
                </div>

                <div className="hiw-main-icon">
                  <CurrentIcon size={43} strokeWidth={1.6} />
                </div>

                <div className="hiw-floating-icon hiw-floating-three">
                  {activeStep === 0 ? (
                    <BookOpen size={21} />
                  ) : activeStep === 1 ? (
                    <Handshake size={22} />
                  ) : (
                    <Zap size={22} />
                  )}
                </div>
              </div>

              <div className="hiw-visual-copy">
                <h3>{current.visualTitle}</h3>
                <p>{current.visualDescription}</p>
              </div>

              <div className="hiw-visual-tags">
                {current.tags.map((tag) => (
                  <span key={tag} className="hiw-visual-tag">
                    <CheckCircle2 size={14} aria-hidden="true" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="hiw-visual-footer">
              <div className="hiw-footer-icon" aria-hidden="true">
                {activeStep === 0 ? (
                  <BookOpen size={19} />
                ) : activeStep === 1 ? (
                  <Handshake size={19} />
                ) : (
                  <GraduationCap size={20} />
                )}
              </div>

              <p>{current.footer}</p>

              <Sparkles
                className="hiw-footer-sparkle"
                size={19}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM BENEFIT STRIP */}
        <div className="hiw-bottom">
          <div className="hiw-bottom-heading">
            <div className="hiw-bottom-icon" aria-hidden="true">
              <Search size={19} />
            </div>

            <div>
              <h3>Learning, your way.</h3>
              <p>Simple, collaborative, and built around you.</p>
            </div>
          </div>

          <div className="hiw-bottom-points">
            <span>
              <CheckCircle2 size={16} aria-hidden="true" />
              Learn at your own pace
            </span>
            <span>
              <CheckCircle2 size={16} aria-hidden="true" />
              Share knowledge freely
            </span>
            <span>
              <CheckCircle2 size={16} aria-hidden="true" />
              Grow together
            </span>
          </div>
        </div>
      </div>

      <style>{`
        #how-it-works {
          width: 100%;
          min-width: 0;
          padding: 38px clamp(20px, 4vw, 64px) 34px;
          color: var(--hiw-text);
          font-family: inherit;
          box-sizing: border-box;
        }

        #how-it-works *,
        #how-it-works *::before,
        #how-it-works *::after {
          box-sizing: border-box;
        }

        .hiw-container {
          width: 100%;
          max-width: 1500px;
          min-width: 0;
          margin: 0 auto;
        }

        /* LEFT-ALIGNED INTRO */
        .hiw-header {
          width: 100%;
          max-width: 760px;
          margin: 0 0 34px;
          text-align: left;
        }

        .hiw-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          padding: 8px 14px;
          border: 1px solid var(--hiw-border);
          border-radius: 999px;
          background: var(--hiw-card);
          color: #8b5cf6;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 0.09em;
        }

        .hiw-heading {
          margin: 20px 0 14px;
          font-size: clamp(34px, 4vw, 53px);
          line-height: 1.13;
          letter-spacing: -1.8px;
          font-weight: 850;
          overflow-wrap: break-word;
        }

        .hiw-heading span {
          color: #8b5cf6;
        }

        .hiw-subtitle {
          max-width: 650px;
          margin: 0;
          color: var(--hiw-muted);
          font-size: 15px;
          line-height: 1.8;
        }

        /* STEP SELECTOR */
        .hiw-step-selector {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 0 0 25px;
        }

        .hiw-progress-track {
          position: absolute;
          top: 28px;
          left: 16.5%;
          right: 16.5%;
          height: 2px;
          background: var(--hiw-border);
        }

        .hiw-progress-fill {
          height: 100%;
          background: #8b5cf6;
          transition: width 260ms ease;
        }

        .hiw-step-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .hiw-step-tab {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
          min-height: 76px;
          padding: 13px 15px;
          border: 1px solid var(--hiw-border);
          border-radius: 15px;
          background: var(--hiw-card);
          color: var(--hiw-muted);
          font-family: inherit;
          text-align: left;
          cursor: pointer;
          transition:
            border-color 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .hiw-step-tab.is-active {
          border-color: #8b5cf6;
          background: var(--hiw-card);
          color: var(--hiw-text);
          box-shadow: 0 5px 22px rgba(139, 92, 246, 0.09);
        }

        .hiw-tab-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--hiw-soft);
          color: var(--hiw-muted);
        }

        .hiw-step-tab.is-active .hiw-tab-icon {
          background: var(--step-soft);
          color: var(--step-color);
        }

        .hiw-tab-copy {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .hiw-tab-number {
          color: var(--hiw-muted);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
        }

        .hiw-tab-label {
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
          overflow-wrap: anywhere;
        }

        .hiw-tab-arrow {
          margin-left: auto;
          flex-shrink: 0;
          opacity: 0;
          color: #8b5cf6;
          transition: opacity 180ms ease;
        }

        .hiw-step-tab.is-active .hiw-tab-arrow {
          opacity: 1;
        }

        /* MAIN EXPERIENCE */
        .hiw-experience {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          align-items: stretch;
          gap: 25px;
          min-width: 0;
          animation: hiw-enter 260ms ease both;
        }

        .hiw-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          padding: 25px 8px 12px 0;
        }

        .hiw-step-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 12px;
          border-radius: 8px;
          background: var(--hiw-accent-soft);
          color: var(--hiw-accent);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.09em;
        }

        .hiw-step-badge span:first-child {
          padding-right: 10px;
          border-right: 1px solid currentColor;
        }

        .hiw-step-heading {
          margin: 22px 0 8px;
          max-width: 520px;
          font-size: clamp(28px, 3vw, 40px);
          line-height: 1.16;
          font-weight: 800;
          letter-spacing: -1.2px;
          overflow-wrap: break-word;
        }

        .hiw-step-subtitle {
          margin: 0 0 16px;
          color: var(--hiw-accent);
          font-size: 14px;
          font-weight: 650;
          line-height: 1.6;
        }

        .hiw-description {
          max-width: 520px;
          margin: 0;
          color: var(--hiw-muted);
          font-size: 14px;
          line-height: 1.85;
        }

        .hiw-checklist {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 24px;
        }

        .hiw-check-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: var(--hiw-text);
          font-size: 13px;
          line-height: 1.6;
        }

        .hiw-check-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 21px;
          height: 21px;
          margin-top: 1px;
          border-radius: 50%;
          background: var(--hiw-accent-soft);
          color: var(--hiw-accent);
        }

        .hiw-navigation {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          width: 100%;
          margin-top: auto;
          padding-top: 30px;
        }

        .hiw-navigation-dots {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .hiw-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: 0;
          border-radius: 999px;
          background: var(--hiw-border);
          cursor: pointer;
          transition: width 180ms ease, background 180ms ease;
        }

        .hiw-dot.is-active {
          width: 26px;
          background: #8b5cf6;
        }

        .hiw-next-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 43px;
          padding: 11px 17px;
          border: 0;
          border-radius: 11px;
          background: #6d3be8;
          color: #ffffff;
          font-family: inherit;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
          transition: background 180ms ease, transform 180ms ease;
        }

        /* VISUAL CARD */
        .hiw-visual {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--hiw-border);
          border-radius: 22px;
          background: var(--hiw-card);
        }

        .hiw-visual-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 20px 23px;
          border-bottom: 1px solid var(--hiw-border);
        }

        .hiw-visual-label {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--hiw-muted);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 0.08em;
        }

        .hiw-live-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.12);
        }

        .hiw-visual-number {
          color: var(--hiw-muted);
          font-size: 11px;
          font-weight: 650;
          white-space: nowrap;
        }

        .hiw-visual-main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-width: 0;
          padding: 15px 24px 24px;
          background: radial-gradient(
            ellipse at 50% 42%,
            var(--hiw-accent-soft),
            transparent 68%
          );
        }

        .hiw-illustration {
          position: relative;
          display: grid;
          place-items: center;
          width: 230px;
          max-width: 100%;
          aspect-ratio: 1;
        }

        .hiw-orbit {
          position: absolute;
          border: 1px dashed var(--hiw-border);
          border-radius: 50%;
        }

        .hiw-orbit-one {
          width: 82%;
          height: 82%;
        }

        .hiw-orbit-two {
          width: 61%;
          height: 61%;
          border-style: solid;
          opacity: 0.6;
        }

        .hiw-main-icon {
          display: grid;
          place-items: center;
          width: 105px;
          height: 105px;
          border: 1px solid var(--hiw-border);
          border-radius: 30px;
          background: var(--hiw-card);
          color: var(--hiw-accent);
          box-shadow: 0 12px 35px rgba(20, 15, 45, 0.09);
          transform: rotate(-5deg);
        }

        .hiw-floating-icon {
          position: absolute;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 49px;
          height: 49px;
          border: 1px solid var(--hiw-border);
          border-radius: 15px;
          background: var(--hiw-card);
          color: var(--hiw-accent);
          box-shadow: 0 6px 20px rgba(20, 15, 45, 0.07);
        }

        .hiw-floating-one {
          top: 10%;
          left: 13%;
          transform: rotate(-9deg);
        }

        .hiw-floating-two {
          top: 17%;
          right: 8%;
          transform: rotate(8deg);
        }

        .hiw-floating-three {
          right: 12%;
          bottom: 10%;
          transform: rotate(-7deg);
        }

        .hiw-visual-copy {
          max-width: 410px;
          margin-top: 3px;
          text-align: center;
        }

        .hiw-visual-copy h3 {
          margin: 0 0 9px;
          color: var(--hiw-text);
          font-size: 21px;
          line-height: 1.4;
          font-weight: 750;
        }

        .hiw-visual-copy p {
          margin: 0;
          color: var(--hiw-muted);
          font-size: 13px;
          line-height: 1.75;
        }

        .hiw-visual-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 19px;
        }

        .hiw-visual-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          max-width: 100%;
          padding: 9px 12px;
          border: 1px solid var(--hiw-border);
          border-radius: 9px;
          background: var(--hiw-card);
          color: var(--hiw-text);
          font-size: 11px;
          line-height: 1.5;
        }

        .hiw-visual-tag svg {
          flex-shrink: 0;
          color: var(--hiw-accent);
        }

        .hiw-visual-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 21px;
          border-top: 1px solid var(--hiw-border);
          background: var(--hiw-soft);
        }

        .hiw-footer-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 37px;
          height: 37px;
          border-radius: 11px;
          background: var(--hiw-card);
          color: var(--hiw-accent);
        }

        .hiw-visual-footer p {
          flex: 1;
          min-width: 0;
          margin: 0;
          color: var(--hiw-muted);
          font-size: 12px;
          font-weight: 550;
          line-height: 1.6;
        }

        .hiw-footer-sparkle {
          flex-shrink: 0;
          color: var(--hiw-accent);
        }

        /* BOTTOM BENEFITS */
        .hiw-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 25px;
          padding: 20px 23px;
          border: 1px solid var(--hiw-border);
          border-radius: 16px;
          background: var(--hiw-card);
        }

        .hiw-bottom-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .hiw-bottom-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border-radius: 13px;
          background: var(--hiw-accent-soft);
          color: var(--hiw-accent);
        }

        .hiw-bottom-heading h3 {
          margin: 0 0 4px;
          font-size: 14px;
          font-weight: 750;
        }

        .hiw-bottom-heading p {
          margin: 0;
          color: var(--hiw-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .hiw-bottom-points {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex-wrap: wrap;
          gap: 13px 20px;
        }

        .hiw-bottom-points span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--hiw-muted);
          font-size: 11px;
          line-height: 1.5;
        }

        .hiw-bottom-points svg {
          flex-shrink: 0;
          color: #10b981;
        }

        /* FOCUS AND HOVER */
        .hiw-step-tab:focus-visible,
        .hiw-next-button:focus-visible,
        .hiw-dot:focus-visible {
          outline: 2px solid #8b5cf6;
          outline-offset: 4px;
        }

        @media (hover: hover) and (pointer: fine) {
          .hiw-step-tab:hover {
            transform: translateY(-2px);
            border-color: #a78bfa;
          }

          .hiw-next-button:hover {
            background: #5b2dcf;
            transform: translateY(-1px);
          }
        }

        @keyframes hiw-enter {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLET */
        @media (max-width: 950px) {
          #how-it-works {
            padding: 32px 22px;
          }

          .hiw-experience {
            grid-template-columns: minmax(0, 1fr);
            gap: 22px;
          }

          .hiw-details {
            padding: 12px 4px;
          }

          .hiw-step-heading {
            max-width: 650px;
          }

          .hiw-description {
            max-width: 700px;
          }

          .hiw-navigation {
            margin-top: 10px;
          }

          .hiw-visual-main {
            padding-top: 24px;
          }

          .hiw-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 17px;
          }

          .hiw-bottom-points {
            justify-content: flex-start;
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          #how-it-works {
            padding: 28px 16px;
          }

          .hiw-header {
            margin-bottom: 27px;
          }

          .hiw-heading {
            font-size: clamp(31px, 8vw, 42px);
            letter-spacing: -1.2px;
          }

          .hiw-subtitle {
            font-size: 14px;
          }

          .hiw-step-tabs {
            grid-template-columns: minmax(0, 1fr);
            gap: 9px;
          }

          .hiw-progress-track {
            display: none;
          }

          .hiw-step-tab {
            min-height: 65px;
            padding: 11px 13px;
          }

          .hiw-tab-arrow {
            opacity: 0.5;
          }

          .hiw-step-tab.is-active .hiw-tab-arrow {
            opacity: 1;
          }

          .hiw-experience {
            gap: 20px;
          }

          .hiw-details {
            padding: 4px 0;
          }

          .hiw-step-heading {
            font-size: 32px;
            letter-spacing: -0.8px;
          }

          .hiw-description {
            font-size: 13px;
          }

          .hiw-checklist {
            gap: 13px;
          }

          .hiw-check-item {
            font-size: 12px;
          }

          .hiw-navigation {
            padding-top: 23px;
          }

          .hiw-visual {
            border-radius: 18px;
          }

          .hiw-visual-top {
            padding: 15px;
          }

          .hiw-visual-label {
            font-size: 9px;
            letter-spacing: 0.04em;
          }

          .hiw-visual-main {
            padding: 10px 15px 22px;
          }

          .hiw-illustration {
            width: 200px;
          }

          .hiw-main-icon {
            width: 90px;
            height: 90px;
            border-radius: 25px;
          }

          .hiw-floating-icon {
            width: 43px;
            height: 43px;
          }

          .hiw-visual-copy h3 {
            font-size: 19px;
          }

          .hiw-visual-copy p {
            font-size: 12px;
          }

          .hiw-visual-footer {
            padding: 13px;
          }

          .hiw-bottom {
            padding: 17px;
          }

          .hiw-bottom-points {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hiw-experience {
            animation: none;
          }

          .hiw-step-tab,
          .hiw-progress-fill,
          .hiw-next-button,
          .hiw-dot {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
