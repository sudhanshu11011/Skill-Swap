import { useEffect, useState } from "react";
import {
  Channel,
  Chat,
  MessageComposer,
  MessageList,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import { useAuthContext } from "../../../context/AuthContext";
import useChat from "../../../hooks/useChat";
import useResponsive from "../../../hooks/useResponsive";
import streamClient from "../../../lib/stream";

export default function ChatPage() {
  const { userQuery } = useAuthContext();
  const { data, isLoading, isError } = useChat();
  const { isMobile, isSmallMobile } = useResponsive();
  const [ready, setReady] = useState(false);

  const user = userQuery.data?.data?.user;
  const token = data?.data?.token;

  useEffect(() => {
    if (!user || !token) return;

    const connect = async () => {
      await streamClient.connectUser(
        {
          id: user._id,
          name: user.fullName,
          image: user.profilePic || undefined,
        },
        token
      );

      setReady(true);
    };

    connect();

    return () => {
      streamClient.disconnectUser();
      setReady(false);
    };
  }, [user, token]);

  const stateStyle = {
    padding: isSmallMobile ? 16 : isMobile ? 20 : 32,
  };

  if (isLoading) {
    return <main style={stateStyle}>Loading chat...</main>;
  }

  if (isError || !token) {
    return (
      <main style={stateStyle}>
        <h2>Chat unavailable</h2>
        <p>Unable to initialize the chat service.</p>
      </main>
    );
  }

  if (!ready) {
    return <main style={stateStyle}>Connecting to chat...</main>;
  }

  return (
    <main
      style={{
        height: isMobile
          ? "calc(100vh - 136px)"
          : "calc(100vh - 72px)",
        padding: isSmallMobile ? 6 : isMobile ? 8 : 24,
        boxSizing: "border-box",
        minWidth: 0,
        overflow: "hidden",
      }}
    >
      <div style={{ height: "100%", minWidth: 0 }}>
        <Chat client={streamClient} theme="messaging light">
          <Channel>
            <Window>
              <MessageList />
              <MessageComposer />
            </Window>
          </Channel>
        </Chat>
      </div>
    </main>
  );
}