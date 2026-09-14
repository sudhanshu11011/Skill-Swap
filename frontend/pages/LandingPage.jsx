import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import About from "../components/About.jsx";

const pageTitles = {
  home: "Home",
  about: "About SkillSwap",
  features: "Features",
  howitworks: "How It Works",
};



export default function LandingPage({ dark = true, section = "home" }) {
  const activeSection = Object.hasOwn(pageTitles, section) ? section : "home";

  const text = dark ? "#f4f2ff" : "#172033";
  const muted = dark ? "#b8b4cc" : "#687187";
  const card = dark ? "#1b1930" : "#ffffff";
  const border = dark ? "#37334f" : "#e5e7eb";

  useEffect(() => {
    document.title = `${pageTitles[activeSection]} | SkillSwap`;
  }, [activeSection]);

  return (
    <main
      aria-label={pageTitles[activeSection]}
      className={`skillswap-page skillswap-page-${activeSection}`}
      style={{
        "--page-text": text,
        "--page-muted": muted,
        "--page-card": card,
        "--page-border": border,
      }}
    >
      {/* HOME */}
      {activeSection === "home" && <Hero dark={dark} />}

      {/* ABOUT */}
      {activeSection === "about" && <About dark={dark} />}

      {/* FEATURES */}
      {activeSection === "features" && (
        <section className="skillswap-features-wrapper">
          <div className="skillswap-features-container">
            <Features dark={dark} />
          </div>
        </section>
      )}

      {/* HOW IT WORKS */}
      {activeSection === "howitworks" && <HowItWorks dark={dark} />}

      <style>{`
        .skillswap-page {
          width: 100%;
          height: 100%;
          min-height: 0;
          overflow-x: hidden;
          overflow-y: auto;
          color: var(--page-text);
          background: ${dark ? "#100e20" : "#f8f9fc"};
          font-family: inherit;
          box-sizing: border-box;
        }

        .skillswap-page *,
        .skillswap-page *::before,
        .skillswap-page *::after {
          box-sizing: border-box;
        }

        /* FEATURES */

        .skillswap-features-wrapper {
          width: 100%;
          min-height: 100%;
          padding: 12px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .skillswap-features-container {
          width: 100%;
          max-width: 1200px;
          min-width: 0;
        }

        /* HOW IT WORKS */

        .howitworks-section {
          width: 100%;
          min-height: 100%;
          padding: 40px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .howitworks-container {
          width: 100%;
          max-width: 1050px;
          margin-inline: auto;
        }

        .howitworks-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .howitworks-eyebrow {
          margin: 0 0 12px;
          color: #8b5cf6;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .howitworks-title {
          margin: 0 0 12px;
          color: var(--page-text);
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.8px;
          overflow-wrap: break-word;
        }

        .howitworks-subtitle {
          margin: 0;
          color: var(--page-muted);
          font-size: 15px;
          line-height: 1.6;
        }

        .howitworks-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
        }

        .howitworks-card {
          min-width: 0;
          padding: 22px;
          border: 1px solid var(--page-border);
          border-radius: 12px;
          background: var(--page-card);
          transition:
            border-color 180ms ease,
            transform 180ms ease;
        }

        .howitworks-step-number {
          display: inline-block;
          color: #8b5cf6;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .howitworks-card h2 {
          margin: 14px 0 8px;
          color: var(--page-text);
          font-size: 20px;
          font-weight: 700;
          line-height: 1.35;
          overflow-wrap: break-word;
        }

        .howitworks-card p {
          margin: 0;
          color: var(--page-muted);
          font-size: 15px;
          line-height: 1.6;
          overflow-wrap: break-word;
        }

        @media (hover: hover) and (pointer: fine) {
          .howitworks-card:hover {
            border-color: #8b5cf6;
            transform: translateY(-3px);
          }
        }

        /* TABLET */

        @media (max-width: 900px) {
          .howitworks-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {
          .skillswap-features-wrapper {
            padding: 16px;
          }

          .howitworks-section {
            min-height: auto;
            padding: 32px 18px;
          }

          .howitworks-header {
            margin-bottom: 24px;
          }

          .howitworks-title {
            font-size: clamp(28px, 7vw, 36px);
            letter-spacing: -0.5px;
          }

          .howitworks-subtitle {
            font-size: 14px;
          }

          .howitworks-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .howitworks-card {
            padding: 20px;
          }

          .howitworks-card h2 {
            font-size: 18px;
          }

          .howitworks-card p {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .howitworks-card {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
