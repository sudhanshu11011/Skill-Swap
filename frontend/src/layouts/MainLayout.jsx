import { Bell, MessageCircle, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Compass, Users, UserPlus, UserRound } from "lucide-react";

const links = [
  ["/dashboard", Compass, "Explore"],
  ["/connections", Users, "Connections"],
  ["/requests", UserPlus, "Requests"],
  ["/chat", MessageCircle, "Messages"],
  ["/profile", UserRound, "Profile"],
];

export default function MainLayout() {
  const { userQuery } = useAuthContext();
  const user = userQuery.data?.data?.user;

  return (
    <div style={{ minHeight: "100vh", background: "#f7f6fc", color: "#15132a" }}>
      <header
        style={{
          height: 72,
          background: "#fff",
          borderBottom: "1px solid #e8e5f2",
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "0 28px",
          boxSizing: "border-box",
        }}
      >
        <strong style={{ width: 230, color: "#6d28d9", fontSize: 22 }}>
          SkillSwap
        </strong>

        <div
          style={{
            flex: 1,
            maxWidth: 460,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#f7f6fc",
            borderRadius: 10,
            padding: "10px 14px",
          }}
        >
          <Search size={18} color="#777" />
          <input
            placeholder="Search skills or people"
            style={{
              border: 0,
              outline: 0,
              background: "transparent",
              width: "100%",
              fontSize: 14,
            }}
          />
        </div>

        <Bell size={20} color="#555" />
        <MessageCircle size={20} color="#555" />

        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt=""
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              background: "#6d28d9",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
            }}
          >
            {user?.fullName?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}

        <strong style={{ fontSize: 14 }}>{user?.fullName || "User"}</strong>
      </header>

      <div style={{ display: "flex", minHeight: "calc(100vh - 72px)" }}>
        <aside
          style={{
            width: 230,
            flexShrink: 0,
            background: "#fff",
            borderRight: "1px solid #e8e5f2",
            padding: "24px 16px",
            boxSizing: "border-box",
          }}
        >
          <nav style={{ display: "grid", gap: 6 }}>
            {links.map(([path, Icon, label]) => (
              <NavLink
                key={path}
                to={path}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "12px",
                  borderRadius: 10,
                  textDecoration: "none",
                  color: isActive ? "#6d28d9" : "#555",
                  background: isActive ? "#f0ebff" : "transparent",
                  fontWeight: isActive ? 600 : 400,
                })}
              >
                <Icon size={19} />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div style={{ flex: 1, minWidth: 0 }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}