export default function FilterPanel({ filters, setFilters }) {
  const handleRoleChange = (e) => {
    setFilters({ ...filters, role: e.target.value });
  };

  const handleInputChange = (e, type) => {
    const values = e.target.value.split(",").map((v) => v.trim());
    setFilters({ ...filters, [type]: values });
  };

  return (
    <div className="filter-panel p-3 rounded">
      <h5 className="text-light mb-3">Filter By</h5>
      <div className="mb-3">
        <label className="form-label text-light">Role</label>
        <select className="form-select" value={filters.role} onChange={handleRoleChange}>
          <option value="">All</option>
          <option value="Student">Student</option>
          <option value="Alumni">Alumni</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Interests</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. AI, Design"
          onChange={(e) => handleInputChange(e, "interests")}
        />
      </div>
      <div className="mb-3">
        <label className="form-label text-light">Skills</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. React, Python"
          onChange={(e) => handleInputChange(e, "skills")}
        />
      </div>
    </div>
  );
}
