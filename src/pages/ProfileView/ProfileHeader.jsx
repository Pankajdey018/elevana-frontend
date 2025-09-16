export default function ProfileHeader() {
  return (
    <div className="profile-header d-flex align-items-center mb-4">
      <img src="/path-to-profile-pic.jpg" alt="Profile" className="profile-pic" />
      <div className="ms-4">
        <h3 className="text-light">Pankaj Sharma</h3>
        <p className="text-muted">Alumni • UI/UX Designer • Mentor</p>
        <button className="btn btn-danger">Request Mentorship</button>
      </div>
    </div>
  );
}
