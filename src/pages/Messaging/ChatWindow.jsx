import ChatBubble from "./ChatBubble";
import VoiceNoteBubble from "./VoiceNoteBubble.jsx";
import { useRef, useEffect, useState } from "react";

export default function ChatWindow({ messages, isTyping, connections, activeId }) {
  const chatRef = useRef();
  const [prevLength, setPrevLength] = useState(messages.length);

  useEffect(() => {
    if (messages.length > prevLength) {
      chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setPrevLength(messages.length);
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg) => {
        const isSender = msg.sender === "Pankaj";
        const rowClass = `chat-row ${isSender ? "sent" : "received"}`;

        return (
          <div key={msg.id} className={rowClass}>
            {msg.type === "voice" ? (
              <VoiceNoteBubble sender={msg.sender} timestamp={msg.timestamp} />
            ) : (
              <ChatBubble message={msg} isSender={isSender} />
            )}
          </div>
        );
      })}

      {isTyping && (
        <div className="typing-indicator text-muted px-3 pb-2">
          {connections.find((c) => c.id === activeId)?.name} is typing...
        </div>
      )}

      <div ref={chatRef} />
    </div>
  );
}
