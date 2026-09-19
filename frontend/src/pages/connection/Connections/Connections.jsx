import { Users } from "lucide-react";
import useUser from "../../../hooks/useUser";

export default function Connections() {
  const { friends } = useUser();
  const list = friends.data?.data || [];

  return (
    <main style={{ padding: 32, maxWidth: 1000, margin: "auto" }}>
      <div style={{ marginBottom: 28 }}>
        <p style={{ color: "#6d28d9", fontWeight: 600 }}>Connections</p>
        <h1 style={{ margin: "6px 0" }}>Your Connections</h1>
        <p style={{ color: "#777" }}>
          People you have connected with on SkillSwap.
        </p>
      </div>

      {friends.isLoading ? (
        <p>Loading...</p>
      ) : list.length ? (
        <div style={{ display: "grid", gap: 14 }}>
          {list.map((person) => (
            <div
              key={person._id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                padding: 18,
                border: "1px solid #e8e5f2",
                borderRadius: 14,
                background: "#fff",
              }}
            >
              {person.profilePic ? (
                <img
                  src={person.profilePic}
                  alt=""
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 52,
                    height: 52,
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
                {person.skillYouWant && (
                  <p style={{ margin: "5px 0 0", color: "#777" }}>
                    Wants to learn: {person.skillYouWant}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            padding: 50,
            textAlign: "center",
            background: "#fff",
            border: "1px solid #e8e5f2",
            borderRadius: 14,
          }}
        >
          <Users size={36} color="#6d28d9" />
          <h3>No connections yet</h3>
          <p style={{ color: "#777" }}>
            Your accepted connections will appear here.
          </p>
        </div>
      )}
    </main>
  );
}