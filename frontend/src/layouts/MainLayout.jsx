import {
  Bell,
  ChevronDown,
  Compass,
  MessageCircle,
  Moon,
  Search,
  Settings,
  Sun,
  UserPlus,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useConnection from "../hooks/useConnection";
import useMatching from "../hooks/useMatching";
import useResponsive from "../hooks/useResponsive";
import { useAppStore } from "../lib/zustand";

const links = [
  ["/dashboard", Compass, "Dashboard"],
  ["/connections", Users, "Connections"],
  ["/requests", UserPlus, "Requests"],
  ["/chat", MessageCircle, "Messages"],
  ["/profile", UserRound, "Profile"],
];

export default function MainLayout() {
  const { userQuery, logout } = useAuthContext();

  const {
    friends,
    outgoing,
    requests,
    sendRequest,
  } = useConnection();

  const {
    isDesktop,
    isMobile,
    isSmallMobile,
  } = useResponsive();

  const { theme, toggleTheme } = useAppStore();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const query = search.trim();

  const {
    data: searchData,
    isLoading: searchLoading,
  } = useMatching(query);

  const user = userQuery.data?.data?.user;

  const results = Array.isArray(searchData?.data)
    ? searchData.data
    : [];

  const friendList = friends.data?.data || [];
  const sentRequests = outgoing.data?.data || [];
  const incomingRequests =
    requests.data?.data?.incomingRequests || [];

  const sidebarWidth = isDesktop ? 238 : 76;
  const shellGap = 14;

  const getConnectionStatus = (personId) => {
    if (
      friendList.some(
        (friend) => friend._id === personId
      )
    ) {
      return "connected";
    }

    if (
      sentRequests.some(
        (request) =>
          request.recipient?._id === personId ||
          request.recipient === personId
      )
    ) {
      return "pending";
    }

    return "connect";
  };

  const handleConnect = (personId) => {
    sendRequest.mutate(personId);
  };

  const handleLogout = async () => {
    try {
      await logout.mutateAsync();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout Failed", error);
    }
  };

  return (
    <div style={styles.app}>
      <style>{`
        .main-nav-link:hover {
          background: color-mix(
            in srgb,
            var(--primary) 7%,
            transparent
          ) !important;
          color: var(--primary) !important;
          transform: translateX(2px);
        }

        .main-settings:hover {
          background: color-mix(
            in srgb,
            var(--primary) 7%,
            transparent
          ) !important;
          color: var(--primary) !important;
          transform: translateX(2px);
        }

        .main-icon-button:hover {
          background: color-mix(
            in srgb,
            var(--primary) 8%,
            transparent
          ) !important;
          color: var(--primary) !important;
          transform: translateY(-1px);
        }

        .main-profile-button:hover {
          background: color-mix(
            in srgb,
            var(--primary) 7%,
            transparent
          ) !important;
        }

        .main-search-input:focus {
          background: var(--surface) !important;
          box-shadow:
            0 0 0 3px color-mix(
              in srgb,
              var(--primary) 9%,
              transparent
            ),
            inset 0 0 0 1px color-mix(
              in srgb,
              var(--primary) 30%,
              var(--border)
            ) !important;
        }

        .main-search-person:hover {
          background: color-mix(
            in srgb,
            var(--primary) 5%,
            transparent
          );
        }

        .main-menu-item:hover {
          background: color-mix(
            in srgb,
            var(--primary) 7%,
            transparent
          );
          color: var(--primary);
        }

        .mobile-nav-link:hover {
          background: color-mix(
            in srgb,
            var(--primary) 7%,
            transparent
          );
        }
      `}</style>

      {/* Header */}
      <header
        style={{
          ...styles.header,
          left: isMobile
            ? 10
            : sidebarWidth + shellGap,
          right: 10,
          top: 10,
        }}
      >
        {isMobile && (
          <div style={styles.mobileBrand}>
            <img
              src="/skillswaplogo.png"
              alt=""
              style={styles.mobileBrandIcon}
            />

            <strong>SkillSwap</strong>
          </div>
        )}

        {/* Search */}
        <div
          style={{
            ...styles.searchWrapper,
            maxWidth: isMobile ? "none" : 560,
          }}
        >
          <Search
            size={17}
            strokeWidth={2}
            style={styles.searchIcon}
          />

          <input
            className="main-search-input"
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
            placeholder={
              isSmallMobile
                ? "Search..."
                : "Search skills or people"
            }
            style={styles.searchInput}
          />

          {query && (
            <button
              type="button"
              onClick={() => setSearch("")}
              style={styles.clearSearch}
            >
              <X size={15} />
            </button>
          )}

          {query && (
            <div style={styles.searchResults}>
              {searchLoading ? (
                <div style={styles.searchState}>
                  Searching...
                </div>
              ) : results.length ? (
                results.map((person) => {
                  const status = getConnectionStatus(
                    person._id
                  );

                  return (
                    <div
                      key={person._id}
                      className="main-search-person"
                      style={styles.searchPerson}
                    >
                      <div style={styles.searchPersonInfo}>
                        {person.profilePic ? (
                          <img
                            src={person.profilePic}
                            alt=""
                            style={styles.searchAvatar}
                          />
                        ) : (
                          <div
                            style={
                              styles.searchAvatarFallback
                            }
                          >
                            {person.fullName
                              ?.charAt(0)
                              ?.toUpperCase()}
                          </div>
                        )}

                        <div style={{ minWidth: 0 }}>
                          <strong
                            style={styles.searchName}
                          >
                            {person.fullName}
                          </strong>

                          <span
                            style={styles.searchSkill}
                          >
                            {person.skillYouHave ||
                              "Skill information unavailable"}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        disabled={
                          status !== "connect" ||
                          sendRequest.isPending
                        }
                        onClick={() =>
                          handleConnect(person._id)
                        }
                        style={{
                          ...styles.searchConnect,
                          opacity:
                            status === "connect"
                              ? 1
                              : 0.55,
                        }}
                      >
                        {status === "connected"
                          ? "Connected"
                          : status === "pending"
                            ? "Pending"
                            : "Connect"}
                      </button>
                    </div>
                  );
                })
              ) : (
                <div style={styles.searchState}>
                  No matching people found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div style={styles.headerActions}>
          <button
            type="button"
            className="main-icon-button"
            onClick={() => navigate("/requests")}
            title="Notifications"
            style={styles.iconButton}
          >
            <Bell size={18} />

            {incomingRequests.length > 0 && (
              <span style={styles.notificationBadge}>
                {incomingRequests.length > 9
                  ? "9+"
                  : incomingRequests.length}
              </span>
            )}
          </button>

          <button
            type="button"
            className="main-icon-button"
            onClick={() => navigate("/chat")}
            title="Messages"
            style={styles.iconButton}
          >
            <MessageCircle size={18} />
          </button>

          <button
            type="button"
            className="main-icon-button"
            onClick={toggleTheme}
            title="Toggle theme"
            style={styles.iconButton}
          >
            {theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>

          <div style={styles.profileWrapper}>
            <button
              type="button"
              className="main-profile-button"
              onClick={() =>
                setMenuOpen((current) => !current)
              }
              style={styles.profileButton}
            >
              {user?.profilePic ? (
                <img
                  src={user.profilePic}
                  alt=""
                  style={styles.profileAvatar}
                />
              ) : (
                <div style={styles.profileFallback}>
                  {user?.fullName
                    ?.charAt(0)
                    ?.toUpperCase() || "U"}
                </div>
              )}

              {isDesktop && (
                <>
                  <span style={styles.profileName}>
                    {user?.fullName?.split(" ")[0] ||
                      "User"}
                  </span>

                  <ChevronDown size={14} />
                </>
              )}
            </button>

            {menuOpen && (
              <div style={styles.profileMenu}>
                <button
                  type="button"
                  className="main-menu-item"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/profile");
                  }}
                  style={styles.menuItem}
                >
                  <UserRound size={16} />
                  Profile
                </button>

                <button
                  type="button"
                  className="main-menu-item"
                  onClick={handleLogout}
                  style={styles.menuItem}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      {!isMobile && (
        <aside
          style={{
            ...styles.sidebar,
            width: sidebarWidth,
            top: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <div
            style={{
              ...styles.brand,
              justifyContent: isDesktop
                ? "flex-start"
                : "center",
            }}
          >
            <img
              src="/skillswaplogo.png"
              alt=""
              style={styles.brandIcon}
            />

            {isDesktop && (
              <span style={styles.brandText}>
                Skill<span>Swap</span>
              </span>
            )}
          </div>

          <nav style={styles.navigation}>
            {links.map(([path, Icon, label]) => (
              <NavLink
                key={path}
                to={path}
                className="main-nav-link"
                style={({ isActive }) => ({
                  ...styles.navLink,
                  justifyContent: isDesktop
                    ? "flex-start"
                    : "center",
                  padding: isDesktop
                    ? "11px 14px"
                    : 11,
                  color: isActive
                    ? "var(--primary)"
                    : "var(--muted)",
                  background: isActive
                    ? "color-mix(in srgb, var(--primary) 10%, transparent)"
                    : "transparent",
                })}
              >
                <Icon
                  size={19}
                  strokeWidth={1.9}
                />

                {isDesktop && (
                  <span style={styles.navLabel}>
                    {label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="main-settings"
            onClick={() => {}}
            style={{
              ...styles.settingsButton,
              justifyContent: isDesktop
                ? "flex-start"
                : "center",
              padding: isDesktop
                ? "11px 14px"
                : 11,
            }}
          >
            <Settings
              size={19}
              strokeWidth={1.9}
            />

            {isDesktop && (
              <span style={styles.navLabel}>
                Settings
              </span>
            )}
          </button>
        </aside>
      )}

      {/* Content */}
      <main
        style={{
          ...styles.content,
          marginLeft: isMobile
            ? 0
            : sidebarWidth + shellGap,
          paddingTop: isMobile ? 76 : 96,
          paddingBottom: isMobile ? 88 : 20,
          paddingRight: isMobile ? 10 : 24,
        }}
      >
        <Outlet />
      </main>

      {/* Mobile Navigation */}
      {isMobile && (
        <nav style={styles.mobileNavigation}>
          {links.map(([path, Icon, label]) => (
            <NavLink
              key={path}
              to={path}
              className="mobile-nav-link"
              style={({ isActive }) => ({
                ...styles.mobileNavLink,
                color: isActive
                  ? "var(--primary)"
                  : "var(--muted)",
                background: isActive
                  ? "color-mix(in srgb, var(--primary) 8%, transparent)"
                  : "transparent",
              })}
            >
              <Icon size={18} />

              <span>
                {label === "Messages"
                  ? "Chat"
                  : label}
              </span>
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    background: "var(--bg)",
    color: "var(--text)",
  },

  header: {
    position: "fixed",
    height: 64,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    gap: 18,
    padding: "0 20px",
    border: "1px solid var(--border)",
    borderRadius: 20,
    background: "var(--surface)",
    boxShadow:
      "0 5px 22px rgba(35,20,70,.06)",
  },

  mobileBrand: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexShrink: 0,
    color: "var(--text)",
    fontSize: 15,
  },

  mobileBrandIcon: {
    width: 28,
    height: 28,
    objectFit: "contain",
  },

  searchWrapper: {
    position: "relative",
    width: "100%",
    margin: "0 auto",
  },

  searchIcon: {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: "translateY(-50%)",
    color: "var(--muted)",
    pointerEvents: "none",
    zIndex: 2,
  },

  searchInput: {
    width: "100%",
    height: 40,
    border: "1px solid var(--border)",
    outline: 0,
    borderRadius: 13,
    padding: "0 42px",
    background: "var(--soft)",
    color: "var(--text)",
    transition:
      "box-shadow .2s ease, background .2s ease",
  },

  clearSearch: {
    position: "absolute",
    right: 9,
    top: 6,
    width: 28,
    height: 28,
    display: "grid",
    placeItems: "center",
    border: 0,
    borderRadius: 9,
    background: "transparent",
    color: "var(--muted)",
    cursor: "pointer",
  },

  searchResults: {
    position: "absolute",
    top: 49,
    left: 0,
    right: 0,
    padding: 8,
    border: "1px solid var(--border)",
    borderRadius: 17,
    background: "var(--surface)",
    boxShadow:
      "0 18px 45px rgba(35,20,70,.12)",
    maxHeight: 400,
    overflowY: "auto",
    zIndex: 200,
  },

  searchPerson: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 10,
    borderRadius: 12,
    transition: "background .18s ease",
  },

  searchPersonInfo: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    minWidth: 0,
    flex: 1,
  },

  searchAvatar: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  searchAvatarFallback: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    flexShrink: 0,
    background:
      "color-mix(in srgb, var(--primary) 12%, var(--surface))",
    color: "var(--primary)",
    fontWeight: 700,
  },

  searchName: {
    display: "block",
    fontSize: 13,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  searchSkill: {
    display: "block",
    marginTop: 2,
    color: "var(--muted)",
    fontSize: 11.5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  searchConnect: {
    border: 0,
    borderRadius: 9,
    padding: "7px 11px",
    background:
      "color-mix(in srgb, var(--primary) 10%, var(--surface))",
    color: "var(--primary)",
    fontSize: 11.5,
    cursor: "pointer",
    flexShrink: 0,
  },

  searchState: {
    padding: 20,
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 13,
  },

  headerActions: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    flexShrink: 0,
  },

  iconButton: {
    position: "relative",
    width: 38,
    height: 38,
    display: "grid",
    placeItems: "center",
    border: 0,
    borderRadius: 11,
    background: "transparent",
    color: "var(--muted)",
    cursor: "pointer",
    transition:
      "background .2s ease, color .2s ease, transform .2s ease",
  },

  notificationBadge: {
    position: "absolute",
    top: 2,
    right: 1,
    minWidth: 15,
    height: 15,
    padding: "0 4px",
    display: "grid",
    placeItems: "center",
    borderRadius: 20,
    background: "var(--primary)",
    color: "#fff",
    fontSize: 8,
    fontWeight: 700,
  },

  profileWrapper: {
    position: "relative",
  },

  profileButton: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    padding: 4,
    border: 0,
    borderRadius: 13,
    background: "transparent",
    color: "var(--text)",
    cursor: "pointer",
    transition: "background .2s ease",
  },

  profileAvatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow:
      "0 5px 15px rgba(45,25,90,.12)",
  },

  profileFallback: {
    width: 36,
    height: 36,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    background: "var(--primary)",
    color: "#fff",
    fontSize: 13,
    fontWeight: 700,
  },

  profileName: {
    fontSize: 12.5,
    fontWeight: 650,
  },

  profileMenu: {
    position: "absolute",
    top: 49,
    right: 0,
    width: 170,
    padding: 7,
    border: "1px solid var(--border)",
    borderRadius: 15,
    background: "var(--surface)",
    boxShadow:
      "0 18px 45px rgba(35,20,70,.14)",
  },

  menuItem: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "10px 11px",
    border: 0,
    borderRadius: 10,
    background: "transparent",
    color: "var(--text)",
    textAlign: "left",
    cursor: "pointer",
  },

  sidebar: {
    position: "fixed",
    zIndex: 110,
    display: "flex",
    flexDirection: "column",
    padding: "20px 12px 14px",
    border: "1px solid var(--border)",
    borderRadius: 20,
    background: "var(--surface)",
    boxShadow:
      "0 5px 22px rgba(35,20,70,.06)",
  },

  brand: {
    height: 40,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "0 5px",
    marginBottom: 28,
  },

  brandIcon: {
    width: 31,
    height: 31,
    objectFit: "contain",
    flexShrink: 0,
  },

  brandText: {
    fontSize: 19,
    fontWeight: 750,
    letterSpacing: "-.045em",
    color: "var(--text)",
  },

  navigation: {
    display: "grid",
    gap: 5,
  },

  navLink: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    minHeight: 44,
    borderRadius: 13,
    textDecoration: "none",
    transition:
      "background .2s ease, color .2s ease, transform .2s ease",
  },

  navLabel: {
    fontSize: 13,
    fontWeight: 560,
  },

  settingsButton: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    gap: 12,
    minHeight: 44,
    border: 0,
    borderRadius: 13,
    background: "transparent",
    color: "var(--muted)",
    cursor: "pointer",
    transition:
      "background .2s ease, color .2s ease, transform .2s ease",
  },

  content: {
    minHeight: "100vh",
    transition: "margin .2s ease",
  },

  mobileNavigation: {
    position: "fixed",
    left: 10,
    right: 10,
    bottom: 10,
    zIndex: 120,
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: 3,
    padding: 7,
    border: "1px solid var(--border)",
    borderRadius: 18,
    background: "var(--surface)",
    boxShadow:
      "0 14px 40px rgba(35,20,70,.14)",
  },

  mobileNavLink: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 3,
    padding: "7px 3px",
    borderRadius: 12,
    textDecoration: "none",
    fontSize: 9,
    fontWeight: 600,
    transition:
      "background .18s ease, color .18s ease",
  },
};