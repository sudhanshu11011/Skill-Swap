const SearchBar = ({
    value,
    onChange,
    onSearch,
    loading = false,
}) => {
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!loading) {
            onSearch();
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                alignItems: "stretch",
            }}
        >
            <input
                type="text"
                value={value}
                onChange={(event) =>
                    onChange(event.target.value)
                }
                placeholder="Search by name or skill..."
                disabled={loading}
                style={{
                    flex: 1,
                    minWidth: 0,
                    height: "46px",
                    padding: "0 14px",
                    border: "1px solid #d1d5db",
                    borderRadius: "10px",
                    outline: "none",
                    background: "#ffffff",
                    color: "#111827",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    boxSizing: "border-box",
                }}
            />

            <button
                type="submit"
                disabled={loading}
                style={{
                    minWidth: "92px",
                    height: "46px",
                    padding: "0 16px",
                    border: "none",
                    borderRadius: "10px",
                    background: "#111827",
                    color: "#ffffff",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    fontWeight: "600",
                    cursor: loading
                        ? "not-allowed"
                        : "pointer",
                    opacity: loading ? 0.65 : 1,
                    transition:
                        "transform 180ms ease, opacity 180ms ease",
                }}
            >
                {loading ? "Searching..." : "Search"}
            </button>

            <style>
                {`
                    @media (max-width: 520px) {
                        form {
                            flex-direction: column;
                        }

                        button {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </form>
    );
};

export default SearchBar;