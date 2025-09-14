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
      </Routes>
    <Footer />
    </Router>
  );
}
