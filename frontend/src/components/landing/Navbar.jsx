import { Link } from "react-router-dom";

const links = ["Home", "About", "Features", "How It Works", "Testimonials", "FAQ", "Contact"];

export default function Navbar() {
  return (
    <nav style={s.nav}>
      <Link to="/" style={s.brand}>
        <img src="/skillswaplogo.png" alt="SkillSwap" style={s.logo} />
        <div>
          <b style={s.name}>SkillSwap</b>
          <small style={s.tag}>Learn. Teach. Grow.</small>
        </div>
      </Link>

      <div style={s.links}>
        {links.map((link, i) => (
          <a key={link} href={i ? `#${link.toLowerCase().replaceAll(" ", "-")}` : "#home"}
            style={{ ...s.link, color: i ? "#172033" : "#5b20e5" }}>
            {link}
          </a>
        ))}
      </div>

      <div style={s.actions}>
        <span style={s.language}>◎&nbsp; English⌄</span>
        <button style={s.theme}>☼</button>
        <Link to="/register" style={s.start}>Get Started</Link>
      </div>
    </nav>
  );
}

const s = {
  nav: { margin: 4, padding: "12px 4.5%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "#fff", borderRadius: 14, boxShadow: "0 2px 12px #0001" },
  brand: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "#101a31", minWidth: 190 },
  logo: { width: 52, height: 52, objectFit: "contain" },
  name: { display: "block", fontSize: 19 },
  tag: { display: "block", fontSize: 11, color: "#68758c", marginTop: 2 },
  links: { display: "flex", gap: 28, alignItems: "center" },
  link: { textDecoration: "none", fontSize: 14, padding: "12px 0" },
  actions: { display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap" },
  language: { fontSize: 14 },
  theme: { width: 48, height: 40, border: "1px solid #e1e1e1", borderRadius: 22, background: "#fff", cursor: "pointer" },
  start: { textDecoration: "none", color: "#fff", background: "linear-gradient(90deg,#5b20e5,#7627e8)", padding: "13px 25px", borderRadius: 25, fontWeight: 600, fontSize: 14 },
};