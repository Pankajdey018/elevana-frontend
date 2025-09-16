export default function EventCard({ event }) {
  const { title, date, time, type } = event;

  const handleRSVP = () => {
    alert(`RSVP confirmed for: ${title}`);
  };

  const handleAddToCalendar = () => {
    alert(`Event added to calendar: ${title}`);
  };

  const typeColor = {
    Mentorship: "#ff4655",
    Webinar: "#00bcd4",
    Deadline: "#ffc107",
  };

  return (
    <div className="event-card p-3 mb-4 rounded" style={{ borderLeft: `6px solid ${typeColor[type]}` }}>
      <h5 className="text-light mb-1">{title}</h5>
      <p className="text-secondary mb-1">
        <strong>Date:</strong> {date} &nbsp; <strong>Time:</strong> {time} IST
      </p>
      <span className="badge me-2" style={{ backgroundColor: typeColor[type], color: "#000" }}>
        {type}
      </span>
      <button className="btn btn-sm btn-outline-light me-2 mt-2" onClick={handleRSVP}>
        RSVP
      </button>
      <button className="btn btn-sm btn-outline-light mt-2" onClick={handleAddToCalendar}>
        Add to Calendar
      </button>
    </div>
  );
}
