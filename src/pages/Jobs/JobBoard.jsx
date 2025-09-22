import { useState } from "react";
import jobsData from "./mockJobs";
import JobCard from "./JobCard";
import SearchBar from "./SearchBar";
import FilterCard from "./FilterCard";
import TopPicksBox from "./TopPicksBox";
import "./JobBoard.css";

export default function JobBoard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({ location: "" });

  const filteredJobs = jobsData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filters.location === "" || job.location === filters.location)
  );

  return (
    <div className="job-board-page">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div className="job-board-layout">
        <aside className="sidebar">
          <FilterCard filters={filters} setFilters={setFilters} />
          <TopPicksBox jobs={filteredJobs} />
        </aside>

        <section className="job-board">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </div>
    </div>
  );
}
