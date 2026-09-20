import { useState } from "react";
import { Link } from "react-router-dom";
import { Languages, Menu, Moon, Sun, X } from "lucide-react";
import useResponsive from "../../hooks/useResponsive";
import { useAppStore } from "../../lib/zustand";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Features", "#features"],
];

export default function Navbar() {
  const { isDesktop, isSmallMobile } = useResponsive();
  const { theme, toggleTheme } = useAppStore();
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(false);

  const dark = theme === "dark";

  const toggleLanguage = () => {
    setLanguage(true);
    setTimeout(() => setLanguage(false), 300);
  };

  return (
    <nav
      style={{
        ...s.nav,
        background: "var(--surface)",
        color: "var(--text)",
        padding: isSmallMobile ? "8px 14px" : "9px 5%",
      }}
    >
      <Link
        to="/"
        style={{
          ...s.brand,
          color: "var(--text)",
          gap: isSmallMobile ? 7 : 10,
        }}
      >
        <img
          src="/skillswaplogo.png"
          alt="SkillSwap"
          style={{
            ...s.logo,
            width: isSmallMobile ? 40 : 46,
            height: isSmallMobile ? 40 : 46,
          }}
        />

        <div>
          <strong
            style={{
              ...s.name,
              fontSize: isSmallMobile ? 16 : 18,
            }}
          >
            SkillSwap
          </strong>
          <span style={s.tag}>Learn · Teach · Grow</span>
        </div>
      </Link>

      {isDesktop ? (
        <div style={s.links}>
          {links.map(([name, href], index) => (
            <a
              key={name}
              href={href}
              style={{
                ...s.link,
                color: index === 0 ? "var(--primary)" : "var(--text)",
              }}
            >
              {name}
            </a>
          ))}
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          style={s.control}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      )}

      <div style={s.actions}>
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label="Change language"
          title="Language"
          style={{
            ...s.control,
            transform: language ? "scale(1.08)" : "scale(1)",
          }}
        >
          <Languages size={18} />
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={dark ? "Switch to light mode" : "Switch to dark mode"}
          style={{
            ...s.control,
            transform: dark ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          {dark ? <Moon size={17} /> : <Sun size={17} />}
        </button>

        {(!isSmallMobile || isDesktop) && (
          <Link to="/register" style={s.authButton}>
            Login / Sign Up
          </Link>
        )}
      </div>

      {!isDesktop && open && (
        <div style={s.mobileMenu}>
          {links.map(([name, href], index) => (
            <a
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                ...s.mobileLink,
                color: index === 0 ? "var(--primary)" : "var(--text)",
              }}
            >
              {name}
            </a>
          ))}

          {isSmallMobile && (
            <Link
              to="/register"
              onClick={() => setOpen(false)}
              style={{
                ...s.authButton,
                width: "100%",
                marginTop: 8,
              }}
            >
              Login / Sign Up
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

const s = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 20,
    width: "100%",
    minHeight: 68,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    boxSizing: "border-box",
    boxShadow: "0 4px 20px var(--nav-shadow)",
    fontFamily:
      "Inter, Segoe UI, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    transition: "background .3s ease, box-shadow .3s ease",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    minWidth: 0,
    flexShrink: 1,
    textDecoration: "none",
  },

  logo: {
    objectFit: "contain",
    flexShrink: 0,
  },

  name: {
    display: "block",
    lineHeight: 1.05,
    letterSpacing: "-0.45px",
    fontWeight: 750,
  },

  tag: {
    display: "block",
    marginTop: 4,
    color: "var(--muted)",
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: ".1px",
    whiteSpace: "nowrap",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: 34,
    marginLeft: "auto",
    marginRight: "auto",
  },

  link: {
    position: "relative",
    padding: "10px 0",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
    transition: "color .2s ease",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    flexShrink: 0,
  },

  control: {
    width: 40,
    height: 38,
    display: "grid",
    placeItems: "center",
    border: "1px solid var(--border)",
    borderRadius: 11,
    background: "var(--control)",
    color: "var(--text)",
    cursor: "pointer",
    flexShrink: 0,
    transition:
      "transform .3s ease, background .2s ease, border-color .2s ease",
  },

  authButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    padding: "0 19px",
    borderRadius: 11,
    background: "linear-gradient(135deg,#5b20e5,#7627e8)",
    color: "#fff",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 650,
    whiteSpace: "nowrap",
    boxShadow: "0 7px 18px rgba(91,32,229,.18)",
    transition: "transform .2s ease, box-shadow .2s ease",
  },

  mobileMenu: {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 12,
    right: 12,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    padding: "10px",
    border: "1px solid var(--border)",
    borderRadius: 14,
    background: "var(--surface)",
    boxShadow: "0 14px 35px var(--nav-shadow)",
  },

  mobileLink: {
    padding: "12px 10px",
    borderRadius: 9,
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
};
