import { Bell, MessageCircle, Search } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Compass, Users, UserPlus, UserRound } from "lucide-react";
import useResponsive from "../hooks/useResponsive";

const links = [
  ["/dashboard", Compass, "Explore"],
  ["/connections", Users, "Connections"],
  ["/requests", UserPlus, "Requests"],
  ["/chat", MessageCircle, "Messages"],
  ["/profile", UserRound, "Profile"],
];

export default function MainLayout() {
  const { userQuery } = useAuthContext();
  const { isDesktop, isTablet, isMobile, isSmallMobile } = useResponsive();
  const user = userQuery.data?.data?.user;

  const sidebarWidth = isDesktop ? 230 : 78;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f6fc",
        color: "#15132a",
        overflowX: "hidden",
      }}
    >
      <header
        style={{
          height: isMobile ? 64 : 72,
          background: "#fff",
          borderBottom: "1px solid #e8e5f2",
          display: "flex",
          alignItems: "center",
          gap: isMobile ? 12 : 24,
          padding: isSmallMobile
            ? "0 14px"
            : isMobile
              ? "0 18px"
              : "0 28px",
          boxSizing: "border-box",
          position: "sticky",
          top: 0,
          zIndex: 20,
        }}
      >
        <strong
          style={{
            width: isDesktop ? 230 : "auto",
            flexShrink: 0,
            color: "#6d28d9",
            fontSize: isMobile ? 20 : 22,
            whiteSpace: "nowrap",
          }}
        >
          SkillSwap
        </strong>

        <div
          style={{
            flex: 1,
            maxWidth: 460,
            minWidth: 0,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#f7f6fc",
            borderRadius: 10,
            padding: "10px 14px",
            marginLeft: isMobile ? 0 : isTablet ? 8 : 0,
          }}
        >
          <Search size={18} color="#777" style={{ flexShrink: 0 }} />

          {!isMobile && (
            <input
              placeholder="Search skills or people"
              style={{
                border: 0,
                outline: 0,
                background: "transparent",
                width: "100%",
                minWidth: 0,
                fontSize: 14,
              }}
            />
          )}
        </div>

        {!isMobile && <Bell size={20} color="#555" />}

        {!isMobile && <MessageCircle size={20} color="#555" />}

        {user?.profilePic ? (
          <img
            src={user.profilePic}
            alt=""
            style={{
              width: isMobile ? 34 : 38,
              height: isMobile ? 34 : 38,
              flexShrink: 0,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: isMobile ? 34 : 38,
              height: isMobile ? 34 : 38,
              flexShrink: 0,
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

        {!isMobile && !isTablet && (
          <strong
            style={{
              fontSize: 14,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 140,
            }}
          >
            {user?.fullName || "User"}
          </strong>
        )}
      </header>

      <div
        style={{
          display: "flex",
          minHeight: isMobile
            ? "calc(100vh - 64px)"
            : "calc(100vh - 72px)",
          paddingBottom: isMobile ? 72 : 0,
        }}
      >
        {!isMobile && (
          <aside
            style={{
              width: sidebarWidth,
              flexShrink: 0,
              background: "#fff",
              borderRight: "1px solid #e8e5f2",
              padding: isDesktop ? "24px 16px" : "24px 10px",
              boxSizing: "border-box",
              transition: "width 0.2s ease",
            }}
          >
            <nav
              style={{
                display: "grid",
                gap: 6,
              }}
            >
              {links.map(([path, Icon, label]) => (
                <NavLink
                  key={path}
                  to={path}
                  title={isTablet ? label : undefined}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isTablet ? "center" : "flex-start",
                    gap: 12,
                    minHeight: 44,
                    padding: isTablet ? 10 : "12px",
                    borderRadius: 10,
                    textDecoration: "none",
                    color: isActive ? "#6d28d9" : "#555",
                    background: isActive ? "#f0ebff" : "transparent",
                    fontWeight: isActive ? 600 : 400,
                    boxSizing: "border-box",
                  })}
                >
                  <Icon size={19} />
                  {isDesktop && label}
                </NavLink>
              ))}
            </nav>
          </aside>
        )}

        <main
          style={{
            flex: 1,
            minWidth: 0,
            width: "100%",
            overflowX: "hidden",
          }}
        >
          <Outlet />
        </main>
      </div>

      {isMobile && (
        <nav
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            height: 72,
            background: "#fff",
            borderTop: "1px solid #e8e5f2",
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            alignItems: "center",
            zIndex: 30,
            padding: "4px 6px",
            boxSizing: "border-box",
          }}
        >
          {links.map(([path, Icon, label]) => (
            <NavLink
              key={path}
              to={path}
              style={({ isActive }) => ({
                minWidth: 0,
                minHeight: 56,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 4,
                padding: "6px 2px",
                borderRadius: 10,
                textDecoration: "none",
                color: isActive ? "#6d28d9" : "#777",
                background: isActive ? "#f0ebff" : "transparent",
                fontSize: isSmallMobile ? 9 : 10,
                fontWeight: isActive ? 600 : 400,
                boxSizing: "border-box",
              })}
            >
              <Icon size={19} />
              <span
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}