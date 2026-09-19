import { useEffect, useState } from "react";
import { Channel, Chat, MessageInput, MessageList, Window } from "stream-chat-react";
import "stream-chat-react/dist/css/v2/index.css";
import { useAuthContext } from "../../../context/AuthContext";
import useChat from "../../../hooks/useChat";
import streamClient from "../../../lib/stream";

export default function ChatPage() {
  const { userQuery } = useAuthContext();
  const { data, isLoading, isError } = useChat();
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

  if (isLoading) return <main style={{ padding: 32 }}>Loading chat...</main>;

  if (isError || !token)
    return (
      <main style={{ padding: 32 }}>
        <h2>Chat unavailable</h2>
        <p>Unable to initialize the chat service.</p>
      </main>
    );

  if (!ready)
    return <main style={{ padding: 32 }}>Connecting to chat...</main>;

  return (
    <main style={{ height: "calc(100vh - 48px)", padding: 24 }}>
      <Chat client={streamClient} theme="messaging light">
        <Channel>
          <Window>
            <MessageList />
            <MessageInput />
          </Window>
        </Channel>
      </Chat>
    </main>
  );
}