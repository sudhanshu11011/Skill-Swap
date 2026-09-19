import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing/Landing/Landing";
import Login from "../pages/auth/Login/Login";
import Register from "../pages/auth/Register/Register";
import Onboarding from "../pages/onboarding/Onboarding/Onboarding";
import Dashboard from "../pages/user/Dashboard/Dashboard";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import OnboardingRoute from "./OnboardingRoute";
import Connections from "../pages/connection/Connections/Connections";
import Requests from "../pages/connection/Requests/Requests";
import ChatPage from "../pages/chat/Chat/Chat";
import Profile from "../pages/user/Profile/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<OnboardingRoute />}>
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}