import { useTheme } from "../src/context/ThemeContext";
import React, { useEffect, useState } from "react";
import logo from "../src/assets/images/logo.png";
import heroImage from "../src/assets/images/hero-image.png";
import { observeScrollReveal } from "../src/utils/scrollReveal";

import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  GraduationCap,
  HeartHandshake,
  Languages,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  Music,
  Palette,
  Play,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  Trophy,
  UserRound,
  Users,
  X,
  Globe2,
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  useEffect(() => {
    observeScrollReveal();
  }, []);
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/* ==================== NAVBAR ==================== */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/95">
        <nav className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 xl:px-12 2xl:px-16">
          {/* Logo */}
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
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Globe2 size={22} />
            </button>

            {/* Theme Toggle */}
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

            {/* Get Started */}
            <a
              href="#get-started"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* ==================== MOBILE / TABLET CONTROLS ==================== */}

          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Get Started */}
            <a
              href="#get-started"
              onClick={() => setIsMenuOpen(false)}
              className="hidden rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 sm:inline-flex"
            >
              Get Started
            </a>

            {/* Hamburger / Close Button */}
            <button
              type="button"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-all duration-300 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* ==================== MOBILE / TABLET MENU ==================== */}

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

              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                {/* Language */}
                <button
                  type="button"
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <Globe2 size={22} />
                </button>

                {/* Mobile Theme Toggle */}
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

              <a
                href="#get-started"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-73px)] w-full overflow-hidden bg-white transition-colors duration-500 dark:bg-slate-950"
      >
        <div className="grid min-h-[calc(100vh-73px)] w-full items-center gap-10 px-6 py-12 sm:px-8 sm:py-14 md:px-10 lg:grid-cols-2 lg:gap-8 lg:px-12 lg:py-16 xl:px-16 2xl:px-20">
          {/* ==================== LEFT CONTENT ==================== */}

          <div className="relative z-10">
            {/* Small Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/50 dark:text-violet-300">
              <Sparkles size={18} />

              <span>Join a community of learners and teachers</span>
            </div>

            {/* Main Heading */}
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 transition-colors duration-300 sm:text-6xl xl:text-7xl dark:text-white">
              Exchange Skills.
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Build Opportunities.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 transition-colors duration-300 lg:text-xl dark:text-slate-300">
              SkillSwap connects people who want to teach and learn skills from
              each other. No money, just knowledge, collaboration, and growth.
            </p>

            {/* CTA Buttons */}
            <div
              id="get-started"
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:shadow-violet-950/40"
              >
                Get Started for Free
                <ArrowRight size={18} />
              </a>

              {/* Secondary CTA */}
              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-violet-200 hover:bg-violet-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-700 dark:hover:bg-slate-800"
              >
                <span className="text-violet-600 dark:text-violet-400">
                  <Play size={18} />
                </span>
                Watch Tutorial
              </button>
            </div>

            {/* Community Information */}
            <div className="mt-8 flex items-center gap-4">
              {/* Community Avatars */}
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-sm font-bold text-violet-700 transition-colors duration-300 dark:border-slate-950 dark:bg-violet-950 dark:text-violet-300">
                  S
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-bold text-blue-700 transition-colors duration-300 dark:border-slate-950 dark:bg-blue-950 dark:text-blue-300">
                  K
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-bold text-emerald-700 transition-colors duration-300 dark:border-slate-950 dark:bg-emerald-950 dark:text-emerald-300">
                  M
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-sm font-bold text-orange-700 transition-colors duration-300 dark:border-slate-950 dark:bg-orange-950 dark:text-orange-300">
                  A
                </div>
              </div>

              {/* Community Text */}
              <p className="text-sm font-medium text-slate-600 transition-colors duration-300 dark:text-slate-400">
                Join learners and teachers growing together
              </p>
            </div>
          </div>

          {/* ==================== RIGHT HERO VISUAL ==================== */}

          <div className="relative flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-100 via-purple-50 to-blue-100 blur-3xl transition-all duration-500 dark:from-violet-950/60 dark:via-purple-950/40 dark:to-blue-950/50"></div>

            {/* Hero Image */}
            <img
              src={heroImage}
              alt="SkillSwap learner using a laptop"
              className="relative z-10 w-full max-w-xl rounded-3xl object-contain"
            />

            {/* ==================== TEACH CARD ==================== */}

            <div className="absolute left-0 top-12 z-20 hidden rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/40 xl:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-violet-600 dark:text-violet-400">
                    Teach
                  </p>

                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Web Development
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    React · Node.js · MongoDB
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== LEARN CARD ==================== */}

            <div className="absolute right-0 top-24 z-20 hidden rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/40 xl:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300">
                  <BookOpen size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-pink-500 dark:text-pink-400">
                    Learn
                  </p>

                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    UI / UX Design
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Figma · Design Systems
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== COMMUNITY CARD ==================== */}

            <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm transition-all duration-500 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-black/40 md:flex">
              <span className="text-2xl text-slate-900 dark:text-yellow-400">
                <Star size={24} />
              </span>

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Community Driven
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Learn. Teach. Grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== ABOUT ==================== */}
      <section
        id="about"
        className="w-full bg-white px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-950/40 dark:text-violet-300">
              <HeartHandshake size={16} />
              About SkillSwap
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Knowledge Is Better When
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Shared Together.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
              SkillSwap is a skill exchange platform built to connect people who
              want to learn with people who are willing to teach.
            </p>
          </div>

          {/* Main About Content */}
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Main Explanation */}
            <div data-reveal-left>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition-colors duration-500 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">
                  A community built around knowledge exchange.
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Everyone knows something that someone else wants to learn.
                  SkillSwap brings these people together so they can exchange
                  knowledge, develop new abilities, and create meaningful
                  learning relationships.
                </p>

                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
                  Instead of treating learning as a one-way process, SkillSwap
                  encourages users to both teach and learn. Your existing
                  knowledge becomes an opportunity to help someone else while
                  discovering something new yourself.
                </p>

                {/* Highlight */}
                <div className="mt-7 flex items-start gap-4 rounded-2xl border border-violet-100 bg-violet-50 p-5 dark:border-violet-900/50 dark:bg-violet-950/30">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-900/50 dark:text-violet-300">
                    <Users size={21} />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-950 dark:text-white">
                      Learn from people, not just platforms.
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Discover people with complementary skills and build
                      connections around shared learning goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Three Principles */}
            <div data-reveal-right>
              <div className="space-y-5">
                {/* Learn */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/30 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800 dark:hover:shadow-violet-950/20">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-transform duration-300 group-hover:scale-110 dark:bg-violet-900/50 dark:text-violet-300">
                      <GraduationCap size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        Learn Something New
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Find people who can teach the skills you want to develop
                        and learn at your own pace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teach */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/30 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-emerald-800 dark:hover:shadow-emerald-950/20">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-900/50 dark:text-emerald-300">
                      <BookOpen size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        Share What You Know
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Turn your existing knowledge into an opportunity to help
                        another person learn and grow.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connect */}
                <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/30 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800 dark:hover:shadow-blue-950/20">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/50 dark:text-blue-300">
                      <HeartHandshake size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                        Grow Through Connection
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        Build meaningful connections with people who share your
                        interests and learning goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== FEATURES ==================== */}
      <section
        id="features"
        className="w-full bg-white px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/50 dark:text-violet-300">
              Why SkillSwap?
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              Learn, Teach, Connect and
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Grow Together.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              SkillSwap brings learners and teachers together in one community
              where knowledge can be shared, skills can be developed, and
              meaningful connections can be built.
            </p>
          </div>

          {/* ==================== FEATURE CARDS ==================== */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: GraduationCap,
                title: "Learn Anything",
                description:
                  "Discover people who can teach the skills you want to learn and grow at your own pace.",
                iconStyle:
                  "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
              },

              {
                icon: BookOpen,
                title: "Teach Easily",
                description:
                  "Share the knowledge you already have and help someone else develop a valuable skill.",
                iconStyle:
                  "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
              },

              {
                icon: Users,
                title: "Build Connections",
                description:
                  "Find like-minded learners and teachers based on the skills you want to exchange.",
                iconStyle:
                  "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300",
              },

              {
                icon: ShieldCheck,
                title: "Safe & Trusted",
                description:
                  "Connect through a platform designed with secure authentication and protected user data.",
                iconStyle:
                  "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
              },

              {
                icon: Clock3,
                title: "Learn Flexibly",
                description:
                  "Exchange knowledge according to your availability without following a rigid schedule.",
                iconStyle:
                  "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300",
              },

              {
                icon: Trophy,
                title: "Grow Together",
                description:
                  "Build long-term learning relationships and continuously improve through knowledge sharing.",
                iconStyle:
                  "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
              },
            ].map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800 dark:hover:bg-slate-900 dark:hover:shadow-violet-950/30"
                >
                  {/* ==================== ICON ==================== */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconStyle} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  {/* ==================== TITLE ==================== */}

                  <h3 className="mt-6 text-xl font-bold text-slate-950 transition-colors duration-300 dark:text-white">
                    {feature.title}
                  </h3>

                  {/* ==================== DESCRIPTION ==================== */}

                  <p className="mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300 sm:text-base dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ==================== HOW SKILLSWAP WORKS ==================== */}
      <section
        id="how-it-works"
        className="w-full bg-slate-50 px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-300 dark:bg-blue-950/50 dark:text-blue-300">
              Simple. Social. Skill-focused.
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              How SkillSwap
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              From creating your profile to finding the right learning partner,
              SkillSwap makes the entire skill exchange process simple.
            </p>
          </div>

          {/* ==================== STEPS ==================== */}

          <div className="relative mt-16">
            {/* Connecting Line - Desktop */}

            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-gradient-to-r from-violet-300 via-blue-300 to-violet-300 transition-colors duration-500 dark:from-violet-800 dark:via-blue-800 dark:to-violet-800 lg:block"></div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  icon: UserRound,
                  title: "Create Your Profile",
                  description:
                    "Tell the community who you are, what you can teach, and what skills you want to learn.",
                },
                {
                  number: "02",
                  icon: Search,
                  title: "Discover Your Match",
                  description:
                    "Explore recommended learners and teachers based on the skills you want to exchange.",
                },
                {
                  number: "03",
                  icon: Send,
                  title: "Send an Exchange Request",
                  description:
                    "Found someone interesting? Send them a skill exchange request and start the conversation.",
                },
                {
                  number: "04",
                  icon: MessageCircle,
                  title: "Connect & Learn",
                  description:
                    "Once connected, communicate with your learning partner and begin your skill exchange.",
                },
              ].map((step, index) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    data-stagger={index + 1}
                    className="group relative text-center"
                  >
                    {/* Step Icon */}

                    <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-100 bg-white text-violet-600 shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-violet-100 dark:border-violet-900 dark:bg-slate-800 dark:text-violet-400 dark:group-hover:shadow-violet-950/30">
                      <Icon size={26} strokeWidth={2} />
                    </div>

                    {/* Step Number */}

                    <span className="mt-5 inline-block text-xs font-bold tracking-[0.2em] text-violet-500 dark:text-violet-400">
                      STEP {step.number}
                    </span>

                    {/* Title */}

                    <h3 className="mt-3 text-lg font-bold text-slate-950 transition-colors duration-300 dark:text-white">
                      {step.title}
                    </h3>

                    {/* Description */}

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================== BOTTOM CTA ==================== */}

          <div
            data-stagger="2"
            className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-violet-100 bg-white px-6 py-8 shadow-sm transition-colors duration-500 sm:px-10 lg:flex-row dark:border-violet-900 dark:bg-slate-950"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <CheckCircle2 size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-950 transition-colors duration-300 dark:text-white">
                  Ready to start your skill exchange?
                </h3>

                <p className="mt-1 text-sm text-slate-600 transition-colors duration-300 dark:text-slate-400">
                  Create your profile and discover people who can help you grow.
                </p>
              </div>
            </div>

            <a
              href="#get-started"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:shadow-violet-950/40"
            >
              Get Started
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      {/* ==================== EXPLORE SKILLS ==================== */}
      <section
        id="skills"
        className="w-full bg-white px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/50 dark:text-violet-300">
              <Sparkles size={16} />
              Explore possibilities
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              Skills You Can
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Learn & Share
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              From technology and design to music and languages, discover people
              who can teach what you want to learn and learn from what you
              already know.
            </p>
          </div>

          {/* ==================== SKILL CATEGORIES ==================== */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Code2,
                title: "Programming",
                description:
                  "Web development, Java, Python, JavaScript and more.",
                iconStyle:
                  "bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300",
              },
              {
                icon: Palette,
                title: "UI / UX Design",
                description:
                  "Design interfaces, prototypes, systems and creative experiences.",
                iconStyle:
                  "bg-pink-100 text-pink-600 dark:bg-pink-950 dark:text-pink-300",
              },
              {
                icon: BriefcaseBusiness,
                title: "Business",
                description:
                  "Entrepreneurship, marketing, communication and leadership.",
                iconStyle:
                  "bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300",
              },
              {
                icon: Smartphone,
                title: "Mobile Development",
                description:
                  "Build modern Android, iOS and cross-platform applications.",
                iconStyle:
                  "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300",
              },
              {
                icon: Camera,
                title: "Photography",
                description:
                  "Learn photography techniques, editing and visual storytelling.",
                iconStyle:
                  "bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300",
              },
              {
                icon: Music,
                title: "Music",
                description:
                  "Exchange knowledge about instruments, production and music theory.",
                iconStyle:
                  "bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-300",
              },
              {
                icon: Languages,
                title: "Languages",
                description:
                  "Practice new languages with people who speak them.",
                iconStyle:
                  "bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-300",
              },
              {
                icon: BookOpen,
                title: "Academics",
                description:
                  "Share academic knowledge, study techniques and subject expertise.",
                iconStyle:
                  "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300",
              },
            ].map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-100/40 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800 dark:hover:shadow-violet-950/30"
                >
                  {/* Icon */}

                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.iconStyle} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  {/* Skill Name */}

                  <h3 className="mt-5 text-lg font-bold text-slate-950 transition-colors duration-300 dark:text-white">
                    {skill.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-2 text-sm leading-6 text-slate-600 transition-colors duration-300 dark:text-slate-400">
                    {skill.description}
                  </p>

                  {/* Explore Link */}

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all duration-300 group-hover:gap-3 dark:text-violet-400">
                    Explore skill
                    <ArrowRight size={16} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================== BOTTOM MESSAGE ==================== */}

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-400">
              Don't see your skill?
              <span className="ml-1 font-semibold text-slate-700 dark:text-slate-300">
                SkillSwap is built for every kind of knowledge.
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* ==================== COMMUNITY / MATCHING ==================== */}
      <section
        id="community"
        className="w-full bg-white px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/60 dark:text-violet-300">
              <HeartHandshake size={16} />
              Learn from the right person
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              Find Your
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Learning Partner
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              SkillSwap helps you discover people whose skills complement your
              own, making every connection an opportunity to learn and teach.
            </p>
          </div>

          {/* ==================== MAIN MATCHING LAYOUT ==================== */}

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            {/* ==================== LEFT SIDE - USER GOALS ==================== */}

            <div>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-colors duration-500 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
                {/* Profile Header */}

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300">
                    <UserRound size={23} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      Your profile
                    </p>

                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      Tell us what you want
                    </h3>
                  </div>
                </div>

                {/* Want To Learn */}

                <div className="mt-8">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    I want to learn
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["React.js", "UI / UX Design", "Python"].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/60 dark:text-violet-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Can Teach */}

                <div className="mt-7">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    I can teach
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {["JavaScript", "MongoDB", "Web Development"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-300 dark:bg-blue-950/60 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Matching Explanation */}

                <div className="mt-8 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 transition-colors duration-300 dark:bg-slate-800">
                  <div className="mt-0.5 text-violet-600 dark:text-violet-400">
                    <Search size={19} />
                  </div>

                  <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                    SkillSwap uses your profile information to help you discover
                    people who are relevant to your learning goals.
                  </p>
                </div>
              </div>
            </div>

            {/* ==================== RIGHT SIDE - MATCHED USER ==================== */}

            <div className="relative">
              {/* Decorative Background */}

              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-violet-100/70 via-blue-50/50 to-transparent blur-2xl transition-colors duration-500 dark:from-violet-950/50 dark:via-blue-950/30 dark:to-transparent"></div>

              {/* Match Card */}

              <div className="relative rounded-3xl border border-slate-200 bg-white p-7 shadow-xl transition-colors duration-500 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/30">
                {/* Match Header */}

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                      SkillSwap Match
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-slate-950 dark:text-white">
                      Someone who can help you grow
                    </h3>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle2 size={22} />
                  </div>
                </div>

                {/* ==================== PROFILE ==================== */}

                <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center gap-4">
                    {/* Profile Placeholder */}

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xl font-bold text-white">
                      A
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="truncate text-lg font-bold text-slate-950 dark:text-white">
                          Alex Morgan
                        </h4>

                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-emerald-500"
                        />
                      </div>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>

                  {/* Skills */}

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {/* Teaches */}

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Teaches
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                          React.js
                        </span>

                        <span className="rounded-full bg-violet-100 px-3 py-1.5 text-xs font-medium text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                          Node.js
                        </span>
                      </div>
                    </div>

                    {/* Wants To Learn */}

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Wants to learn
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          UI / UX
                        </span>

                        <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                          Figma
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating / Match */}

                  <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <Star
                        size={17}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                        4.9
                      </span>

                      <span className="text-sm text-slate-400">/ 5</span>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                      Great Match
                    </span>
                  </div>
                </div>

                {/* Connect Button */}

                <button
                  type="button"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:shadow-violet-950/40"
                >
                  Connect with Alex
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* ==================== BOTTOM STATEMENT ==================== */}

          <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <div className="flex -space-x-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-xs font-bold text-violet-700 dark:border-slate-950 dark:bg-violet-950 dark:text-violet-300">
                R
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-xs font-bold text-blue-700 dark:border-slate-950 dark:bg-blue-950 dark:text-blue-300">
                P
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-xs font-bold text-emerald-700 dark:border-slate-950 dark:bg-emerald-950 dark:text-emerald-300">
                A
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-xs font-bold text-orange-700 dark:border-slate-950 dark:bg-orange-950 dark:text-orange-300">
                K
              </div>
            </div>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Thousands of learners are already discovering new skills together.
            </p>
          </div>
        </div>
      </section>
      {/* ==================== CONNECT / CHAT ==================== */}
      <section
        id="connect"
        className="w-full bg-slate-50 px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition-colors duration-300 dark:bg-blue-950/50 dark:text-blue-300">
              <MessageCircle size={16} />
              Connect & collaborate
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              Turn Connections Into
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Real Learning
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              Once you find the right person, SkillSwap gives you a simple way
              to connect, communicate, and plan your skill exchange.
            </p>
          </div>

          {/* ==================== MAIN CONTENT ==================== */}

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            {/* ==================== LEFT SIDE ==================== */}

            <div>
              <div className="space-y-6">
                {/* Step 1 */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950 dark:text-violet-300">
                    <Users size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Connect with the right person
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Find someone whose skills complement your own and send a
                      skill exchange request.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Build a meaningful connection
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Once your request is accepted, you become connected and
                      can start planning your learning exchange.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <MessageCircle size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Communicate in real time
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Discuss your goals, share resources, and coordinate your
                      skill exchange through real-time messaging.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-300">
                    <ArrowRight size={21} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                      Learn and teach together
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      Exchange knowledge, practice your skills, and grow
                      together through collaborative learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==================== RIGHT SIDE - CHAT PREVIEW ==================== */}

            <div className="relative">
              {/* Background Glow */}

              <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-violet-100/60 via-blue-100/40 to-transparent blur-3xl transition-colors duration-500 dark:from-violet-950/50 dark:via-blue-950/30 dark:to-transparent"></div>

              {/* Chat Window */}

              <div
                className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition-colors duration-500 dark:border-slate-700 dark:bg-slate-950 dark:shadow-black/40"
                data-chat-window
              >
                {/* ==================== CHAT HEADER ==================== */}

                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 transition-colors duration-300 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-sm font-bold text-white">
                        A
                      </div>

                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-950"></span>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-950 dark:text-white">
                        Alex Morgan
                      </p>

                      <p className="text-xs text-emerald-600 dark:text-emerald-400">
                        Online
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-600 dark:bg-violet-950 dark:text-violet-300">
                    Connected
                  </div>
                </div>

                {/* ==================== MESSAGES ==================== */}

                <div className="space-y-5 bg-slate-50/70 px-5 py-6 transition-colors duration-500 sm:px-7 dark:bg-slate-900/70">
                  {/* Received Message */}

                  <div className="flex items-end gap-2" data-chat-message>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">
                      A
                    </div>

                    <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm transition-colors duration-300 dark:bg-slate-800 dark:shadow-black/20">
                      <p className="text-sm leading-5 text-slate-700 dark:text-slate-200">
                        Hey! I noticed you're interested in learning React.
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        10:24 AM
                      </p>
                    </div>
                  </div>

                  {/* Sent Message */}

                  <div className="flex justify-end" data-chat-message>
                    <div className="max-w-[75%] rounded-2xl rounded-br-md bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-white shadow-sm">
                      <p className="text-sm leading-5">
                        Yes! I can teach JavaScript and would love to learn
                        React.
                      </p>

                      <p className="mt-1 text-right text-[11px] text-violet-100">
                        10:25 AM
                      </p>
                    </div>
                  </div>

                  {/* Received Message */}

                  <div className="flex items-end gap-2" data-chat-message>
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-xs font-bold text-white">
                      A
                    </div>

                    <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm transition-colors duration-300 dark:bg-slate-800 dark:shadow-black/20">
                      <p className="text-sm leading-5 text-slate-700 dark:text-slate-200">
                        Perfect. Let's exchange knowledge and learn together!
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        10:26 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==================== MESSAGE INPUT ==================== */}

                <div className="border-t border-slate-100 bg-white p-4 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
                  <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
                    <span className="flex-1 text-sm text-slate-400">
                      Write a message...
                    </span>

                    <button
                      type="button"
                      aria-label="Send message"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white transition-transform duration-300 hover:scale-105"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==================== BOTTOM FEATURE HIGHLIGHTS ==================== */}

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Skill Exchange",
                description:
                  "Give knowledge while learning something valuable in return.",
              },
              {
                title: "Real-time Chat",
                description:
                  "Discuss goals and coordinate learning with your connections.",
              },
              {
                title: "Community Driven",
                description:
                  "Learn together with people who share your interests.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950"
              >
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== FAQ ==================== */}
      <section
        id="faq"
        className="w-full bg-white px-6 py-20 transition-colors duration-500 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 dark:bg-slate-950"
        data-reveal
      >
        <div className="mx-auto w-full max-w-5xl">
          {/* ==================== SECTION HEADING ==================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700 transition-colors duration-300 dark:bg-violet-950/50 dark:text-violet-300">
              Got questions?
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 transition-colors duration-300 sm:text-5xl dark:text-white">
              Frequently Asked
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 transition-colors duration-300 sm:text-lg dark:text-slate-300">
              Everything you need to know about learning, teaching, and
              exchanging skills on SkillSwap.
            </p>
          </div>

          {/* ==================== FAQ LIST ==================== */}

          <div className="mt-12 space-y-4">
            {[
              {
                question: "What is SkillSwap?",
                answer:
                  "SkillSwap is a community platform where people can teach skills they already know while learning new skills from others. Instead of paying for traditional courses, users exchange knowledge with each other.",
              },
              {
                question: "Is SkillSwap free to use?",
                answer:
                  "SkillSwap is designed around knowledge exchange rather than monetary transactions. Users can connect with other learners and teachers and exchange skills with each other.",
              },
              {
                question: "How does a skill exchange work?",
                answer:
                  "You create your profile, mention the skills you can teach and the skills you want to learn, discover suitable people, and send an exchange request. Once the connection is accepted, you can communicate and start learning together.",
              },
              {
                question: "What skills can I teach or learn?",
                answer:
                  "You can exchange a wide range of skills including programming, web development, design, languages, communication, photography, music, academic subjects, and many other areas of knowledge.",
              },
              {
                question: "How do I find the right learning partner?",
                answer:
                  "SkillSwap helps you discover people based on the skills they can teach and the skills they want to learn. This makes it easier to find people whose learning goals complement your own.",
              },
              {
                question: "Can I communicate with my connections?",
                answer:
                  "Yes. After a skill exchange connection is established, users can communicate with their learning partners and coordinate their skill exchange.",
              },
              {
                question: "Is my account information secure?",
                answer:
                  "SkillSwap uses authentication and protected user information to provide a secure platform experience. Your account should only expose the information intended for other users.",
              },
            ].map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-violet-200 bg-violet-50/40 shadow-sm dark:border-violet-800 dark:bg-violet-950/30"
                      : "border-slate-200 bg-white hover:border-violet-200 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-800"
                  }`}
                >
                  {/* ==================== QUESTION ==================== */}

                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-base font-semibold text-slate-900 transition-colors duration-300 sm:text-lg dark:text-white">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-violet-600 text-white"
                          : "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-300"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  {/* ==================== ANSWER ==================== */}

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-violet-100 px-5 pb-5 pt-4 transition-colors duration-300 sm:px-6 dark:border-violet-900">
                        <p className="max-w-3xl text-sm leading-7 text-slate-600 transition-colors duration-300 sm:text-base dark:text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ==================== FAQ BOTTOM CTA ==================== */}

          <div className="mt-12 rounded-3xl bg-gradient-to-r from-violet-600 to-blue-600 p-8 text-center shadow-xl sm:p-10">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Still have questions?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-violet-100 sm:text-base">
              Join the SkillSwap community and start discovering people who can
              help you learn something new.
            </p>

            <a
              href="#get-started"
              className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-violet-700 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started for Free
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
          {/* Footer Main Content */}
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="SkillSwap"
                  className="h-10 w-10 rounded-xl object-contain"
                />

                <span className="text-xl font-bold text-slate-950 dark:text-white">
                  SkillSwap
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-400">
                Learn, teach, and grow together by exchanging knowledge and
                building meaningful connections.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100 hover:text-violet-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-violet-950 dark:hover:text-violet-400"
                >
                  f
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100 hover:text-violet-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-violet-950 dark:hover:text-violet-400"
                >
                  ◎
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100 hover:text-violet-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-violet-950 dark:hover:text-violet-400"
                >
                  in
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-100 hover:text-violet-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-violet-950 dark:hover:text-violet-400"
                >
                  𝕏
                </a>
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                Platform
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#features"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    How It Works
                  </a>
                </li>

                <li>
                  <a
                    href="#skills"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Explore Skills
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                Community
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#community"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Find Learning Partners
                  </a>
                </li>

                <li>
                  <a
                    href="#connect"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Connect & Chat
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Frequently Asked Questions
                  </a>
                </li>
                <li>
                  <a
                    href="#get-started"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Join SkillSwap
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                Support
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Help & FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    How It Works
                  </a>
                </li>

                <li>
                  <a
                    href="#get-started"
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-violet-600 dark:text-slate-400 dark:hover:text-violet-400"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-14 border-t border-slate-200 pt-6 transition-colors duration-500 dark:border-slate-800">
            <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between dark:text-slate-400">
              <p>© 2026 SkillSwap. All rights reserved.</p>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  Privacy Policy
                </a>

                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-violet-600 dark:hover:text-violet-400"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
