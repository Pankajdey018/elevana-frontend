export default function Sidebar() {
  return (
    <div className="bg-primary text-white p-3" style={{ minWidth: '200px', height: '100vh' }}>
      <h4 className="mb-4">Elevana</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="/dashboard" className="nav-link text-white">Home</a></li>
        <li className="nav-item mb-2"><a href="/directory" className="nav-link text-white">Directory</a></li>
        <li className="nav-item mb-2"><a href="/events" className="nav-link text-white">Events</a></li>
        <li className="nav-item mb-2"><a href="/jobs" className="nav-link text-white">Jobs</a></li>
        <li className="nav-item"><a href="/messages" className="nav-link text-white">Messages</a></li>
      </ul>
    </div>
  );
}
