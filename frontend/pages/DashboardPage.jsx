import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Bell,
  MessageSquare,
  LayoutDashboard,
  Heart,
  Users,
  Bookmark,
  Star,
  Settings,
  Search,
} from "lucide-react";
import useDashboardData from "../hooks/useDashboardData";

const sidebarItems = [
  { icon: Compass, label: "Explore" },
  { icon: Bell, label: "Notifications" },
  { icon: MessageSquare, label: "Chat" },
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Heart, label: "My Requests" },
  { icon: Users, label: "Connections" },
  { icon: Bookmark, label: "Bookmarks" },
  { icon: Star, label: "Reviews" },
  { icon: Settings, label: "Settings" },
];

export default function DashboardPage({ dark = false }) {
  const { user, loading, error } = useDashboardData();
  const [activeTab, setActiveTab] = useState("People");
  const [search, setSearch] = useState("");

  const colors = {
    page: dark ? "#111020" : "#ffffff",
    sidebar: dark ? "#171528" : "#fbfbfd",
    panel: dark ? "#19172b" : "#ffffff",
    text: dark ? "#f4f2ff" : "#172033",
    muted: dark ? "#b9b5cc" : "#596174",
    border: dark ? "#302d45" : "#e4e6ed",
    purple: "#5526d7",
    softPurple: dark ? "#2b2147" : "#f2efff",
  };

  const buttonStyle = {
    border: `1px solid ${colors.border}`,
    borderRadius: 8,
    padding: "11px 14px",
    background: colors.panel,
    color: colors.text,
    cursor: "pointer",
    fontSize: 14,
  };

  const fieldStyle = {
    ...buttonStyle,
    width: "100%",
    boxSizing: "border-box",
  };

  if (loading) {
    return (
      <main style={{ padding: 24, color: colors.text }}>
        Loading your dashboard...
      </main>
    );
  }

  if (error) {
    return (
      <main style={{ padding: 24, color: colors.text }}>
        <p role="alert">{error}</p>
        <button
          type="button"
          style={buttonStyle}
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </main>
    );
  }

  const displayName = user?.fullName || user?.name || "User";
  const initial = displayName.trim().charAt(0).toUpperCase() || "U";

  return (
    <div
      style={{
        minHeight: "100%",
        display: "grid",
        gridTemplateColumns: "250px minmax(0, 1fr)",
        background: colors.page,
        color: colors.text,
        fontFamily: "inherit",
      }}
    >
      <aside
        style={{
          background: colors.sidebar,
          borderRight: `1px solid ${colors.border}`,
          padding: "24px 12px",
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 8px 24px",
            color: colors.text,
            textDecoration: "none",
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <span style={{ color: colors.purple, fontSize: 35, fontWeight: 800 }}>
            S
          </span>
          <span>
            <strong style={{ display: "block", fontSize: 22 }}>
              SkillSwap
            </strong>
            <small style={{ color: colors.muted }}>Learn. Teach. Grow.</small>
          </span>
        </Link>

        <nav style={{ display: "grid", gap: 8 }}>
          {sidebarItems.map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              onClick={() =>
                setActiveTab(label === "Explore" ? "People" : label)
              }
              style={{
                ...buttonStyle,
                display: "flex",
                alignItems: "center",
                gap: 14,
                textAlign: "left",
                borderColor:
                  label === "Explore" ? colors.softPurple : colors.border,
                background:
                  label === "Explore" ? colors.softPurple : "transparent",
                color: label === "Explore" ? colors.purple : colors.text,
              }}
            >
              <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
              {label}
            </button>
          ))}
        </nav>

        <div
          style={{
            marginTop: "auto",
            padding: 16,
            border: `1px solid ${colors.border}`,
            borderRadius: 10,
            background: colors.panel,
          }}
        >
          <strong>Complete Your Profile</strong>
          <p style={{ color: colors.muted, fontSize: 13, lineHeight: 1.5 }}>
            Add your skills and bio to complete your profile.
          </p>
          <Link
            to="/onboarding"
            style={{
              display: "block",
              textAlign: "center",
              padding: 10,
              borderRadius: 7,
              background: colors.purple,
              color: "#fff",
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Edit Profile
          </Link>
        </div>
      </aside>

      <main style={{ minWidth: 0, padding: "24px 28px" }}>
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 16,
            paddingBottom: 24,
            borderBottom: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ flex: "1 1 180px" }}>
            <h1 style={{ margin: 0, fontSize: 26 }}>Explore</h1>
            <p style={{ margin: "6px 0 0", color: colors.muted }}>
              Find people, discover skills and start exchanging.
            </p>
          </div>

          <input
            aria-label="Search people or skills"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search skills, people or keywords..."
            style={{ ...fieldStyle, flex: "2 1 260px", maxWidth: 460 }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              border: `1px solid ${colors.border}`,
              borderRadius: 10,
            }}
          >
            <div
              aria-hidden="true"
              style={{
                width: 36,
                height: 36,
                display: "grid",
                placeItems: "center",
                borderRadius: "50%",
                background: colors.softPurple,
                color: colors.purple,
                fontWeight: 700,
              }}
            >
              {initial}
            </div>
            <div>
              <strong style={{ display: "block", fontSize: 14 }}>
                {displayName}
              </strong>
              <small style={{ color: colors.muted }}>Logged in</small>
            </div>
          </div>
        </header>

        <section style={{ paddingTop: 24 }}>
          <div
            style={{
              display: "flex",
              gap: 24,
              borderBottom: `1px solid ${colors.border}`,
              marginBottom: 20,
            }}
          >
            {["People", "Skills"].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "12px 16px",
                  border: 0,
                  borderBottom:
                    activeTab === tab
                      ? `2px solid ${colors.purple}`
                      : "2px solid transparent",
                  background: "transparent",
                  color: activeTab === tab ? colors.purple : colors.muted,
                  cursor: "pointer",
                  fontSize: 15,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <input
              aria-label="Search by skill"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by skills"
              style={{ ...fieldStyle, flex: "1 1 220px", maxWidth: 360 }}
            />
            <select aria-label="Category" style={buttonStyle} defaultValue="">
              <option value="">All categories</option>
            </select>
            <select
              aria-label="Availability"
              style={buttonStyle}
              defaultValue=""
            >
              <option value="">Any availability</option>
            </select>
            <select aria-label="Location" style={buttonStyle} defaultValue="">
              <option value="">Any location</option>
            </select>
          </div>

          <h2 style={{ fontSize: 18, margin: "0 0 16px" }}>
            {activeTab === "People"
              ? "People you might want to connect with"
              : "Explore skills"}
          </h2>

          <div
            style={{
              minHeight: 220,
              display: "grid",
              placeItems: "center",
              padding: 24,
              border: `1px dashed ${colors.border}`,
              borderRadius: 12,
              textAlign: "center",
            }}
          >
            <div>
              <Search
                size={32}
                strokeWidth={1.7}
                color={colors.muted}
                aria-hidden="true"
                style={{ marginBottom: 12 }}
              />
              <strong>
                {search
                  ? "No matching results"
                  : activeTab === "People"
                    ? "No people to show yet"
                    : "No skills to show yet"}
              </strong>
              <p style={{ color: colors.muted, marginBottom: 0 }}>
                {search
                  ? "Try a different search."
                  : "Results will appear here when data is available."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
