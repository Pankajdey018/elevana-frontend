import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
}
