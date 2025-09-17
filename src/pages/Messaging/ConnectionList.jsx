export default function ConnectionList({ connections, activeId, setActiveId }) {
  return (
    <div className="connection-list p-3">
      <h5 className="text-accent mb-3">Chats</h5>
      {connections.map((conn) => (
        <div
          key={conn.id}
          className={`connection-item p-2 rounded ${activeId === conn.id ? "active" : ""}`}
          onClick={() => setActiveId(conn.id)}
        >
        <span className="status-dot me-2"></span> {conn.name}

        </div>
      ))}
    </div>
  );
}
