import { Users, UserPlus, Send } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import useUser from "../../../hooks/useUser";
import useResponsive from "../../../hooks/useResponsive";
import UserCard from "../../../components/user/UserCard";

const box = {
  background: "#fff",
  border: "1px solid #e8e5f2",
  borderRadius: 16,
};

export default function Dashboard() {
  const { userQuery } = useAuthContext();
  const { recommended, friends, requests, outgoing, sendRequest } = useUser();
  const { isTablet, isMobile, isSmallMobile } = useResponsive();

  const user = userQuery.data?.data?.user;
  const users = recommended.data?.data || [];
  const friendList = friends.data?.data || [];
  const incoming = requests.data?.data?.incomingRequests || [];
  const sent = outgoing.data?.data || [];

  const pad = isSmallMobile ? 14 : isMobile ? 18 : isTablet ? 24 : "5%";
  const stats = isMobile ? "1fr" : isTablet ? "repeat(2,1fr)" : "repeat(4,1fr)";
  const content = isMobile ? "1fr" : isTablet ? "1fr" : "1fr 320px";
  const cardPad = isSmallMobile ? 14 : isMobile ? 18 : 24;

  const statData = [
    [Users, "Recommended", users.length],
    [Users, "Friends", friendList.length],
    [UserPlus, "Requests", incoming.length],
    [Send, "Sent", sent.length],
  ];

  return (
    <div style={{ minHeight: "100%", background: "#f7f6fc", color: "#15132a" }}>
      <main
        style={{
          maxWidth: 1250,
          margin: "auto",
          padding: `34px ${pad}`,
          boxSizing: "border-box",
        }}
      >
        <section style={{ marginBottom: 28 }}>
          <p style={{ color: "#6d28d9", margin: 0, fontWeight: 600 }}>
            Dashboard
          </p>

          <h1
            style={{
              margin: "6px 0",
              fontSize: isMobile ? 26 : 30,
              lineHeight: 1.2,
            }}
          >
            Welcome back, {user?.fullName?.split(" ")[0] || "User"}
          </h1>

          <p style={{ color: "#777", margin: 0 }}>
            Discover people and exchange skills.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: stats,
            gap: 16,
            marginBottom: 28,
          }}
        >
          {statData.map(([Icon, title, count]) => (
            <div key={title} style={{ ...box, padding: 20 }}>
              <Icon size={21} color="#6d28d9" />
              <p style={{ color: "#777", margin: "14px 0 5px" }}>{title}</p>
              <strong style={{ fontSize: 25 }}>{count}</strong>
            </div>
          ))}
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: content,
            gap: 22,
          }}
        >
          <div style={{ ...box, padding: cardPad, minWidth: 0 }}>
            <h2 style={{ margin: "0 0 5px", fontSize: isMobile ? 20 : 22 }}>
              People You May Know
            </h2>

            <p style={{ color: "#777", marginTop: 0 }}>
              Connect with people who are available for skill exchange.
            </p>

            {recommended.isLoading ? (
              <p>Loading...</p>
            ) : users.length ? (
              <div style={{ display: "grid", gap: 12 }}>
                {users.map((person) => (
                  <UserCard
                    key={person._id}
                    person={person}
                    onConnect={() => sendRequest.mutate(person._id)}
                    isPending={sendRequest.isPending}
                  />
                ))}
              </div>
            ) : (
              <p style={{ color: "#777" }}>No recommended users available.</p>
            )}
          </div>

          <aside
            style={{
              display: "grid",
              gridTemplateColumns: isTablet ? "repeat(2,1fr)" : "1fr",
              gap: 16,
              alignContent: "start",
            }}
          >
            <div style={{ ...box, padding: cardPad }}>
              <h3 style={{ marginTop: 0 }}>Your Activity</h3>

              <p style={{ color: "#777" }}>
                {friendList.length} connection
                {friendList.length !== 1 ? "s" : ""}
              </p>

              <p style={{ color: "#777" }}>
                {incoming.length} pending request
                {incoming.length !== 1 ? "s" : ""}
              </p>

              <p style={{ color: "#777" }}>
                {sent.length} outgoing request
                {sent.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div style={{ ...box, padding: cardPad }}>
              <h3 style={{ marginTop: 0 }}>Your Profile</h3>

              <strong>{user?.fullName}</strong>

              <p
                style={{
                  color: "#777",
                  lineHeight: 1.6,
                  overflowWrap: "anywhere",
                }}
              >
                {user?.bio || "No bio added yet."}
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
