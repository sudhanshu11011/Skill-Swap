import React from "react";
import logo from "../src/assets/images/logo.png";
import heroImage from "../src/assets/images/hero-image.png";
import { ArrowRight, BookOpen, GraduationCap, Moon, Play, Sparkles, Star } from "lucide-react";

const LandingPage = () => {
  
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-2">
            <img
              src={logo}
              alt="SkillSwap Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              SkillSwap
            </span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#home"
              className="text-sm font-medium text-violet-600 transition-colors"
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
              <Moon size={18} />
            </button>

            <a
              href="#get-started"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-violet-700 hover:shadow-md"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
      <section id="home" className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700">
              <span><Sparkles size={18} /></span>
              <span>Join a community of learners and teachers</span>
            </div>
            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-slate-950 lg:text-6xl">
              Exchange Skills.
              <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                Build Opportunities.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              SkillSwap connects people who want to teach and learn skills
              from each other. No money, just knowledge, collaboration, and
              growth.
            </p>
            <div id="get-started" className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get Started for Free
                <span aria-hidden="true"><ArrowRight size={18} /></span>
              </a>

              <button
                type="button"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-violet-200 hover:bg-violet-50"
              >
                <span className="text-violet-600"><Play size={18} /></span>
                Watch Video
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-sm font-bold text-violet-700">
                  S
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-blue-100 text-sm font-bold text-blue-700">
                  K
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm font-bold text-emerald-700">
                  M
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-orange-100 text-sm font-bold text-orange-700">
                  A
                </div>
              </div>

              <p className="text-sm font-medium text-slate-600">
                Join learners and teachers growing together
              </p>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-100 via-purple-50 to-blue-100 blur-3xl"></div>
            <img
              src={heroImage}
              alt="SkillSwap learner using a laptop"
              className="relative z-10 w-full max-w-xl rounded-3xl object-contain"
            />
            <div className="absolute left-0 top-12 z-20 hidden rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm xl:block">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-xl">
                  <GraduationCap size={22} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-violet-600">
                    Teach
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Web Development
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    React · Node.js · MongoDB
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-24 z-20 hidden rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm xl:block">
              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-100 text-xl">
                  <BookOpen size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-pink-500">
                    Learn
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    UI / UX Design
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Figma · Design Systems
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-6 z-20 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm md:flex">
              <span className="text-2xl"><Star size={24} /></span>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Community Driven
                </p>

                <p className="text-xs text-slate-500">
                  Learn. Teach. Grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;