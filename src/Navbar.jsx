import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar px-4 py-3">
      <div className="navbar-brand text-accent">Elevana</div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/directory">Directory</Link>
        </li>
        <li>
          <Link to="/mentorship-tracker">Mentorship Tracker</Link>
        </li>
        <li className="nav-item">
          <Link to="/availability-setup" className="nav-link">
            Availability
          </Link>
        </li>

        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/profile-setup">Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
