export default function TopicSelector({ topics, setTopics }) {
  const handleChange = (e) => {
    setTopics(e.target.value.split(",").map((t) => t.trim()));
  };

  return (
    <div className="mb-4">
      <label className="form-label">Preferred Topics</label>
      <input
        type="text"
        className="form-control"
        placeholder="Comma separated topics (e.g. React, Career)"
        onChange={handleChange}
      />
    </div>
  );
}
