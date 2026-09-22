import {
    useCallback,
    useEffect,
    useState,
} from "react";

import connectionService from "../services/connectionService";

const useConnections = () => {
    const [friends, setFriends] = useState([]);
    const [incomingRequests, setIncomingRequests] =
        useState([]);
    const [outgoingRequests, setOutgoingRequests] =
        useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const loadConnections = useCallback(
        async (showLoader = true) => {
            try {
                if (showLoader) {
                    setLoading(true);
                }

                setError("");

                const [
                    friendsData,
                    requestData,
                    outgoingData,
                ] = await Promise.all([
                    connectionService.getFriends(),
                    connectionService.getIncomingRequests(),
                    connectionService.getOutgoingRequests(),
                ]);

                setFriends(
                    Array.isArray(friendsData)
                        ? friendsData
                        : []
                );

                setIncomingRequests(
                    Array.isArray(
                        requestData?.incomingRequests
                    )
                        ? requestData.incomingRequests
                        : []
                );

                setOutgoingRequests(
                    Array.isArray(outgoingData)
                        ? outgoingData
                        : []
                );
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to load connections."
                );
            } finally {
                if (showLoader) {
                    setLoading(false);
                }
            }
        },
        []
    );

    const sendRequest = useCallback(
        async (userId) => {
            try {
                setError("");

                const data =
                    await connectionService.sendRequest(
                        userId
                    );

                await loadConnections(false);

                return data;
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to send connection request."
                );

                throw err;
            }
        },
        [loadConnections]
    );

    const acceptRequest = useCallback(
        async (request) => {
            const requestId =
                request?._id ||
                request?.id ||
                "";

            if (!requestId) {
                return;
            }

            try {
                setError("");

                const data =
                    await connectionService.acceptRequest(
                        requestId
                    );

                await loadConnections(false);

                return data;
            } catch (err) {
                setError(
                    err.response?.data?.message ||
                    "Unable to accept connection request."
                );

                throw err;
            }
        },
        [loadConnections]
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            loadConnections(false);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [loadConnections]);

    return {
        friends,
        incomingRequests,
        outgoingRequests,
        loading,
        error,
        loadConnections,
        sendRequest,
        acceptRequest,
    };
};

export default useConnections;