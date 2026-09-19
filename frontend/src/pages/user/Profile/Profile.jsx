import { Mail, BookOpen, Languages, UserRound } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";

export default function Profile() {
  const { userQuery } = useAuthContext();
  const user = userQuery.data?.data?.user;

  if (userQuery.isLoading) return <main style={{ padding: 32 }}>Loading...</main>;

  if (!user)
    return (
      <main style={{ padding: 32 }}>
        <h2>Profile unavailable</h2>
      </main>
    );

  return (
    <main style={{ padding: 32, maxWidth: 900, margin: "auto" }}>
      <section
        style={{
          background: "#fff",
          border: "1px solid #e8e5f2",
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 150,
            background: "#6d28d9",
          }}
        />

        <div style={{ padding: "0 28px 30px" }}>
          <div style={{ marginTop: -42, marginBottom: 20 }}>
            {user.profilePic ? (
              <img
                src={user.profilePic}
                alt=""
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #fff",
                }}
              />
            ) : (
              <div
                style={{
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  border: "4px solid #fff",
                  background: "#ede9fe",
                  color: "#6d28d9",
                  display: "grid",
                  placeItems: "center",
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                {user.fullName?.charAt(0)?.toUpperCase()}
              </div>
            )}
          </div>

          <h1 style={{ margin: 0 }}>{user.fullName}</h1>

          <p style={{ color: "#777", display: "flex", gap: 8 }}>
            <Mail size={17} />
            {user.email}
          </p>

          {user.bio && (
            <p style={{ lineHeight: 1.7, color: "#555" }}>{user.bio}</p>
          )}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 14,
              marginTop: 28,
            }}
          >
            <Info
              icon={<BookOpen size={19} />}
              title="Skill I Teach"
              value={user.skillYouHave}
            />

            <Info
              icon={<UserRound size={19} />}
              title="Skill I Want"
              value={user.skillYouWant}
            />

            <Info
              icon={<Languages size={19} />}
              title="Language"
              value={user.language}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon, title, value }) {
  return (
    <div
      style={{
        padding: 18,
        border: "1px solid #e8e5f2",
        borderRadius: 12,
      }}
    >
      <div style={{ color: "#6d28d9" }}>{icon}</div>
      <p style={{ color: "#777", margin: "10px 0 5px" }}>{title}</p>
      <strong>{value || "Not provided"}</strong>
    </div>
  );
}