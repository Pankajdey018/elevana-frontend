export default function TopPicksBox({ jobs }) {
  const topJobs = jobs.slice(0, 2); // Customize logic later

  return (
    <div className="top-picks-box">
      <h6>Top Picks for You</h6>
      {topJobs.map((job) => (
        <div key={job.id} className="top-pick-item">
          <strong>{job.title}</strong> at {job.company}
        </div>
      ))}
    </div>
  );
}
