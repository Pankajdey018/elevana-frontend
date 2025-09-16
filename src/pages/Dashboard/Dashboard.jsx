import StatCard from "./StatCard";
import SuggestedProfiles from "./SuggestedProfiles";
import UpcomingEvents from "./UpcomingEvents";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const userName = "Pankaj"; // You can fetch this dynamically later

  return (
    <div className="dashboard container-fluid py-5">
      {/* Welcome Banner */}

      <div className="welcome-banner mb-4">
        <h2 className="text-accent">Welcome back, {userName} 👋</h2>
        <p>Here’s what’s happening in your network today.</p>

        {/* CTA Button */}
        <Link to="/availability-setup" className="btn btn-danger mt-3">
          Set Mentorship Availability
        </Link>
      </div>

      {/* Stats Overview */}
      <div className="row mb-5">
        <div className="col-md-3">
          <StatCard label="Connections" value={42} icon="🤝" />
        </div>
        <div className="col-md-3">
          <StatCard label="Certifications" value={5} icon="📜" />
        </div>
        <div className="col-md-3">
          <StatCard label="Mentorships" value={3} icon="🧑‍🏫" />
        </div>
        <div className="col-md-3">
          <StatCard label="Profile Completion" value="85%" icon="✅" />
        </div>
      </div>

      {/* Suggested Profiles */}
      <div className="mb-5">
        <h4 className="text-accent mb-3">Suggested Connections</h4>
        <SuggestedProfiles />
      </div>

      {/* Upcoming Events */}
      <div>
        <h4 className="text-accent mb-3">Upcoming Events</h4>
        <UpcomingEvents />
      </div>
    </div>
  );
}
