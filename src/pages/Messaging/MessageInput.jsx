import { useState } from "react";
import MicIcon from "@mui/icons-material/Mic";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="message-input d-flex align-items-center gap-2">
      {/* Emoji bar (optional) */}
      <div className="emoji-bar">{/* Add emoji icons here if needed */}</div>

      {/* Text input */}
      <input
        type="text"
        className="form-control"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {/* Mic icon styled like Send button */}
      <button className="mic-btn">
        <MicIcon />
      </button>

      {/* Send button */}
      <button className="btn btn-danger" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
