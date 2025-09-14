export default function UserCard({ user, onPreview }) {
  return (
    <div className="user-card p-4 rounded shadow-sm">
      <img src={user.image} alt={user.name} className="avatar mb-3" />
      <h5 className="text-warning">{user.name}</h5>
      <p className="text-light">{user.role}</p>
      <p className="text-secondary">{user.bio}</p>

      <div className="tags mb-2">
        {user.interests.map((tag, i) => (
          <span key={`interest-${i}`} className="badge bg-primary me-1">{tag}</span>
        ))}
        {user.skills.map((tag, i) => (
          <span key={`skill-${i}`} className="badge bg-secondary me-1">{tag}</span>
        ))}
      </div>

      <button
        className="btn btn-outline-light btn-sm mt-2"
        onClick={() => onPreview(user)}
      >
        View Profile
      </button>
    </div>
  );
}
