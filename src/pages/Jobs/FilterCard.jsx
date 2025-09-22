export default function FilterCard({ filters, setFilters }) {
  return (
    <div className="filter-card">
      <h6>Filter Jobs</h6>
      <select
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Bangalore">Bangalore</option>
      </select>
    </div>
  );
}
