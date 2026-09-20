import { ArrowUp, Mail, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

const groups = [
  ["Product", [["Features", "#features"], ["How It Works", "#how-it-works"]]],
  ["Company", [["About", "#about"], ["Contact", "#contact"]]],
  ["Support", [["FAQ", "#faq"], ["Privacy Policy", "#privacy-policy"]]],
];

export default function Footer() {
  const { isMobile, isSmallMobile } = useResponsive();

  return (
    <footer
      style={{
        ...s.footer,
        padding: isSmallMobile
          ? "60px 18px 22px"
          : isMobile
            ? "70px 28px 24px"
            : "85px 6% 26px",
      }}
    >
      <div
        style={{
          ...s.content,
          gridTemplateColumns: isSmallMobile
            ? "1fr"
            : isMobile
              ? "1fr 1fr"
              : "2fr repeat(3,1fr)",
          gap: isMobile ? 38 : 60,
        }}
      >
        <div style={s.brand}>
          <Link to="/" style={s.logo}>
            <img src="/skillswaplogo.png" alt="SkillSwap" style={s.logoImg} />
            <span>SkillSwap</span>
          </Link>

          <p style={s.description}>
            Exchange skills, build meaningful connections, and grow together
            through knowledge sharing.
          </p>

          <div style={s.socials}>
            <a href="#" aria-label="Community" style={s.social}>
              <Share2 size={17} />
            </a>

            <a
              href="mailto:contact@skillswap.com"
              aria-label="Email"
              style={s.social}
            >
              <Mail size={17} />
            </a>

            <a href="#" aria-label="Messages" style={s.social}>
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        {groups.map(([title, items]) => (
          <div key={title} style={s.group}>
            <h3 style={s.groupTitle}>{title}</h3>

            {items.map(([name, href]) => (
              <a key={name} href={href} style={s.link}>
                {name}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div
        style={{
          ...s.bottom,
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          marginTop: isMobile ? 45 : 65,
        }}
      >
        <span>© {new Date().getFullYear()} SkillSwap. All rights reserved.</span>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={s.backTop}
        >
          Back to top
          <ArrowUp size={15} />
        </button>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    width: "100%",
    background: "var(--page-bg)",
    color: "var(--text)",
    fontFamily:
      "Inter, Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    boxSizing: "border-box",
  },

  content: {
    width: "100%",
    display: "grid",
    boxSizing: "border-box",
  },

  brand: {
    maxWidth: 350,
  },

  logo: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "var(--text)",
    textDecoration: "none",
    fontSize: 21,
    fontWeight: 750,
  },

  logoImg: {
    width: 44,
    height: 44,
    objectFit: "contain",
  },

  description: {
    maxWidth: 340,
    margin: "18px 0",
    color: "var(--muted)",
    fontSize: 14,
    lineHeight: 1.7,
  },

  socials: {
    display: "flex",
    gap: 9,
  },

  social: {
    width: 40,
    height: 40,
    display: "grid",
    placeItems: "center",
    border: 0,
    borderRadius: 11,
    background: "var(--surface)",
    color: "var(--muted)",
    textDecoration: "none",
    boxShadow: "0 7px 20px rgba(40,25,80,.07)",
    transition: "transform .2s ease, color .2s ease, box-shadow .2s ease",
  },

  group: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  groupTitle: {
    margin: 0,
    color: "var(--text)",
    fontSize: 14,
    fontWeight: 700,
  },

  link: {
    width: "fit-content",
    color: "var(--muted)",
    textDecoration: "none",
    fontSize: 14,
    transition: "color .2s ease, transform .2s ease",
  },

  bottom: {
    width: "100%",
    paddingTop: 22,
    borderTop: "1px solid var(--border)",
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    color: "var(--muted)",
    fontSize: 13,
    boxSizing: "border-box",
  },

  backTop: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    border: 0,
    background: "transparent",
    color: "var(--text)",
    cursor: "pointer",
    padding: 0,
    fontWeight: 600,
  },
};