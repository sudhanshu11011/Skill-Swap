import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "../components/Header.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import OnboardingPage from "../pages/OnboardingPage.jsx";
import DashboardPage from "../pages/DashboardPage.jsx";
import ProtectedRoute from "../routes/ProtectedRoute.jsx";

function AppLayout() {
  const location = useLocation();

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("skillswap-theme") === "dark";
  });

  const landingPageRoutes = ["/", "/about", "/features", "/howitworks"];
  const showHeader = landingPageRoutes.includes(location.pathname);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  useEffect(() => {
    localStorage.setItem("skillswap-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const root = document.getElementById("root");

    document.documentElement.style.margin = "0";
    document.documentElement.style.width = "100%";
    document.documentElement.style.height = "100%";

    document.body.style.margin = "0";
    document.body.style.width = "100%";
    document.body.style.height = "100%";

    if (root) {
      Object.assign(root.style, {
        width: "100%",
        maxWidth: "none",
        height: "100%",
        minHeight: "0",
        margin: "0",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        textAlign: "left",
        border: "0",
      });
    }

    return () => {
      document.documentElement.style.height = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: dark ? "#111020" : "#f8f9fc",
        color: dark ? "#f4f2ff" : "#172033",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {showHeader && <Header dark={dark} onToggleTheme={toggleTheme} />}

      <div
        style={{
          flex: "1 1 auto",
          minHeight: 0,
          overflow: "auto",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<LandingPage dark={dark} section="home" />}
          />

          <Route
            path="/about"
            element={<LandingPage dark={dark} section="about" />}
          />

          <Route
            path="/features"
            element={<LandingPage dark={dark} section="features" />}
          />

          <Route
            path="/howitworks"
            element={<LandingPage dark={dark} section="howitworks" />}
          />

          <Route
            path="/login"
            element={<LoginPage dark={dark} onToggleTheme={toggleTheme} />}
          />

          <Route
            path="/signup"
            element={<SignUpPage dark={dark} onToggleTheme={toggleTheme} />}
          />

          <Route
            path="/onboarding"
            element={
              <ProtectedRoute requireOnboarding>
                <OnboardingPage dark={dark} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage dark={dark} />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
