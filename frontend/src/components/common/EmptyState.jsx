const EmptyState = ({
    title = "Nothing here yet",
    message = "",
    actionLabel = "",
    onAction,
}) => {
    return (
        <div
            style={{
                width: "100%",
                padding: "44px 24px",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                background: "#ffffff",
                textAlign: "center",
                boxSizing: "border-box",
                animation: "skillswap-empty-enter 300ms ease-out",
            }}
        >
            <div
                style={{
                    width: "52px",
                    height: "52px",
                    margin: "0 auto 16px",
                    borderRadius: "50%",
                    background: "#f3f4f6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#374151",
                    fontSize: "22px",
                    fontWeight: "700",
                }}
            >
                —
            </div>

            <h3
                style={{
                    margin: "0 0 8px",
                    color: "#111827",
                    fontSize: "18px",
                    lineHeight: "1.4",
                }}
            >
                {title}
            </h3>

            {message && (
                <p
                    style={{
                        maxWidth: "500px",
                        margin: "0 auto",
                        color: "#6b7280",
                        fontSize: "14px",
                        lineHeight: "1.6",
                    }}
                >
                    {message}
                </p>
            )}

            {actionLabel && onAction && (
                <button
                    type="button"
                    onClick={onAction}
                    style={{
                        marginTop: "20px",
                        minHeight: "42px",
                        padding: "10px 18px",
                        border: "1px solid #111827",
                        borderRadius: "9px",
                        background: "#111827",
                        color: "#ffffff",
                        fontFamily: "inherit",
                        fontSize: "13px",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    {actionLabel}
                </button>
            )}

            <style>
                {`
                    @keyframes skillswap-empty-enter {
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
                        div {
                            padding: 34px 18px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default EmptyState;