export default function ChatBubble({ message, isSender }) {
  return (
    <div className={`chat-bubble ${isSender ? "sent" : "received"}`}>
      <p className="text">{message.text}</p>
      <span className="timestamp">
        {message.timestamp}
        <span className="read-receipt">✓✓</span>
      </span>
      <div className="reaction-bar mt-1">
        <span className="reaction">❤️</span>
        <span className="reaction">😂</span>
        <span className="reaction">👍</span>
      </div>
    </div>
  );
}
