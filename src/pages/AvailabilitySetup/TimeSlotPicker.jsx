import { useState } from "react";

export default function TimeSlotPicker({ slots, setSlots }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAddSlot = (e) => {
    e.preventDefault();
    if (date && time) {
      const formatted = `${date}, ${time} IST`;
      setSlots([...slots, formatted]);
      setDate("");
      setTime("");
    }
  };

  return (
    <div className="mb-4">
      <label className="form-label">Available Time Slots</label>
      <ul className="text-light mb-3">
        {slots.map((slot, i) => (
          <li key={i}>{slot}</li>
        ))}
      </ul>

      <form className="row g-3 align-items-end" onSubmit={handleAddSlot}>
        <div className="col-md-5">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="col-md-5">
          <label className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-danger w-100">Add</button>
        </div>
      </form>
    </div>
  );
}
