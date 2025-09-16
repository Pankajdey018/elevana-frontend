import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ProfileSetup.css";
import { Link } from "react-router-dom";


export default function ProfileSetup() {
  const [role, setRole] = useState("student");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="container profile-setup py-5" data-aos="fade-up">
      <h2 className="text-primary mb-4 text-center">Set Up Your Profile</h2>
      <form className="profile-form">
        {/* Role Toggle */}
        <div className="mb-4 text-center">
          <label className="form-label mb-2">I am a:</label>
          <div className="btn-group">
            <button
              type="button"
              className={`btn ${
                role === "student" ? "btn-warning" : "btn-outline-light"
              }`}
              onClick={() => handleRoleChange("student")}
            >
              Student
            </button>
            <button
              type="button"
              className={`btn ${
                role === "alumni" ? "btn-warning" : "btn-outline-light"
              }`}
              onClick={() => handleRoleChange("alumni")}
            >
              Alumni
            </button>
          </div>
        </div>

        {/* Name + Email */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mb-3">
          <label className="form-label">About You</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Tell us about yourself..."
          />
        </div>

        {/* Interests + Skills */}
        <div className="row mb-3">
          <div className="col-md-5">
            <label className="form-label">Interests</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comma separated interests"
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Skills</label>
            <input
              type="text"
              className="form-control"
              placeholder="Comma separated skills"
            />
          </div>
        </div>

        {/* Conditional Fields */}
        {role === "alumni" && (
          <>
            <div className="row mb-3">
              <div className="col-md-5">
                <label className="form-label">Current Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company name"
                />
              </div>
              <div className="col-md-5">
                <label className="form-label">Years of Experience</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 5 years"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Past Experiences</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Roles, companies, duration"
              />
            </div>
          </>
        )}

        {role === "student" && (
          <div className="mb-3">
            <label className="form-label">Projects</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Titles, tech stack, links"
            />
          </div>
        )}

        {/* Certificates + Profile Picture */}
        <div className="row mb-4">
          <div className="col-md-5">
            <label className="form-label">Upload Certificates</label>
            <input type="file" className="form-control" multiple />
          </div>
          <div className="col-md-5">
            <label className="form-label">Upload Profile Picture</label>
            <input type="file" className="form-control" />
          </div>
        </div>
        <Link to="/availability-setup" className="btn btn-warning mt-3">
          Define Availability
        </Link>
        <button type="submit" className="btn btn-warning w-100">
          Save Profile
        </button>
      </form>
    </div>
  );
}
