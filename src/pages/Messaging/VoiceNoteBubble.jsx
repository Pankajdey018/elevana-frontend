
export default function VoiceNoteBubble({ sender, timestamp }) {
  return (
    <div className={`voice-note-bubble ${sender === "Pankaj" ? "sent" : "received"}`}>
      <button className="play-btn">▶</button>
      <div className="waveform">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="wave-bar" style={{ animationDelay: `${i * 0.05}s` }} />
        ))}
      </div>
      <span className="timestamp">{timestamp}</span>
    </div>
  );
}
