export default function EventFilters({ filter, setFilter }) {
  const types = ["All", "Mentorship", "Webinar", "Deadline"];

  return (
    <div className="d-flex justify-content-center gap-3">
      {types.map((type) => (
        <button
          key={type}
          className={`btn ${filter === type ? "btn-danger" : "btn-outline-light"}`}
          onClick={() => setFilter(type)}
        >
          {type}
        </button>
      ))}
    </div>
  );
}
