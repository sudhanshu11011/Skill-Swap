import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe2, Menu, Moon, Sun, X } from "lucide-react";

import { useTheme } from "../context/ThemeContext";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
      <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 xl:px-12 2xl:px-16">
        {/* ==================== LOGO ==================== */}

        <a
          href="#home"
          className="flex shrink-0 items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={logo}
            alt="SkillSwap Logo"
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
          />

          <span className="text-lg font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-xl dark:text-white">
            SkillSwap
          </span>
        </a>

        {/* ==================== DESKTOP NAVIGATION ==================== */}

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          <a
            href="#home"
            className="text-sm font-medium text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
          >
            About
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
          >
            How It Works
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
          >
            FAQ
          </a>
        </div>

        {/* ==================== DESKTOP CONTROLS ==================== */}

        <div className="hidden items-center gap-3 lg:flex">
          {/* Language */}

          <button
            type="button"
            onClick={() => {}}
            aria-label="Language"
            title="Language"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-violet-400"
          >
            <Globe2 size={18} />
          </button>

          {/* Theme */}

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            title={
              theme === "light"
                ? "Switch to dark theme"
                : "Switch to light theme"
            }
            className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-violet-400"
          >
            {theme === "light" ? (
              <Moon
                size={18}
                className="transition-transform duration-500 group-hover:rotate-12"
              />
            ) : (
              <Sun
                size={18}
                className="transition-transform duration-500 group-hover:rotate-90"
              />
            )}
          </button>

          {/* Login / Sign Up */}

          <Link
            to="/login"
            className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md"
          >
            Login / Sign Up
          </Link>
        </div>

        {/* ==================== MOBILE CONTROLS ==================== */}

        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Login / Sign Up */}

          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="hidden rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 sm:inline-flex"
          >
            Login / Sign Up
          </Link>

          {/* Hamburger */}

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* ==================== MOBILE MENU ==================== */}

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white transition-colors duration-300 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6">
            {/* Navigation Links */}

            <div className="flex flex-col">
              <a
                href="#home"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-violet-600 transition-colors hover:bg-violet-50 dark:text-violet-400 dark:hover:bg-violet-950/40"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                About
              </a>

              <a
                href="#features"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                How It Works
              </a>

              <a
                href="#faq"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-50 hover:text-violet-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                FAQ
              </a>
            </div>

            {/* Mobile Controls */}

            <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
              {/* Language */}
              <button
                type="button"
                onClick={() => {}}
                aria-label="Language"
                title="Language"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                <Globe2 size={18} />
              </button>

              {/* Theme */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "light"
                    ? "Switch to dark theme"
                    : "Switch to light theme"
                }
                title={
                  theme === "light"
                    ? "Switch to dark theme"
                    : "Switch to light theme"
                }
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-violet-400"
              >
                {theme === "light" ? (
                  <Moon
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-12"
                  />
                ) : (
                  <Sun
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-90"
                  />
                )}
              </button>
            </div>

            {/* Mobile CTA */}

            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 flex w-full items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
