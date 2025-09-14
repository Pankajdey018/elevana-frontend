export default function StatCard({ label, value, icon }) {
  return (
    <div className="stat-card p-3 rounded text-center">
      <div className="stat-icon mb-2">{icon}</div>
      <h5 className="stat-value">{value}</h5>
      <p className="stat-label">{label}</p>
    </div>
  );
}
