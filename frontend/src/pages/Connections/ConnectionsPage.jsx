import { useEffect, useState } from "react";

import PageContainer from "../../components/common/PageContainer";
import ConnectionList from "../../components/connection/ConnectionList";
import useConnections from "../../hooks/useConnections";

const ConnectionsPage = () => {
    const {
        friends,
        incomingRequests,
        outgoingRequests,
        loading,
        error,
        loadConnections,
        acceptRequest,
    } = useConnections();

    const [acceptingId, setAcceptingId] = useState("");

    useEffect(() => {
        loadConnections();
    }, [loadConnections]);

    const handleAccept = async (request) => {
        const requestId =
            request?._id ||
            request?.id ||
            "";

        if (!requestId) {
            return;
        }

        try {
            setAcceptingId(requestId);
            await acceptRequest(request);
        } finally {
            setAcceptingId("");
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
                    animation:
                        "skillswap-connections-enter 400ms ease-out",
                }}
            >
                <div
                    style={{
                        marginBottom: "28px",
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
                        Connections
                    </h1>

                    <p
                        style={{
                            margin: 0,
                            color: "#6b7280",
                            fontSize: "15px",
                            lineHeight: "1.6",
                        }}
                    >
                        Manage your connection requests and
                        connected users.
                    </p>
                </div>

                <ConnectionList
                    friends={friends}
                    incomingRequests={incomingRequests}
                    outgoingRequests={outgoingRequests}
                    loading={loading}
                    error={error}
                    onAccept={handleAccept}
                    acceptingId={acceptingId}
                />
            </section>

            <style>
                {`
                    @keyframes skillswap-connections-enter {
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

export default ConnectionsPage;