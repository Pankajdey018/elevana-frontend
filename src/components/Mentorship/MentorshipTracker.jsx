const requests = [
  {
    id: 1,
    sender: "Pankaj",
    receiver: "Ishaan Verma",
    topic: "Career guidance",
    preferredTime: "Sep 20, 6PM IST",
    status: "Pending",
  },
  {
    id: 2,
    sender: "Tanya Roy",
    receiver: "Pankaj",
    topic: "React help",
    preferredTime: "Sep 22, 4PM IST",
    status: "Accepted",
  },
];

export default function MentorshipTracker() {
  return (
    <div className="mentorship-tracker">
      <h5 className="text-accent mb-3">Your Mentorship Requests</h5>
      <div className="tracker-grid">
        {requests.map((req) => (
          <div key={req.id} className={`tracker-card p-3 rounded ${req.status.toLowerCase()}`}>
            <h6 className="text-warning">{req.topic}</h6>
            <p className="text-light mb-1">
              {req.sender === "Pankaj"
                ? `To: ${req.receiver}`
                : `From: ${req.sender}`}
            </p>
            <p className="text-secondary small">Preferred Time: {req.preferredTime}</p>
            <span className={`badge status-badge ${req.status.toLowerCase()}`}>
              {req.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
