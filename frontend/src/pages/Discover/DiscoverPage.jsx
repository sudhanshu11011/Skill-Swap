import { useEffect, useMemo, useState } from "react";

import useMatching from "../../hooks/useMatching";
import useConnections from "../../hooks/useConnections";

import SearchBar from "../../components/matching/SearchBar";
import RecommendationList from "../../components/matching/RecommendationList";
import PageContainer from "../../components/common/PageContainer";

const DiscoverPage = () => {
    const {
        users,
        loading,
        error,
        getRecommendations,
        search,
        clearResults,
    } = useMatching();

    const {
        outgoingRequests,
        loadConnections,
        sendRequest,
    } = useConnections();

    const [searchValue, setSearchValue] = useState("");
    const [searchMode, setSearchMode] = useState(false);
    const [connectingId, setConnectingId] = useState("");

    useEffect(() => {
        getRecommendations();
        loadConnections();
    }, [getRecommendations, loadConnections]);

    const outgoingRequestIds = useMemo(
        () =>
            outgoingRequests
                .map(
                    (request) =>
                        request?.recipient?._id ||
                        request?.recipient?.id ||
                        request?.receiver?._id ||
                        request?.receiver?.id ||
                        request?.to?._id ||
                        request?.to?.id ||
                        request?.user?._id ||
                        request?.user?.id ||
                        ""
                )
                .filter(Boolean),
        [outgoingRequests]
    );

    const handleSearch = async () => {
        const value = searchValue.trim();

        if (!value) {
            setSearchMode(false);
            clearResults();
            await getRecommendations();
            return;
        }

        setSearchMode(true);
        await search(value);
    };

    const handleClearSearch = async () => {
        setSearchValue("");
        setSearchMode(false);
        clearResults();
        await getRecommendations();
    };

    const handleConnect = async (user) => {
        const userId = user?._id || user?.id;

        if (
            !userId ||
            outgoingRequestIds.includes(userId)
        ) {
            return;
        }

        try {
            setConnectingId(userId);
            await sendRequest(userId);
        } catch {
            // Error state is handled by useConnections.
        } finally {
            setConnectingId("");
        }
    };

    return (
        <PageContainer>
            <section
                style={{
                    width: "100%",
                    maxWidth: "1100px",
                    margin: "0 auto",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        marginBottom: "28px",
                        animation:
                            "skillswap-discover-enter 400ms ease-out",
                    }}
                >
                    <h1
                        style={{
                            margin: "0 0 8px",
                            color: "#111827",
                            fontSize: "clamp(26px, 4vw, 36px)",
                            lineHeight: "1.2",
                            fontWeight: "700",
                        }}
                    >
                        Discover
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "15px",
                            lineHeight: "1.6",
                        }}
                    >
                        Find people based on their skills,
                        interests, and learning goals.
                    </p>
                </div>

                <div
                    style={{
                        marginBottom: "28px",
                    }}
                >
                    <SearchBar
                        value={searchValue}
                        onChange={setSearchValue}
                        onSearch={handleSearch}
                        loading={loading}
                    />

                    {searchMode && (
                        <button
                            type="button"
                            onClick={handleClearSearch}
                            style={{
                                marginTop: "10px",
                                border: "none",
                                background: "transparent",
                                color: "#4b5563",
                                fontSize: "13px",
                                fontWeight: "600",
                                cursor: "pointer",
                                padding: "4px 0",
                            }}
                        >
                            Clear search
                        </button>
                    )}
                </div>

                <div
                    style={{
                        marginBottom: "16px",
                    }}
                >
                    <h2
                        style={{
                            margin: 0,
                            color: "#111827",
                            fontSize: "20px",
                            fontWeight: "700",
                        }}
                    >
                        {searchMode
                            ? "Search Results"
                            : "Recommended People"}
                    </h2>
                </div>

                <RecommendationList
                    users={users}
                    loading={loading}
                    error={error}
                    onConnect={handleConnect}
                    connectingId={connectingId}
                    outgoingRequestIds={outgoingRequestIds}
                />
            </section>

            <style>
                {`
                    @keyframes skillswap-discover-enter {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }

                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 600px) {
                        section {
                            padding-left: 4px;
                            padding-right: 4px;
                        }
                    }
                `}
            </style>
        </PageContainer>
    );
};

export default DiscoverPage;