import "./EventCalendar.css";
import events from "./mockEvents";
import EventCard from "./EventCard";
import EventFilters from "./EventFilters";
import { useState } from "react";

export default function EventCalendar() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.type === filter);

  return (
    <div className="event-calendar container py-5">
      <h2 className="text-accent mb-4 text-center">Event Calendar</h2>
      <EventFilters filter={filter} setFilter={setFilter} />
      <div className="event-list mt-4">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
