import { ArrowUp, Mail, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const groups = [
  ["Product", [["Features", "#features"], ["How It Works", "#how-it-works"]]],
  ["Company", [["About", "#about"], ["Contact", "#contact"]]],
  ["Support", [["FAQ", "#faq"], ["Privacy Policy", "#privacy-policy"]]],
];

export default function Footer() {
  return (
    <footer style={s.footer}>
      <div style={s.content}>
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
            <a href="mailto:contact@skillswap.com" aria-label="Email" style={s.social}>
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

      <div style={s.bottom}>
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
    background: "#10162b",
    color: "#fff",
    padding: "65px 8% 24px",
    fontFamily: "Arial, sans-serif",
  },

  content: {
    maxWidth: 1150,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "2fr repeat(3, 1fr)",
    gap: 60,
  },

  brand: {
    maxWidth: 350,
  },

  logo: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    color: "#fff",
    textDecoration: "none",
    fontSize: 21,
    fontWeight: 700,
  },

  logoImg: {
    width: 44,
    height: 44,
    objectFit: "contain",
  },

  description: {
    color: "#aeb6cb",
    fontSize: 14,
    lineHeight: 1.7,
    margin: "18px 0",
  },

  socials: {
    display: "flex",
    gap: 9,
  },

  social: {
    width: 38,
    height: 38,
    display: "grid",
    placeItems: "center",
    color: "#fff",
    border: "1px solid #30384f",
    borderRadius: 10,
    textDecoration: "none",
  },

  group: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  groupTitle: {
    margin: 0,
    fontSize: 15,
  },

  link: {
    color: "#aeb6cb",
    textDecoration: "none",
    fontSize: 14,
  },

  bottom: {
    maxWidth: 1150,
    margin: "55px auto 0",
    paddingTop: 22,
    borderTop: "1px solid #30384f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    color: "#8993aa",
    fontSize: 13,
  },

  backTop: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    border: 0,
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    padding: 0,
  },
};