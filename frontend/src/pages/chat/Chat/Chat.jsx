import { useEffect, useState } from "react";
import {
  Channel,
  Chat,
  MessageComposer,
  MessageList,
  Window,
} from "stream-chat-react";
import "stream-chat-react/dist/css/index.css";
import { MessageCircle, Users } from "lucide-react";
import { useAuthContext } from "../../../context/AuthContext";
import useChat from "../../../hooks/useChat";
import useConnection from "../../../hooks/useConnection";
import useResponsive from "../../../hooks/useResponsive";
import streamClient from "../../../lib/stream";

export default function ChatPage() {
  const { userQuery } = useAuthContext();
  const { data, isLoading, isError } = useChat();
  const { friends } = useConnection();
  const { isMobile, isSmallMobile } = useResponsive();

  const [ready, setReady] = useState(false);
  const [channel, setChannel] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const user = userQuery.data?.data?.user;
  const token = data?.data?.token;
  const friendList = friends.data?.data || [];

  useEffect(() => {
    if (!user || !token) return;

    let active = true;

    const connect = async () => {
      try {
        await streamClient.connectUser(
          {
            id: user._id,
            name: user.fullName,
            image: user.profilePic || undefined,
          },
          token
        );

        if (active) setReady(true);
      } catch (error) {
        console.error("Error connecting to chat:", error);
      }
    };

    connect();

    return () => {
      active = false;
      setReady(false);
      setChannel(null);
      setSelectedUser(null);

      if (streamClient.userID) {
        streamClient.disconnectUser();
      }
    };
  }, [user, token]);

  const openChat = async (person) => {
    if (!user || !streamClient.userID) return;

    try {
      const members = [user._id, person._id].sort();
      const channelId = `dm-${members.join("-")}`;

      const newChannel = streamClient.channel(
        "messaging",
        channelId,
        {
          members: [user._id, person._id],
        }
      );

      await newChannel.watch();

      setSelectedUser(person);
      setChannel(newChannel);
    } catch (error) {
      console.error("Error opening chat:", error);
    }
  };

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
      <div
        style={{
          height: "100%",
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "280px minmax(0,1fr)",
          gap: 12,
          minWidth: 0,
        }}
      >
        {(!isMobile || !channel) && (
          <section
            style={{
              background: "#fff",
              border: "1px solid #e8e5f2",
              borderRadius: 14,
              overflow: "hidden",
              minWidth: 0,
            }}
          >
            <div
              style={{
                padding: "18px 16px",
                borderBottom: "1px solid #e8e5f2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <MessageCircle size={19} color="#6d28d9" />

                <strong>Messages</strong>
              </div>

              <p
                style={{
                  margin: "6px 0 0",
                  color: "#777",
                  fontSize: 12,
                }}
              >
                Chat with your connections.
              </p>
            </div>

            {friends.isLoading ? (
              <p style={messageStyle}>Loading connections...</p>
            ) : friendList.length ? (
              <div>
                {friendList.map((person) => {
                  const active =
                    selectedUser?._id === person._id;

                  return (
                    <button
                      key={person._id}
                      type="button"
                      onClick={() => openChat(person)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "12px 14px",
                        border: 0,
                        borderBottom:
                          "1px solid #f0edf7",
                        background: active
                          ? "#f0ebff"
                          : "#fff",
                        color: "#15132a",
                        textAlign: "left",
                        cursor: "pointer",
                      }}
                    >
                      {person.profilePic ? (
                        <img
                          src={person.profilePic}
                          alt=""
                          style={{
                            width: 42,
                            height: 42,
                            flexShrink: 0,
                            borderRadius: "50%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: 42,
                            height: 42,
                            flexShrink: 0,
                            borderRadius: "50%",
                            background: "#ede9fe",
                            color: "#6d28d9",
                            display: "grid",
                            placeItems: "center",
                            fontWeight: 700,
                          }}
                        >
                          {person.fullName
                            ?.charAt(0)
                            ?.toUpperCase() || "U"}
                        </div>
                      )}

                      <div style={{ minWidth: 0 }}>
                        <strong
                          style={{
                            display: "block",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            fontSize: 13,
                          }}
                        >
                          {person.fullName}
                        </strong>

                        <span
                          style={{
                            display: "block",
                            marginTop: 3,
                            color: "#777",
                            fontSize: 11,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {person.skillYouHave ||
                            "Skill exchange connection"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div style={emptyStyle}>
                <Users size={30} color="#6d28d9" />

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#777",
                    fontSize: 13,
                  }}
                >
                  No connections available for chat.
                </p>
              </div>
            )}
          </section>
        )}

        {(!isMobile || channel) && (
          <section
            style={{
              position: "relative",
              minWidth: 0,
              minHeight: 0,
              background: "#fff",
              border: "1px solid #e8e5f2",
              borderRadius: 14,
              overflow: "hidden",
            }}
          >
            {channel ? (
              <Chat client={streamClient} theme="messaging light">
                <Channel channel={channel}>
                  <Window>
                    <MessageList />
                    <MessageComposer />
                  </Window>
                </Channel>
              </Chat>
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  padding: 30,
                  textAlign: "center",
                }}
              >
                <div>
                  <MessageCircle
                    size={42}
                    color="#6d28d9"
                  />

                  <h3>Select a connection</h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#777",
                      fontSize: 13,
                    }}
                  >
                    Choose a connection to start chatting.
                  </p>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

const messageStyle = {
  margin: 0,
  padding: 18,
  color: "#777",
  fontSize: 13,
};

const emptyStyle = {
  padding: 24,
  textAlign: "center",
};