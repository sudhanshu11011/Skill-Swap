import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../src/context/ThemeContext";
import logo from "../src/assets/images/logo.png";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Languages,
  LockKeyhole,
  Mail,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";

const LoginPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // Authentication logic will be connected later.
    console.log("Login form submitted:", formData);
  };
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-slate-100">
      {/*TOP BAR*/}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-500 dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="SkillSwap"
              className="h-10 w-10 object-contain"
            />

            <span className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">
              SkillSwap
            </span>
          </Link>

          {/* Header Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Change language"
              className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:border-violet-200 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-400 sm:flex"
            >
              <Languages size={18} />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light"
                  ? "Switch to dark theme"
                  : "Switch to light theme"
              }
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-violet-500 dark:hover:text-violet-400"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </header>
      {/* LOGIN CONTENT */}
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden px-6 py-12 sm:px-8 lg:px-10">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/10" />

        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/10" />

        <div className="relative grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_460px]">
          {/* ==================== LEFT CONTENT ==================== */}
          <div className="hidden lg:block">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
                <Sparkles size={16} />
                Welcome back to SkillSwap
              </div>

              {/* Heading */}
              <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white xl:text-6xl">
                Continue your
                <span className="block bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                  skill journey.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-400">
                Connect with people who can teach what you want to learn and
                share the skills you already know.
              </p>

              {/* Small Highlights */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Learn
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Teach
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Connect
                </span>

                <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  Grow
                </span>
              </div>
            </div>
          </div>

          {/* ==================== LOGIN CARD ==================== */}
          <div className="w-full">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20 sm:p-8">
              {/* Card Heading */}
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                  <LockKeyhole size={22} />
                </div>

                <h2 className="text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
                  Welcome back
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Log in to continue your SkillSwap journey.
                </p>
              </div>

              {/* Login Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-violet-500 dark:focus:bg-slate-950"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-violet-500 dark:focus:bg-slate-950"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((current) => !current)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:bg-slate-100 hover:text-violet-600 dark:hover:bg-slate-800 dark:hover:text-violet-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:translate-y-0"
                >
                  Log In
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>

              {/* Divider */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

                <span className="text-xs font-medium text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Signup Prompt */}
              <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                >
                  Create one
                </Link>
              </p>
            </div>

            {/* Security Note */}
            <p className="mt-5 text-center text-xs leading-5 text-slate-400 dark:text-slate-500">
              By continuing, you agree to use SkillSwap responsibly and
              respectfully.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;