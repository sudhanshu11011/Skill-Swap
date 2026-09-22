const OutgoingRequestCard = ({ request }) => {
    const user = request?.recipient;

    const name =
        user?.fullName ||
        "SkillSwap User";

    const skills = Array.isArray(user?.skillYouHave)
        ? user.skillYouHave
        : [];

    return (
        <article
            style={{
                width: "100%",
                padding: "20px",
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                background: "#ffffff",
                boxSizing: "border-box",
                animation:
                    "skillswap-outgoing-enter 300ms ease-out",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                }}
            >
                <div
                    style={{
                        width: "46px",
                        height: "46px",
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: "#f3f4f6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#374151",
                        fontSize: "17px",
                        fontWeight: "700",
                    }}
                >
                    {name.charAt(0).toUpperCase()}
                </div>

                <div style={{ minWidth: 0 }}>
                    <h3
                        style={{
                            margin: "0 0 5px",
                            color: "#111827",
                            fontSize: "17px",
                            lineHeight: "1.4",
                        }}
                    >
                        {name}
                    </h3>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "13px",
                        }}
                    >
                        Connection request pending
                    </p>
                </div>
            </div>

            {skills.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "7px",
                        marginTop: "16px",
                    }}
                >
                    {skills.map((skill, index) => (
                        <span
                            key={`${skill}-${index}`}
                            style={{
                                padding: "5px 9px",
                                borderRadius: "999px",
                                background: "#f3f4f6",
                                color: "#374151",
                                fontSize: "11px",
                                fontWeight: "600",
                            }}
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            )}

            <div
                style={{
                    marginTop: "16px",
                    paddingTop: "14px",
                    borderTop: "1px solid #f0f0f0",
                    color: "#6b7280",
                    fontSize: "12px",
                    fontWeight: "600",
                }}
            >
                Request Sent
            </div>

            <style>
                {`
                    @keyframes skillswap-outgoing-enter {
                        from {
                            opacity: 0;
                            transform: translateY(8px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 480px) {
                        article {
                            padding: 16px !important;
                        }
                    }
                `}
            </style>
        </article>
    );
};

export default OutgoingRequestCard;