import { UserRound, Users, UserPlus, Send } from "lucide-react";
import useUser from "../../../hooks/useUser";

const card = {
  border: "1px solid #e5e7eb",
  borderRadius: 14,
  padding: 20,
  background: "#fff",
};

export default function DashboardContent() {
  const { recommended, friends, requests, outgoing } = useUser();

  const users = recommended.data?.data || [];
  const friendList = friends.data?.data || [];
  const incoming = requests.data?.data?.incomingRequests || [];
  const sent = outgoing.data?.data || [];

  return (
    <section style={{ display: "grid", gap: 24 }}>
      <div>
        <h2 style={{ margin: 0 }}>Explore Skills</h2>
        <p style={{ color: "#6b7280" }}>
          Discover people based on their skills.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 16,
        }}
      >
        {[
          [UserRound, "Recommended", users.length],
          [Users, "Friends", friendList.length],
          [UserPlus, "Requests", incoming.length],
          [Send, "Sent", sent.length],
        ].map(([Icon, title, count]) => (
          <div key={title} style={card}>
            <Icon size={22} />
            <p style={{ margin: "14px 0 4px", color: "#6b7280" }}>{title}</p>
            <strong style={{ fontSize: 26 }}>{count}</strong>
          </div>
        ))}
      </div>

      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Recommended People</h3>

        {recommended.isLoading ? (
          <p>Loading...</p>
        ) : users.length ? (
          <div style={{ display: "grid", gap: 12 }}>
            {users.map((person) => (
              <div
                key={person._id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 14,
                  border: "1px solid #eee",
                  borderRadius: 10,
                }}
              >
                <div>
                  <strong>{person.fullName}</strong>
                  <p style={{ margin: "5px 0", color: "#6b7280" }}>
                    {person.skillYouHave}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#6b7280" }}>No recommended users available.</p>
        )}
      </div>
    </section>
  );
}