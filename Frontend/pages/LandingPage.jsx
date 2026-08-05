import React from "react";
import logo from "../src/assets/images/logo.png";
const LandingPage = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            {" "}
            <img
              src={logo}
              alt="SkillSwap Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">SkillSwap</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            
            <a
              href="#home"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              Home
            </a>
            
            <a
              href="#about"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              About
            </a>
            
            <a
              href="#features"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              Features
            </a>
            
            <a
              href="#how-it-works"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              How It Works
            </a>

            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              Testimonials
            </a>

            <a
              href="#faq"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 transition-colors hover:text-violet-600"
            >
              Contact
            </a>

          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 md:block"
            >
              EN
            </button>
            <button
              type="button"
              aria-label="Toggle theme"
              className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-lg transition-colors hover:bg-slate-100 md:flex"
            >
              ☾
            </button>
            <a
              href="#get-started"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-violet-700"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
      <section
        id="home"
        className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6"
      >
        <h1 className="text-4xl font-bold"></h1>
      </section>
    </main>
  );
};
export default LandingPage;