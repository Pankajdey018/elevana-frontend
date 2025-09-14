import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Mentorship Session with Ishaan Verma",
    date: "Sep 18, 2025",
    time: "6:00 PM",
    type: "Mentorship",
  },
  {
    id: 2,
    title: "UI/UX Design Webinar",
    date: "Sep 20, 2025",
    time: "4:00 PM",
    type: "Webinar",
  },
  {
    id: 3,
    title: "Profile Review Deadline",
    date: "Sep 22, 2025",
    time: "11:59 PM",
    type: "Deadline",
  },
];

export default function UpcomingEvents() {
  const [rsvpedEvents, setRsvpedEvents] = useState([]);

  const handleRSVP = (eventId) => {
    if (!rsvpedEvents.includes(eventId)) {
      setRsvpedEvents([...rsvpedEvents, eventId]);
      notify("RSVP confirmed");
    }
  };

  const handleCalendarSync = (event) => {
    const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${formatDateForCalendar(event.date, event.time)}&details=Elevana+Event`;

    window.open(calendarUrl, "_blank");
    notify("Event added to calendar");
  };

  const formatDateForCalendar = (dateStr, timeStr) => {
    const [monthStr, dayStr, yearStr] = dateStr.replace(",", "").split(" ");
    const month = monthToNumber(monthStr);
    const day = pad(dayStr);
    const year = yearStr;

    const [time, meridian] = timeStr.split(" ");
    const [hourStr, minuteStr] = time.split(":");
    let hour = parseInt(hourStr);
    const minute = pad(minuteStr);

    if (meridian === "PM" && hour < 12) hour += 12;
    if (meridian === "AM" && hour === 12) hour = 0;

    const hrs = pad(hour);
    const isoDate = new Date(`${year}-${month}-${day}T${hrs}:${minute}:00Z`);
    const start = isoDate.toISOString().replace(/-|:|\.\d+/g, "");
    const end = new Date(isoDate.getTime() + 60 * 60 * 1000)
      .toISOString()
      .replace(/-|:|\.\d+/g, "");

    return `${start}/${end}`;
  };

  const monthToNumber = (month) => {
    const months = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    return months[month];
  };

  const pad = (num) => (parseInt(num) < 10 ? `0${parseInt(num)}` : `${num}`);

  const notify = (message) => {
    const toast = document.createElement("div");
    toast.className = "dashboard-toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  };

  return (
    <div className="events-list">
      {events.map((event) => (
        <div key={event.id} className={`event-card p-3 rounded ${event.type.toLowerCase()}`}>
          <h6 className="text-warning">{event.title}</h6>
          <p className="text-light mb-1">
            {event.date} • {event.time}
          </p>
          <span className="badge event-type">{event.type}</span>

          <div className="mt-3 d-flex flex-wrap gap-2">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => handleRSVP(event.id)}
              disabled={rsvpedEvents.includes(event.id)}
            >
              {rsvpedEvents.includes(event.id) ? "RSVP'd" : "RSVP"}
            </button>

            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => handleCalendarSync(event)}
            >
              Add to Calendar
            </button>
          </div>

          {rsvpedEvents.includes(event.id) && (
            <span className="badge bg-success mt-2">RSVP Confirmed</span>
          )}
        </div>
      ))}
    </div>
  );
}
