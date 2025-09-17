import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Dashboard from '../pages/Dashboard/Dashboard';
import ProfileSetup from '../pages/ProfileSetup/ProfileSetup';
import Directory from '../pages/Directory/Directory';
import MentorshipTracker from "../components/Mentorship/MentorshipTracker.jsx";
import Navbar from "../Navbar.jsx"
import Footer from '../Footer.jsx';
import ProfileView from '../pages/ProfileView/ProfileView.jsx';
import AvailabilitySetup from '../pages/AvailabilitySetup/AvailabilitySetup.jsx';
import EventCalendar from '../pages/EventCalendar/EventCalendar.jsx';
import MessagingInterface from '../pages/Messaging/MessagingInterface.jsx';

export default function AppRoutes() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/mentorship-tracker" element={<MentorshipTracker />} />
        <Route path="/profile/:id" element={<ProfileView />} />
        <Route path="/availability-setup" element={<AvailabilitySetup />} />
        <Route path="/events" element={<EventCalendar />} />
        <Route path="/message" element={<MessagingInterface />} />
      </Routes>
    <Footer />
    </Router>
  );
}
