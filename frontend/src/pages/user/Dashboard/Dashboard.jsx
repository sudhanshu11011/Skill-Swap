import {
  ArrowRight,
  Check,
  Clock3,
  Sparkles,
  UserPlus,
  Users,
} from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import useConnection from "../../../hooks/useConnection";
import useResponsive from "../../../hooks/useResponsive";
import useUser from "../../../hooks/useUser";
import UserCard from "../../../components/user/UserCard";

export default function Dashboard() {
  const { userQuery } = useAuthContext();
  const { recommended } = useUser();

  const {
    friends,
    requests,
    outgoing,
    sendRequest,
  } = useConnection();

  const {
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile,
  } = useResponsive();

  const user = userQuery.data?.data?.user;

  const users = recommended.data?.data || [];
  const friendList = friends.data?.data || [];

  const incoming =
    requests.data?.data?.incomingRequests || [];

  const sent = outgoing.data?.data || [];

  const firstName =
    user?.fullName?.split(" ")[0] || "there";

  const getStatus = (personId) => {
    if (
      friendList.some(
        (friend) => friend._id === personId
      )
    ) {
      return "connected";
    }

    if (
      sent.some(
        (request) =>
          request.recipient?._id === personId ||
          request.recipient === personId
      )
    ) {
      return "pending";
    }

    return "connect";
  };

  const stats = [
    {
      label: "Connections",
      value: friendList.length,
      icon: Users,
    },
    {
      label: "Requests",
      value: incoming.length,
      icon: UserPlus,
    },
    {
      label: "Sent",
      value: sent.length,
      icon: Clock3,
    },
    {
      label: "Discover",
      value: users.length,
      icon: Sparkles,
    },
  ];

  const horizontalPadding = isSmallMobile
    ? 12
    : isMobile
      ? 18
      : isTablet
        ? 24
        : 28;

  return (
    <main
      style={{
        minHeight: "calc(100vh - 96px)",
        padding: `8px ${horizontalPadding}px 24px`,
        background: "var(--bg)",
      }}
    >
      <div style={styles.container}>
        {/* Welcome */}
        <section style={styles.welcome}>
          <div>
            <div style={styles.welcomeLabel}>
              YOUR DASHBOARD
            </div>

            <h1
              style={{
                ...styles.heading,
                fontSize: isSmallMobile
                  ? 24
                  : isMobile
                    ? 28
                    : 31,
              }}
            >
              Welcome back, {firstName}
            </h1>

            <p style={styles.subtitle}>
              Here's what's happening in your skill network.
            </p>
          </div>

          <div style={styles.avatarWrapper}>
            {user?.profilePic ? (
              <img
                src={user.profilePic}
                alt=""
                style={styles.welcomeAvatar}
              />
            ) : (
              <div style={styles.welcomeFallback}>
                {user?.fullName
                  ?.charAt(0)
                  ?.toUpperCase() || "U"}
              </div>
            )}
          </div>
        </section>

        {/* Statistics */}
        <section
          style={{
            ...styles.statsGrid,
            gridTemplateColumns: isMobile
              ? "repeat(2,minmax(0,1fr))"
              : "repeat(4,minmax(0,1fr))",
          }}
        >
          {stats.map(
            ({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="dashboard-stat"
                style={styles.statCard}
              >
                <div style={styles.statTop}>
                  <div style={styles.statIcon}>
                    <Icon size={18} />
                  </div>

                  <ArrowRight
                    size={16}
                    className="stat-arrow"
                    style={styles.statArrow}
                  />
                </div>

                <strong style={styles.statValue}>
                  {value}
                </strong>

                <span style={styles.statLabel}>
                  {label}
                </span>
              </div>
            )
          )}
        </section>

        {/* Main dashboard area */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              isDesktop && !isTablet
                ? "minmax(0,1fr) 305px"
                : "1fr",
            gap: 16,
          }}
        >
          {/* Discover */}
          <section
            className="dashboard-container"
            style={styles.mainCard}
          >
            <div style={styles.cardHeader}>
              <div>
                <span style={styles.sectionLabel}>
                  DISCOVER
                </span>

                <h2 style={styles.cardTitle}>
                  People you may know
                </h2>

                <p style={styles.cardDescription}>
                  Find people who can teach you something
                  new or learn from your skills.
                </p>
              </div>

              <button
                type="button"
                style={styles.viewButton}
              >
                View all
                <ArrowRight size={15} />
              </button>
            </div>

            {recommended.isLoading ? (
              <div style={styles.loading}>
                Loading people...
              </div>
            ) : users.length ? (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    isDesktop && !isTablet
                      ? "repeat(3,minmax(0,1fr))"
                      : isMobile
                        ? "1fr"
                        : "repeat(2,minmax(0,1fr))",
                  gap: 12,
                }}
              >
                {users.slice(0, 6).map((person) => (
                  <UserCard
                    key={person._id}
                    person={person}
                    status={getStatus(person._id)}
                    onConnect={() =>
                      sendRequest.mutate(person._id)
                    }
                    isPending={
                      sendRequest.isPending &&
                      sendRequest.variables === person._id
                    }
                  />
                ))}
              </div>
            ) : (
              <div style={styles.empty}>
                <div style={styles.emptyIcon}>
                  <Users size={22} />
                </div>

                <strong>
                  No recommendations yet
                </strong>

                <p>
                  New people matching your skills will
                  appear here.
                </p>
              </div>
            )}
          </section>

          {/* Right side */}
          <aside
            style={{
              display: "grid",
              gridTemplateColumns: isTablet
                ? "repeat(2,minmax(0,1fr))"
                : "1fr",
              gap: 16,
              alignContent: "start",
            }}
          >
            {/* Skills */}
            <section
              className="dashboard-container"
              style={styles.sideCard}
            >
              <div style={styles.sideHeading}>
                <div style={styles.sideIcon}>
                  <Sparkles size={17} />
                </div>

                <div>
                  <span style={styles.sideLabel}>
                    YOUR SKILLS
                  </span>

                  <h3 style={styles.sideTitle}>
                    Skill exchange
                  </h3>
                </div>
              </div>

              <div style={styles.skillBlock}>
                <span style={styles.skillLabel}>
                  I CAN TEACH
                </span>

                <div style={styles.skillValue}>
                  {user?.skillYouHave ||
                    "No skill added yet"}
                </div>
              </div>

              <div style={styles.skillBlock}>
                <span style={styles.skillLabel}>
                  I WANT TO LEARN
                </span>

                <div style={styles.skillValue}>
                  {user?.skillYouWant ||
                    "No skill added yet"}
                </div>
              </div>
            </section>

            {/* Activity */}
            <section
              className="dashboard-container"
              style={styles.sideCard}
            >
              <div style={styles.sideHeading}>
                <div style={styles.sideIcon}>
                  <Clock3 size={17} />
                </div>

                <div>
                  <span style={styles.sideLabel}>
                    OVERVIEW
                  </span>

                  <h3 style={styles.sideTitle}>
                    Your activity
                  </h3>
                </div>
              </div>

              <ActivityRow
                icon={Check}
                text={`${friendList.length} connection${
                  friendList.length !== 1
                    ? "s"
                    : ""
                }`}
              />

              <ActivityRow
                icon={UserPlus}
                text={`${incoming.length} pending request${
                  incoming.length !== 1
                    ? "s"
                    : ""
                }`}
              />

              <ActivityRow
                icon={Clock3}
                text={`${sent.length} outgoing request${
                  sent.length !== 1
                    ? "s"
                    : ""
                }`}
              />
            </section>
          </aside>
        </section>

        {/* Profile */}
        <section
          className="dashboard-container"
          style={styles.profileStrip}
        >
          <div style={styles.profileLeft}>
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

            <div style={{ minWidth: 0 }}>
              <span style={styles.profileLabel}>
                YOUR PROFILE
              </span>

              <strong style={styles.profileName}>
                {user?.fullName || "User"}
              </strong>

              <p style={styles.profileBio}>
                {user?.bio ||
                  "Add a short bio so people can know more about you."}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {}}
            style={styles.profileAction}
          >
            View profile
            <ArrowRight size={15} />
          </button>
        </section>
      </div>

      <style>{`
        .dashboard-container,
        .dashboard-stat {
          border: 1px solid var(--border);
          box-shadow:
            0 5px 20px rgba(35, 20, 70, .045);
          transition:
            transform .2s ease,
            box-shadow .2s ease,
            border-color .2s ease;
        }

        .dashboard-container:hover,
        .dashboard-stat:hover {
          border-color:
            color-mix(
              in srgb,
              var(--primary) 18%,
              var(--border)
            );
          box-shadow:
            0 10px 28px rgba(35, 20, 70, .075);
        }

        .dashboard-stat:hover {
          transform: translateY(-3px);
        }

        .dashboard-stat:hover .stat-arrow {
          transform: translateX(3px);
        }

        .stat-arrow {
          transition: transform .2s ease;
        }
      `}</style>
    </main>
  );
}

function ActivityRow({ icon: Icon, text }) {
  return (
    <div style={styles.activityRow}>
      <div style={styles.activityIcon}>
        <Icon size={14} />
      </div>

      <span>{text}</span>
    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    maxWidth: 1320,
    margin: "0 auto",
  },

  welcome: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
    padding: "4px 2px",
  },

  welcomeLabel: {
    color: "var(--primary)",
    fontSize: 9.5,
    fontWeight: 750,
    letterSpacing: ".09em",
    marginBottom: 5,
  },

  heading: {
    margin: 0,
    lineHeight: 1.15,
    letterSpacing: "-.035em",
  },

  subtitle: {
    margin: "6px 0 0",
    color: "var(--muted)",
    fontSize: 13,
  },

  avatarWrapper: {
    flexShrink: 0,
  },

  welcomeAvatar: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow:
      "0 7px 18px rgba(45,25,90,.11)",
  },

  welcomeFallback: {
    width: 46,
    height: 46,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    background: "var(--primary)",
    color: "#fff",
    fontWeight: 700,
  },

  statsGrid: {
    display: "grid",
    gap: 12,
    marginBottom: 16,
  },

  statCard: {
    minWidth: 0,
    padding: "14px 15px",
    borderRadius: 16,
    background: "var(--surface)",
    cursor: "default",
  },

  statTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statIcon: {
    width: 35,
    height: 35,
    display: "grid",
    placeItems: "center",
    borderRadius: 10,
    background:
      "color-mix(in srgb, var(--primary) 9%, var(--surface))",
    color: "var(--primary)",
  },

  statArrow: {
    color: "var(--muted)",
  },

  statValue: {
    display: "block",
    marginTop: 12,
    fontSize: 23,
    lineHeight: 1,
    letterSpacing: "-.03em",
  },

  statLabel: {
    display: "block",
    marginTop: 5,
    color: "var(--muted)",
    fontSize: 11,
  },

  mainCard: {
    minWidth: 0,
    padding: 19,
    borderRadius: 18,
    background: "var(--surface)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 16,
  },

  sectionLabel: {
    color: "var(--primary)",
    fontSize: 9,
    fontWeight: 750,
    letterSpacing: ".09em",
  },

  cardTitle: {
    margin: "4px 0 0",
    fontSize: 18,
    letterSpacing: "-.02em",
  },

  cardDescription: {
    margin: "5px 0 0",
    color: "var(--muted)",
    fontSize: 12,
    lineHeight: 1.5,
  },

  viewButton: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "7px 9px",
    border: 0,
    borderRadius: 9,
    background:
      "color-mix(in srgb, var(--primary) 7%, var(--surface))",
    color: "var(--primary)",
    fontSize: 11.5,
    fontWeight: 650,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  sideCard: {
    padding: 17,
    borderRadius: 18,
    background: "var(--surface)",
  },

  sideHeading: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    marginBottom: 14,
  },

  sideIcon: {
    width: 34,
    height: 34,
    display: "grid",
    placeItems: "center",
    borderRadius: 10,
    background:
      "color-mix(in srgb, var(--primary) 9%, var(--surface))",
    color: "var(--primary)",
    flexShrink: 0,
  },

  sideLabel: {
    display: "block",
    color: "var(--primary)",
    fontSize: 8.5,
    fontWeight: 750,
    letterSpacing: ".08em",
  },

  sideTitle: {
    margin: "3px 0 0",
    fontSize: 14,
  },

  skillBlock: {
    padding: "10px 0",
    borderTop:
      "1px solid color-mix(in srgb, var(--border) 65%, transparent)",
  },

  skillLabel: {
    display: "block",
    color: "var(--muted)",
    fontSize: 9,
    fontWeight: 650,
    letterSpacing: ".06em",
  },

  skillValue: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 650,
    lineHeight: 1.4,
  },

  activityRow: {
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "8px 0",
    color: "var(--muted)",
    fontSize: 12,
  },

  activityIcon: {
    width: 28,
    height: 28,
    display: "grid",
    placeItems: "center",
    borderRadius: 9,
    background:
      "color-mix(in srgb, var(--primary) 8%, var(--surface))",
    color: "var(--primary)",
    flexShrink: 0,
  },

  empty: {
    minHeight: 160,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "var(--muted)",
    fontSize: 12.5,
  },

  emptyIcon: {
    width: 43,
    height: 43,
    display: "grid",
    placeItems: "center",
    marginBottom: 9,
    borderRadius: 13,
    background:
      "color-mix(in srgb, var(--primary) 9%, var(--surface))",
    color: "var(--primary)",
  },

  profileStrip: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    marginTop: 16,
    padding: "13px 16px",
    borderRadius: 17,
    background:
      "color-mix(in srgb, var(--primary) 4%, var(--surface))",
  },

  profileLeft: {
    display: "flex",
    alignItems: "center",
    gap: 11,
    minWidth: 0,
  },

  profileAvatar: {
    width: 42,
    height: 42,
    borderRadius: "50%",
    objectFit: "cover",
    flexShrink: 0,
  },

  profileFallback: {
    width: 42,
    height: 42,
    display: "grid",
    placeItems: "center",
    borderRadius: "50%",
    background: "var(--primary)",
    color: "#fff",
    fontWeight: 700,
    flexShrink: 0,
  },

  profileLabel: {
    display: "block",
    color: "var(--primary)",
    fontSize: 8.5,
    fontWeight: 750,
    letterSpacing: ".08em",
  },

  profileName: {
    display: "block",
    marginTop: 2,
    fontSize: 13,
  },

  profileBio: {
    margin: "2px 0 0",
    color: "var(--muted)",
    fontSize: 10.5,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    maxWidth: 650,
  },

  profileAction: {
    display: "flex",
    alignItems: "center",
    gap: 5,
    padding: "8px 10px",
    border: "1px solid var(--border)",
    borderRadius: 9,
    background:
      "color-mix(in srgb, var(--primary) 7%, var(--surface))",
    color: "var(--primary)",
    fontSize: 11,
    fontWeight: 650,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  loading: {
    minHeight: 160,
    display: "grid",
    placeItems: "center",
    color: "var(--muted)",
    fontSize: 13,
  },
};