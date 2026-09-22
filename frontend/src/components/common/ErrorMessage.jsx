const ErrorMessage = ({
    message,
    onClose,
    style = {},
}) => {
    if (!message) {
        return null;
    }

    return (
        <div
            role="alert"
            style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #fecaca",
                background: "#fef2f2",
                color: "#b91c1c",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                boxSizing: "border-box",
                fontSize: "14px",
                lineHeight: "20px",
                animation: "skillswap-error-enter 220ms ease-out",
                ...style,
            }}
        >
            <span>{message}</span>

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close error message"
                    style={{
                        border: "none",
                        background: "transparent",
                        color: "#b91c1c",
                        cursor: "pointer",
                        fontSize: "18px",
                        lineHeight: "18px",
                        padding: "2px 4px",
                        flexShrink: 0,
                    }}
                >
                    ×
                </button>
            )}

            <style>
                {`
                    @keyframes skillswap-error-enter {
                        from {
                            opacity: 0;
                            transform: translateY(-5px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default ErrorMessage;