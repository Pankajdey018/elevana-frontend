import { useState } from "react";
import FilterPanel from "./FilterPanel";
import UserCard from "./UserCard";
import "./Directory.css";

const dummyUsers = [
  {
    id: 1,
    name: "Azura Mehta",
    role: "Alumni",
    bio: "Product designer at Zeta. Passionate about mentoring.",
    interests: ["Design", "Mentorship"],
    skills: ["Figma", "UX", "Leadership"],
    image: "/assets/avatars/azura.png",
  },
  {
    id: 2,
    name: "Riya Sen",
    role: "Student",
    bio: "Final-year CS student exploring AI and web dev.",
    interests: ["AI", "Web Dev"],
    skills: ["React", "Python"],
    image: "/assets/avatars/riya.png",
  },
  {
    id: 3,
    name: "Kabir Das",
    role: "Alumni",
    bio: "Backend engineer at Razorpay. Loves clean code and chai.",
    interests: ["APIs", "Refactoring"],
    skills: ["Node.js", "Express", "MongoDB"],
    image: "/assets/avatars/kabir.png",
  },
  {
    id: 4,
    name: "Meera Kapoor",
    role: "Student",
    bio: "UI/UX enthusiast building immersive web experiences.",
    interests: ["Design", "Accessibility"],
    skills: ["Figma", "Bootstrap", "AOS"],
    image: "/assets/avatars/meera.png",
  },
  {
    id: 5,
    name: "Dev Sharma",
    role: "Alumni",
    bio: "Full-stack dev at Swiggy. Mentors juniors in React and career growth.",
    interests: ["Mentorship", "Startups"],
    skills: ["React", "TypeScript", "GraphQL"],
    image: "/assets/avatars/dev.png",
  },
];

export default function Directory() {
  const [filters, setFilters] = useState({
    role: "",
    interests: [],
    skills: [],
    search: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = dummyUsers.filter((user) => {
    const roleMatch = filters.role ? user.role === filters.role : true;
    const interestsMatch = filters.interests.length
      ? filters.interests.some((i) => user.interests.includes(i))
      : true;
    const skillsMatch = filters.skills.length
      ? filters.skills.some((s) => user.skills.includes(s))
      : true;
    const searchMatch = filters.search
      ? user.name.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    return roleMatch && interestsMatch && skillsMatch && searchMatch;
  });

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  return (
    <div className="directory-page container-fluid py-5">
      <h2 className="text-primary mb-4 text-center">Explore the Community</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search by name..."
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="row gx-5">
        <div className="col-md-3">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <div className="col-md-9">
          <div className="user-grid">
            {paginatedUsers.map((user) => (
              <UserCard key={user.id} user={user} onPreview={setSelectedUser} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-controls text-center mt-4">
            {Array.from({
              length: Math.ceil(filteredUsers.length / usersPerPage),
            }).map((_, i) => (
              <button
                key={i}
                className={`btn btn-sm mx-1 ${
                  currentPage === i + 1 ? "btn-warning" : "btn-outline-light"
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Profile Preview */}
      {selectedUser && (
        <div className="profile-drawer">
          <div className="drawer-content p-4">
            <button className="close-btn" onClick={() => setSelectedUser(null)}>
              ×
            </button>
            <img
              src={selectedUser.image}
              alt={selectedUser.name}
              className="avatar mb-3"
            />
            <h4 className="text-warning">{selectedUser.name}</h4>
            <p className="text-light">{selectedUser.role}</p>
            <p className="text-secondary">{selectedUser.bio}</p>
            <div className="tags mb-2">
              {selectedUser.interests.map((tag, i) => (
                <span key={i} className="badge bg-primary me-1">
                  {tag}
                </span>
              ))}
              {selectedUser.skills.map((tag, i) => (
                <span key={i} className="badge bg-secondary me-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
