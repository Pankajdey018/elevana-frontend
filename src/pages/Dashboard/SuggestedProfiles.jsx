const suggestedUsers = [
  {
    id: 101,
    name: "Ishaan Verma",
    role: "Alumni",
    bio: "Tech lead at Flipkart. Loves mentoring and open source.",
    image: "/assets/avatars/ishaan.png",
    tags: ["React", "Leadership", "Open Source"],
  },
  {
    id: 102,
    name: "Tanya Roy",
    role: "Student",
    bio: "Design student exploring UI/UX and motion graphics.",
    image: "/assets/avatars/tanya.png",
    tags: ["Figma", "Animation", "UX"],
  },
  {
    id: 103,
    name: "Arjun Patel",
    role: "Alumni",
    bio: "DevOps engineer at Zoho. Passionate about automation.",
    image: "/assets/avatars/arjun.png",
    tags: ["Docker", "CI/CD", "Mentorship"],
  },
];

export default function SuggestedProfiles() {
  return (
    <div className="suggested-grid">
      {suggestedUsers.map((user) => (
        <div key={user.id} className="suggested-card p-3 rounded">
          <img src={user.image} alt={user.name} className="avatar mb-2" />
          <h6 className="text-warning">{user.name}</h6>
          <p className="text-light">{user.role}</p>
          <p className="text-secondary small">{user.bio}</p>
          <div className="tags mb-2">
            {user.tags.map((tag, i) => (
              <span key={i} className="badge bg-secondary me-1">{tag}</span>
            ))}
          </div>
          <button className="btn btn-outline-light btn-sm">Connect</button>
        </div>
      ))}
    </div>
  );
}
