import { useState } from "react";
import { Globe, Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Features", "/features"],
  ["How It Works", "/howitworks"],
];

export default function Header({ dark, onToggleTheme }) {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const colors = {
    background: dark ? "#17152b" : "#ffffff",
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b8b4cc" : "#737b8e",
    border: dark ? "#302b4b" : "#e7e8ef",
    iconButton: dark ? "#292541" : "#f7f7fb",
    iconHover: dark ? "#37304f" : "#eeebf7",
    menuBackground: dark ? "#201d38" : "#ffffff",
  };

  const linkStyle = ({ isActive }) => ({
    display: "inline-flex",
    alignItems: "center",
    minHeight: 42,
    padding: "8px 0",
    boxSizing: "border-box",
    color: isActive ? "#8b5cf6" : colors.text,
    fontSize: 14,
    fontWeight: isActive ? 700 : 500,
    textDecoration: "none",
    whiteSpace: "nowrap",
    borderBottom: isActive ? "2px solid #8b5cf6" : "2px solid transparent",
  });

  const iconButtonStyle = {
    width: 44,
    height: 44,
    flex: "0 0 44px",
    display: "grid",
    placeItems: "center",
    boxSizing: "border-box",
    border: `1px solid ${colors.border}`,
    borderRadius: 12,
    background: colors.iconButton,
    color: colors.text,
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
  };

  const primaryButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 44,
    padding: "10px 24px",
    boxSizing: "border-box",
    border: "1px solid transparent",
    borderRadius: 12,
    background: "linear-gradient(100deg, #7435e8, #4b28df)",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "filter 180ms ease, transform 180ms ease",
  };

  const languageOptionStyle = (selected) => ({
    display: "block",
    width: "100%",
    padding: "10px",
    border: "1px solid transparent",
    borderRadius: 8,
    background: selected ? (dark ? "#30264e" : "#eee8ff") : "transparent",
    color: colors.text,
    textAlign: "left",
    fontSize: 13,
    cursor: "pointer",
  });

  function closeMenus() {
    setMobileMenuOpen(false);
    setLanguageOpen(false);
  }

  return (
    <header
      style={{
        position: "relative",
        zIndex: 20,
        flexShrink: 0,
        width: "100%",
        boxSizing: "border-box",
        background: colors.background,
        color: colors.text,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div
        className="skillswap-header-inner"
        style={{
          width: "min(1440px, calc(100% - 48px))",
          minHeight: 78,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          padding: "10px 0",
          boxSizing: "border-box",
        }}
      >
        <NavLink
          to="/"
          aria-label="SkillSwap home"
          onClick={closeMenus}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <img
            src="/skillswaplogo.png"
            alt=""
            style={{
              width: 42,
              height: 42,
              objectFit: "contain",
            }}
          />

          <span>
            <strong
              style={{
                display: "block",
                fontSize: 21,
                lineHeight: 1.1,
              }}
            >
              SkillSwap
            </strong>

            <small
              style={{
                display: "block",
                marginTop: 3,
                color: colors.muted,
              }}
            >
              Learn. Teach. Grow.
            </small>
          </span>
        </NavLink>

        <nav
          className="skillswap-desktop-nav"
          aria-label="Main navigation"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(14px, 2.2vw, 30px)",
            flex: 1,
            minWidth: 0,
          }}
        >
          {navLinks.map(([label, path]) => (
            <NavLink key={path} to={path} end={path === "/"} style={linkStyle}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div
          className="skillswap-header-actions"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <div style={{ position: "relative" }}>
            <button
              type="button"
              className="skillswap-icon-button"
              onClick={() => {
                setLanguageOpen((open) => !open);
                setMobileMenuOpen(false);
              }}
              aria-label="Choose language"
              aria-expanded={languageOpen}
              title="Choose language"
              style={iconButtonStyle}
            >
              <Globe size={18} />
            </button>

            {languageOpen && (
              <div
                style={{
                  position: "absolute",
                  top: 50,
                  right: 0,
                  zIndex: 30,
                  minWidth: 140,
                  padding: 8,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 12,
                  background: colors.menuBackground,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.14)",
                }}
              >
                {["English", "Hindi"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setLanguage(item);
                      setLanguageOpen(false);
                    }}
                    style={languageOptionStyle(language === item)}
                  >
                    {item}
                    {language === item ? " ✓" : ""}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="skillswap-icon-button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            title={dark ? "Switch to light theme" : "Switch to dark theme"}
            style={iconButtonStyle}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Desktop Login / Sign Up */}
          <NavLink
            to="/login"
            onClick={closeMenus}
            className="skillswap-get-started"
            style={primaryButtonStyle}
          >
            Login / Sign Up
          </NavLink>

          <button
            type="button"
            className="skillswap-mobile-menu-button"
            onClick={() => {
              setMobileMenuOpen((open) => !open);
              setLanguageOpen(false);
            }}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={mobileMenuOpen}
            style={{
              ...iconButtonStyle,
              display: "none",
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          className="skillswap-mobile-nav"
          aria-label="Mobile navigation"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 6,
            padding: "12px 24px 18px",
            borderTop: `1px solid ${colors.border}`,
            background: colors.background,
          }}
        >
          {navLinks.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={closeMenus}
              style={({ isActive }) => ({
                display: "block",
                padding: "12px",
                border: `1px solid ${isActive ? colors.border : "transparent"}`,
                borderRadius: 10,
                background: isActive
                  ? dark
                    ? "#30264e"
                    : "#f1edff"
                  : "transparent",
                color: isActive ? "#8b5cf6" : colors.text,
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                textDecoration: "none",
              })}
            >
              {label}
            </NavLink>
          ))}

          <NavLink
            to="/login"
            onClick={closeMenus}
            style={{
              ...primaryButtonStyle,
              width: "100%",
              marginTop: 6,
              fontSize: 14,
            }}
          >
            Login / Sign Up
          </NavLink>
        </nav>
      )}

      <style>{`
        .skillswap-icon-button:hover {
          background: ${colors.iconHover} !important;
          border-color: #8b5cf6 !important;
        }

        .skillswap-get-started:hover {
          filter: brightness(1.1);
        }

        .skillswap-icon-button:focus-visible,
        .skillswap-get-started:focus-visible {
          outline: 2px solid #8b5cf6;
          outline-offset: 3px;
        }

        @media (max-width: 900px) {
          .skillswap-header-inner {
            width: calc(100% - 32px) !important;
          }

          .skillswap-desktop-nav {
            gap: 14px !important;
          }

          .skillswap-get-started {
            display: none !important;
          }
        }

        @media (max-width: 700px) {
          .skillswap-desktop-nav {
            display: none !important;
          }

          .skillswap-mobile-menu-button {
            display: grid !important;
          }

          .skillswap-mobile-nav {
            display: flex !important;
          }
        }

        @media (max-width: 380px) {
          .skillswap-header-inner {
            width: calc(100% - 20px) !important;
            gap: 8px !important;
          }

          .skillswap-header-actions {
            gap: 6px !important;
          }

          .skillswap-header-inner img {
            width: 34px !important;
            height: 34px !important;
          }

          .skillswap-header-inner strong {
            font-size: 18px !important;
          }

          .skillswap-header-inner small {
            font-size: 11px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .skillswap-icon-button,
          .skillswap-get-started {
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
