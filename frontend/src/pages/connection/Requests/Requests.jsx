import { UserPlus } from "lucide-react";
import useUser from "../../../hooks/useUser";
import useResponsive from "../../../hooks/useResponsive";

export default function Requests() {
  const { requests, acceptRequest } = useUser();
  const { isMobile, isSmallMobile } = useResponsive();
  const list = requests.data?.data?.incomingRequests || [];
  const padding = isSmallMobile ? 16 : isMobile ? 20 : 32;

  return (
    <main
      style={{
        padding,
        maxWidth: 1000,
        margin: "auto",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div style={{ marginBottom: 28 }}>
        <p style={{ color: "#6d28d9", fontWeight: 600, margin: 0 }}>
          Requests
        </p>

        <h1
          style={{
            margin: "6px 0",
            fontSize: isMobile ? 26 : 30,
            lineHeight: 1.2,
          }}
        >
          Connection Requests
        </h1>

        <p style={{ color: "#777", lineHeight: 1.5 }}>
          Manage people who want to connect with you.
        </p>
      </div>

      {requests.isLoading ? (
        <p>Loading...</p>
      ) : list.length ? (
        <div style={{ display: "grid", gap: 14 }}>
          {list.map((request) => {
            const person = request.sender;

            return (
              <div
                key={request._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                  padding: isMobile ? 14 : 18,
                  background: "#fff",
                  border: "1px solid #e8e5f2",
                  borderRadius: 14,
                  flexWrap: isMobile ? "wrap" : "nowrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  {person?.profilePic ? (
                    <img
                      src={person.profilePic}
                      alt=""
                      style={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: "#ede9fe",
                        color: "#6d28d9",
                        display: "grid",
                        placeItems: "center",
                        fontWeight: 700,
                      }}
                    >
                      {person?.fullName?.charAt(0)?.toUpperCase()}
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
                      {person?.fullName}
                    </strong>

                    {person?.skillYouHave && (
                      <p
                        style={{
                          margin: "5px 0 0",
                          color: "#777",
                          overflowWrap: "anywhere",
                          lineHeight: 1.4,
                        }}
                      >
                        Teaches: {person.skillYouHave}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => acceptRequest.mutate(request._id)}
                  disabled={acceptRequest.isPending}
                  style={{
                    border: 0,
                    borderRadius: 8,
                    padding: "10px 16px",
                    minHeight: 40,
                    background: "#6d28d9",
                    color: "#fff",
                    cursor: acceptRequest.isPending
                      ? "not-allowed"
                      : "pointer",
                    flexShrink: 0,
                  }}
                >
                  {acceptRequest.isPending ? "Accepting..." : "Accept"}
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            padding: isSmallMobile ? 35 : 50,
            textAlign: "center",
            background: "#fff",
            border: "1px solid #e8e5f2",
            borderRadius: 14,
          }}
        >
          <UserPlus size={36} color="#6d28d9" />

          <h3>No pending requests</h3>

          <p style={{ color: "#777", lineHeight: 1.5 }}>
            New connection requests will appear here.
          </p>
        </div>
      )}
    </main>
  );
}