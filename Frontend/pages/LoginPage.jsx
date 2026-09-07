import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Lock, Mail, Moon, Sun } from "lucide-react";

import { useTheme } from "../src/context/ThemeContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(isSignup ? "Signup submitted" : "Login submitted");
  };

  return (
    <div
      className={`min-h-screen w-full overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-[#050816] text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className={`absolute -left-40 top-0 h-[500px] w-[500px] rounded-full blur-[150px] ${
            theme === "dark" ? "bg-purple-700/25" : "bg-purple-400/30"
          }`}
        />

        <div
          className={`absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full blur-[150px] ${
            theme === "dark" ? "bg-blue-700/15" : "bg-blue-300/30"
          }`}
        />
      </div>

      <main className="relative flex min-h-screen items-center justify-center px-4 py-10">
        <section
          className={`relative grid w-full max-w-5xl overflow-hidden rounded-[28px] border shadow-2xl md:grid-cols-2 ${
            theme === "dark"
              ? "border-purple-500/30 bg-black/90 shadow-purple-950/40"
              : "border-purple-300 bg-white/90 shadow-purple-300/30"
          }`}
        >
          {/* LEFT VISUAL PANEL */}
          <div className="relative min-h-[420px] overflow-hidden bg-gradient-to-br from-purple-700 via-violet-700 to-purple-950 p-10 md:min-h-[620px]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

            {/* Diagonal design */}
            <div className="absolute -right-32 top-0 h-full w-64 rotate-[32deg] bg-black/90" />

            <div className="relative z-10 flex h-full flex-col justify-end">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                ✨ SkillSwap
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight text-white md:text-5xl">
                {isSignup
                  ? "Start your skill journey."
                  : "Continue your skill journey."}
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-purple-100">
                Learn, teach, and connect with people whose skills complement
                your own.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Learn", "Teach", "Connect", "Grow"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT AUTH PANEL */}
          <div
            className={`relative p-7 sm:p-10 ${
              theme === "dark" ? "bg-black" : "bg-white"
            }`}
          >
            {/* TOP SECTION */}
            <div className="flex items-start justify-between gap-4">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="flex items-center gap-3 text-left"
              >
                {/* Transparent logo */}
                <div className="flex h-11 w-11 items-center justify-center">
                  <span className="text-3xl font-black italic text-purple-500">
                    S
                  </span>
                </div>

                <div>
                  <h2 className="font-bold">SkillSwap</h2>
                  <p className="text-xs opacity-60">Learn. Teach. Grow.</p>
                </div>
              </button>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className={`rounded-xl border p-2.5 transition ${
                  theme === "dark"
                    ? "border-slate-700 bg-slate-900 hover:bg-slate-800"
                    : "border-slate-300 bg-slate-100 hover:bg-slate-200"
                }`}
                title="Toggle Theme"
              >
                {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>

            {/* AUTH FORM */}
            <div className="mt-12">
              <div className="mb-8">
                <div className="mb-4 inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold text-purple-400">
                  {isSignup ? "Create Account" : "Welcome Back"}
                </div>

                <h1 className="text-4xl font-bold leading-tight">
                  {isSignup ? "Join" : "Log in to"}{" "}
                  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    SkillSwap
                  </span>
                </h1>

                <p className="mt-4 text-sm leading-7 opacity-60">
                  {isSignup
                    ? "Create your account and begin learning, teaching, and connecting."
                    : "Continue your skill journey and connect with people who can help you learn and grow."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name - Signup only */}
                {isSignup && (
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`w-full border-b bg-transparent px-1 py-3 outline-none transition focus:border-purple-500 ${
                        theme === "dark"
                          ? "border-slate-700 placeholder:text-slate-600"
                          : "border-slate-300 placeholder:text-slate-400"
                      }`}
                    />
                  </div>
                )}

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <div
                    className={`flex items-center gap-3 border-b px-1 py-3 ${
                      theme === "dark" ? "border-slate-700" : "border-slate-300"
                    }`}
                  >
                    <Mail size={18} className="opacity-60" />

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="text-sm font-medium">Password</label>

                    {!isSignup && (
                      <button
                        type="button"
                        className="text-xs font-medium text-purple-400"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>

                  <div
                    className={`flex items-center gap-3 border-b px-1 py-3 ${
                      theme === "dark" ? "border-slate-700" : "border-slate-300"
                    }`}
                  >
                    <Lock size={18} className="opacity-60" />

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full bg-transparent text-sm outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="opacity-60 transition hover:opacity-100"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-600 py-4 font-semibold text-white shadow-lg shadow-purple-700/30 transition hover:scale-[1.01]"
                >
                  {isSignup ? "Sign Up" : "Log In"}
                  <ArrowRight size={18} />
                </button>
              </form>

              {/* Login / Signup Switch */}
              <div className="mt-8 text-center text-sm opacity-70">
                {isSignup ? "Already have an account?" : "New to SkillSwap?"}{" "}
                <button
                  type="button"
                  onClick={() => setIsSignup(!isSignup)}
                  className="font-semibold text-purple-400 transition hover:text-purple-300"
                >
                  {isSignup ? "Log in" : "Create your account"}
                </button>
              </div>

              <p className="mt-8 text-center text-xs opacity-40">
                Your SkillSwap account is protected for secure access.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
