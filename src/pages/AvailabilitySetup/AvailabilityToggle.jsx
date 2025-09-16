export default function AvailabilityToggle({ isAvailable, setIsAvailable }) {
  return (
    <div className="mb-4 text-center">
      <label className="form-label mb-2">Open to Mentorship:</label>
      <div className="btn-group">
        <button
          type="button"
          className={`btn ${isAvailable ? "btn-danger" : "btn-outline-light"}`}
          onClick={() => setIsAvailable(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={`btn ${!isAvailable ? "btn-danger" : "btn-outline-light"}`}
          onClick={() => setIsAvailable(false)}
        >
          No
        </button>
      </div>
    </div>
  );
}
