import { useLocation, useNavigate } from "react-router-dom";

const MobileNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const items = [
        {
            label: "Home",
            path: "/dashboard",
        },
        {
            label: "Discover",
            path: "/discover",
        },
        {
            label: "Connections",
            path: "/connections",
        },
        {
            label: "Chat",
            path: "/chat",
        },
    ];

    return (
        <nav
            aria-label="Mobile navigation"
            style={{
                position: "fixed",
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 200,
                display: "none",
                alignItems: "stretch",
                borderTop: "1px solid #e5e7eb",
                background: "rgba(255, 255, 255, 0.97)",
                backdropFilter: "blur(12px)",
                boxSizing: "border-box",
            }}
        >
            {items.map((item) => {
                const active =
                    location.pathname === item.path;

                return (
                    <button
                        key={item.path}
                        type="button"
                        onClick={() => navigate(item.path)}
                        style={{
                            flex: 1,
                            minHeight: "58px",
                            border: "none",
                            background: "transparent",
                            color: active
                                ? "#111827"
                                : "#6b7280",
                            fontFamily: "inherit",
                            fontSize: "12px",
                            fontWeight: active ? "700" : "600",
                            cursor: "pointer",
                            transition:
                                "color 180ms ease, transform 180ms ease",
                        }}
                        onMouseDown={(event) => {
                            event.currentTarget.style.transform =
                                "scale(0.96)";
                        }}
                        onMouseUp={(event) => {
                            event.currentTarget.style.transform =
                                "scale(1)";
                        }}
                    >
                        {item.label}
                    </button>
                );
            })}

            <style>
                {`
                    @media (max-width: 760px) {
                        nav[aria-label="Mobile navigation"] {
                            display: flex !important;
                        }
                    }
                `}
            </style>
        </nav>
    );
};

export default MobileNav;