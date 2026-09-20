export default function UserCard({ person, onConnect, isPending }) {
  return (
    <div
      style={{
        border: "1px solid #eeeaf7",
        borderRadius: 12,
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          minWidth: 0,
          flex: 1,
        }}
      >
        {person.profilePic ? (
          <img
            src={person.profilePic}
            alt=""
            style={{
              width: 46,
              height: 46,
              flexShrink: 0,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 46,
              height: 46,
              flexShrink: 0,
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

        <div style={{ minWidth: 0 }}>
          <strong
            style={{
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {person.fullName}
          </strong>

          <p
            style={{
              margin: "4px 0 0",
              color: "#777",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {person.skillYouHave || "Skill information unavailable"}
          </p>
        </div>
      </div>

      <button
        onClick={onConnect}
        disabled={isPending}
        style={{
          border: 0,
          background: "#6d28d9",
          color: "#fff",
          borderRadius: 8,
          padding: "10px 14px",
          minHeight: 40,
          cursor: isPending ? "not-allowed" : "pointer",
          flexShrink: 0,
        }}
      >
        {isPending ? "Sending..." : "Connect"}
      </button>
    </div>
  );
}