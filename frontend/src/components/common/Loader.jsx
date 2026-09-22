import { useState } from "react";

const Input = ({
    label,
    name,
    type = "text",
    value = "",
    placeholder = "",
    onChange,
    error = "",
    disabled = false,
    required = false,
    autoComplete,
    style = {},
}) => {
    const [focused, setFocused] = useState(false);

    const inputStyle = {
        width: "100%",
        height: "46px",
        padding: "0 14px",
        borderRadius: "10px",
        border: `1px solid ${
            error ? "#dc2626" : focused ? "#111827" : "#d1d5db"
        }`,
        outline: "none",
        background: disabled ? "#f3f4f6" : "#ffffff",
        color: "#111827",
        fontSize: "15px",
        fontFamily: "inherit",
        boxSizing: "border-box",
        transition:
            "border-color 180ms ease, box-shadow 180ms ease, background 180ms ease",
        boxShadow: focused
            ? "0 0 0 3px rgba(17, 24, 39, 0.08)"
            : "none",
        ...style,
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "7px",
            }}
        >
            {label && (
                <label
                    htmlFor={name}
                    style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#374151",
                    }}
                >
                    {label}
                    {required && (
                        <span
                            style={{
                                color: "#dc2626",
                                marginLeft: "3px",
                            }}
                        >
                            *
                        </span>
                    )}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                required={required}
                autoComplete={autoComplete}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={inputStyle}
            />

            {error && (
                <span
                    style={{
                        color: "#dc2626",
                        fontSize: "13px",
                        lineHeight: "18px",
                    }}
                >
                    {error}
                </span>
            )}
        </div>
    );
};

export default Input;