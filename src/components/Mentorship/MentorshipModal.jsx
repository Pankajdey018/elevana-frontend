import { useState } from "react";
import "./MentorshipModal.css";

export default function MentorshipModal({ receiver, onClose, onSubmit }) {
  const [topic, setTopic] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!topic || !preferredTime || !message) return;
    onSubmit({ receiver, topic, preferredTime, message });
    onClose();
  };

  return (
    <div className="mentorship-modal">
      <div className="modal-box p-4">
        <button className="close-btn" onClick={onClose}>×</button>
        <h5 className="text-warning mb-3">Request Mentorship with {receiver.name}</h5>

        <div className="mb-3">
          <label className="form-label text-light">Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Career guidance, React help..."
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Preferred Time</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Sep 20, 6PM IST"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label text-light">Message</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Write a short message explaining your request..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button className="btn btn-outline-light" onClick={handleSubmit}>
          Send Request
        </button>
      </div>
    </div>
  );
}
