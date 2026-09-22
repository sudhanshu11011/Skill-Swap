const Button = ({
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    loading = false,
    onClick,
    style = {},
}) => {
    const variants = {
        primary: {
            background: "#111827",
            color: "#ffffff",
            border: "1px solid #111827",
        },

        secondary: {
            background: "#ffffff",
            color: "#111827",
            border: "1px solid #d1d5db",
        },

        danger: {
            background: "#dc2626",
            color: "#ffffff",
            border: "1px solid #dc2626",
        },
    };

    const baseStyle = {
        width: "100%",
        minHeight: "46px",
        padding: "12px 18px",
        borderRadius: "10px",
        fontSize: "15px",
        fontWeight: "600",
        fontFamily: "inherit",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        transition:
            "transform 180ms ease, opacity 180ms ease, box-shadow 180ms ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        opacity: disabled || loading ? 0.6 : 1,
        boxSizing: "border-box",
        ...variants[variant],
        ...style,
    };

    const handleMouseEnter = (event) => {
        if (disabled || loading) return;

        event.currentTarget.style.transform = "translateY(-1px)";
        event.currentTarget.style.boxShadow =
            "0 6px 18px rgba(0, 0, 0, 0.10)";
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.transform = "translateY(0)";
        event.currentTarget.style.boxShadow = "none";
    };

    return (
        <button
            type={type}
            disabled={disabled || loading}
            onClick={onClick}
            style={baseStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {loading ? "Please wait..." : children}
        </button>
    );
};

export default Button;