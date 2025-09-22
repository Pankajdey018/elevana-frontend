import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import WorkIcon from "@mui/icons-material/Work";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

export default function JobCard({ job }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <div className="job-card">
      <div className="job-header">
        <WorkIcon className="job-icon" />
        <div>
          <h5>{job.title}</h5>
          <p>{job.company}</p>
        </div>
        <button
          className="bookmark-btn"
          onClick={() => setBookmarked(!bookmarked)}
        >
          {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </button>
      </div>

      <div className="job-body">
        <LocationOnIcon className="location-icon" />
        <span>{job.location}</span>
        <p className="job-description">{job.description}</p>
      </div>

      <div className="job-footer">
        <button className="apply-btn">Apply Now</button>
      </div>
    </div>
  );
}
