import "./Messaging.css";
import { useState, useEffect } from "react";
import connections from "./mockConnections";
import messagesData from "./mockMessages";
import ConnectionList from "./ConnectionList";
import ChatWindow from "./ChatWindow";
import MessageInput from "./MessageInput";
import SearchIcon from "@mui/icons-material/Search";

export default function MessagingInterface() {
  const [activeId, setActiveId] = useState(1);
  const [messages, setMessages] = useState(messagesData);
  const [isTyping, setIsTyping] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const filteredMessages = messages[activeId].filter((msg) =>
    msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Simulate typing (can be replaced with real-time logic)
  useEffect(() => {
    const timer = setTimeout(() => setIsTyping(true), 2000);
    const stop = setTimeout(() => setIsTyping(false), 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(stop);
    };
  }, [activeId]);

  const handleSend = (text) => {
    const newMsg = {
      id: Date.now(),
      sender: "Pankaj",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => ({
      ...prev,
      [activeId]: [...prev[activeId], newMsg],
    }));
  };

  return (
    <div className="messaging-ui container-fluid py-5">
      <div className="messaging-wrapper d-flex">
        <ConnectionList
          connections={connections}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <div className="chat-area flex-grow-1 d-flex flex-column">
          {/* Search Bar */}
          <div className="search-toggle-wrapper">
            <SearchIcon
              className="search-toggle-icon"
              onClick={() => setShowSearch(!showSearch)}
            />
          </div>

          {showSearch && (
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <SearchIcon className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search messages"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Chat Window */}
          <ChatWindow
            messages={filteredMessages}
            isTyping={isTyping}
            connections={connections}
            activeId={activeId}
          />
          {/* Message Input */}
          <MessageInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
