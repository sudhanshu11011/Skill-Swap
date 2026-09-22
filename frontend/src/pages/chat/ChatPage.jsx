import { useMemo } from "react";

import useAuth from "../../hooks/useAuth";
import useChat from "../../hooks/useChat";
import useConnections from "../../hooks/useConnections";

import ChatWindow from "../../components/chat/ChatWindow";

const ChatPage = () => {
    const { user } = useAuth();

    const {
        friends = [],
        loading: connectionsLoading,
        error: connectionsError,
    } = useConnections();

    const {
        connected,
        loading: chatLoading,
        sending,
        error: chatError,
        messages,
        activeFriend,
        openDirectMessage,
        sendMessage,
    } = useChat();

    const currentUserId = useMemo(
        () => String(user?._id || user?.id || ""),
        [user]
    );

    const error =
        connectionsError ||
        chatError ||
        "";

    return (
        <main
            style={{
                width: "100%",
                minHeight: "calc(100vh - 80px)",
                padding: "24px",
                boxSizing: "border-box",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1280px",
                    margin: "0 auto",
                }}
            >
                <ChatWindow
                    friends={friends}
                    activeFriend={activeFriend}
                    messages={messages}
                    currentUserId={currentUserId}
                    loading={
                        connectionsLoading ||
                        chatLoading
                    }
                    connected={connected}
                    sending={sending}
                    error={error}
                    onSelectFriend={openDirectMessage}
                    onSendMessage={sendMessage}
                />
            </div>

            <style>
                {`
                    @media (max-width: 700px) {
                        main {
                            padding: 14px !important;
                        }
                    }

                    @media (max-width: 420px) {
                        main {
                            padding: 8px !important;
                        }
                    }
                `}
            </style>
        </main>
    );
};

export default ChatPage;