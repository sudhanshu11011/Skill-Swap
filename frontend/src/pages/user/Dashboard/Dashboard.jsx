import {
  Users,
  UserPlus,
  Send,
} from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import useUser from "../../../hooks/useUser";

const box = {
  background: "#fff",
  border: "1px solid #e8e5f2",
  borderRadius: 16,
};

export default function Dashboard() {
  const { userQuery } = useAuthContext();
  const { recommended, friends, requests, outgoing, sendRequest } = useUser();

  const user = userQuery.data?.data?.user;
  const users = recommended.data?.data || [];
  const friendList = friends.data?.data || [];
  const incoming = requests.data?.data?.incomingRequests || [];
  const sent = outgoing.data?.data || [];

  return (
    <div
      style={{ minHeight: "100vh", background: "#f7f6fc", color: "#15132a" }}
    >
      <main style={{ maxWidth: 1250, margin: "auto", padding: "34px 5%" }}>
        <section style={{ marginBottom: 28 }}>
          <p style={{ color: "#6d28d9", margin: 0, fontWeight: 600 }}>
            Dashboard
          </p>
          <h1 style={{ margin: "6px 0", fontSize: 30 }}>
            Welcome back, {user?.fullName?.split(" ")[0] || "User"}
          </h1>
          <p style={{ color: "#777", margin: 0 }}>
            Discover people and exchange skills.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {[
            [Users, "Recommended", users.length],
            [Users, "Friends", friendList.length],
            [UserPlus, "Requests", incoming.length],
            [Send, "Sent", sent.length],
          ].map(([Icon, title, count]) => (
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
            gridTemplateColumns: "1fr 320px",
            gap: 22,
          }}
        >
          <div style={{ ...box, padding: 24 }}>
            <h2 style={{ margin: "0 0 5px" }}>People You May Know</h2>
            <p style={{ color: "#777", marginTop: 0 }}>
              Connect with people who are available for skill exchange.
            </p>

            {recommended.isLoading ? (
              <p>Loading...</p>
            ) : users.length ? (
              <div style={{ display: "grid", gap: 12 }}>
                {users.map((person) => (
                  <div
                    key={person._id}
                    style={{
                      border: "1px solid #eeeaf7",
                      borderRadius: 12,
                      padding: 16,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{ display: "flex", gap: 12, alignItems: "center" }}
                    >
                      {person.profilePic ? (
                        <img
                          src={person.profilePic}
                          alt=""
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 46,
                            height: 46,
                            borderRadius: "50%",
                            background: "#ede9fe",
                            color: "#6d28d9",
                            display: "grid",
                            placeItems: "center",
                            fontWeight: 700,
                          }}
                        >
                          {person.fullName?.charAt(0)?.toUpperCase()}
                        </div>
                      )}

                      <div>
                        <strong>{person.fullName}</strong>
                        <p style={{ margin: "4px 0 0", color: "#777" }}>
                          {person.skillYouHave ||
                            "Skill information unavailable"}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => sendRequest.mutate(person._id)}
                      disabled={sendRequest.isPending}
                      style={{
                        border: 0,
                        background: "#6d28d9",
                        color: "#fff",
                        borderRadius: 8,
                        padding: "9px 14px",
                        cursor: "pointer",
                      }}
                    >
                      {sendRequest.isPending ? "Sending..." : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "#777" }}>No recommended users available.</p>
            )}
          </div>

          <aside style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <div style={{ ...box, padding: 22 }}>
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
                {sent.length} outgoing request{sent.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div style={{ ...box, padding: 22 }}>
              <h3 style={{ marginTop: 0 }}>Your Profile</h3>
              <strong>{user?.fullName}</strong>
              <p style={{ color: "#777", lineHeight: 1.6 }}>
                {user?.bio || "No bio added yet."}
              </p>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
