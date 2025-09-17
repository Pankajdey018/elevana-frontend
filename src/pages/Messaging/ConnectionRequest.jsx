export default function ConnectionRequest({ name, onAccept, onDecline }) {
  return (
    <div className="connection-request p-3 rounded mb-3">
      <p className="text-light mb-2">Connection request from <strong>{name}</strong></p>
      <div className="btn-group">
        <button className="btn btn-sm btn-danger" onClick={onAccept}>Accept</button>
        <button className="btn btn-sm btn-outline-light" onClick={onDecline}>Decline</button>
      </div>
    </div>
  );
}
