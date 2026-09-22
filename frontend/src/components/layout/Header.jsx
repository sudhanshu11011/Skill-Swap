import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login", { replace: true });
        } catch {
            // AuthContext handles the error.
        }
    };

    const displayName =
        user?.fullName?.trim() || "SkillSwap User";

    return (
        <header
            style={{
                width: "100%",
                height: "68px",
                position: "sticky",
                top: 0,
                zIndex: 100,
                borderBottom: "1px solid #e5e7eb",
                background: "rgba(255, 255, 255, 0.96)",
                backdropFilter: "blur(12px)",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    height: "100%",
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    boxSizing: "border-box",
                }}
            >
                <button
                    type="button"
                    onClick={() => navigate("/dashboard")}
                    style={{
                        border: "none",
                        background: "transparent",
                        padding: 0,
                        color: "#111827",
                        fontFamily: "inherit",
                        fontSize: "20px",
                        fontWeight: "800",
                        cursor: "pointer",
                    }}
                >
                    SkillSwap
                </button>

                <nav
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <button
                        type="button"
                        onClick={() => navigate("/discover")}
                        style={navButtonStyle}
                    >
                        Discover
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/connections")}
                        style={navButtonStyle}
                    >
                        Connections
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/chat")}
                        style={navButtonStyle}
                    >
                        Chat
                    </button>
                </nav>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                    }}
                >
                    <span
                        style={{
                            color: "#374151",
                            fontSize: "14px",
                            fontWeight: "600",
                        }}
                    >
                        {displayName}
                    </span>

                    <button
                        type="button"
                        onClick={handleLogout}
                        style={{
                            minHeight: "38px",
                            padding: "8px 14px",
                            borderRadius: "9px",
                            border: "1px solid #d1d5db",
                            background: "#ffffff",
                            color: "#111827",
                            fontFamily: "inherit",
                            fontSize: "13px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition:
                                "transform 180ms ease, box-shadow 180ms ease",
                        }}
                        onMouseEnter={(event) => {
                            event.currentTarget.style.transform =
                                "translateY(-1px)";
                            event.currentTarget.style.boxShadow =
                                "0 5px 14px rgba(0, 0, 0, 0.08)";
                        }}
                        onMouseLeave={(event) => {
                            event.currentTarget.style.transform =
                                "translateY(0)";
                            event.currentTarget.style.boxShadow =
                                "none";
                        }}
                    >
                        Logout
                    </button>
                </div>
            </div>

            <style>
                {`
                    @media (max-width: 760px) {
                        header nav {
                            display: none !important;
                        }

                        header > div {
                            padding: 0 18px !important;
                        }

                        header span {
                            display: none !important;
                        }
                    }

                    @media (max-width: 420px) {
                        header {
                            height: 62px !important;
                        }

                        header > div {
                            padding: 0 14px !important;
                        }
                    }
                `}
            </style>
        </header>
    );
};

const navButtonStyle = {
    border: "none",
    background: "transparent",
    padding: "9px 11px",
    borderRadius: "8px",
    color: "#4b5563",
    fontFamily: "inherit",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
};

export default Header;