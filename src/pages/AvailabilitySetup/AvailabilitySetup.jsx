import "./AvailabilitySetup.css";
import AvailabilityToggle from "./AvailabilityToggle";
import TimeSlotPicker from "./TimeSlotPicker";
import TopicSelector from "./TopicSelector";
import { useState } from "react";

export default function AvailabilitySetup() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [slots, setSlots] = useState([]);
  const [topics, setTopics] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ isAvailable, slots, topics });
    // Save to backend or local state
  };

  return (
    <div className="availability-setup container py-5">
      <h2 className="text-accent mb-4 text-center">Mentorship Availability</h2>
      <form className="availability-form" onSubmit={handleSubmit}>
        <AvailabilityToggle isAvailable={isAvailable} setIsAvailable={setIsAvailable} />
        <TimeSlotPicker slots={slots} setSlots={setSlots} />
        <TopicSelector topics={topics} setTopics={setTopics} />
        <button type="submit" className="btn btn-danger w-100 mt-4">Save Availability</button>
      </form>
    </div>
  );
}
