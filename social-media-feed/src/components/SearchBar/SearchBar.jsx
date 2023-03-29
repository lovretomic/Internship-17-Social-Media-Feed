import classes from "./index.module.css";
import { useState } from "react";

const SearchBar = ({ searchParam }) => {
  const [query, setQuery] = useState("");
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleButtonClick = () => {
    console.log(query);
    if (query) window.location.href = `/feed?search=${query}`;
    else window.location.href = `/feed`;
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleButtonClick();
  };

  return (
    <div className={classes.searchBar}>
      <input
        defaultValue={searchParam}
        className={classes.searchBarInput}
        type="text"
        placeholder="Search feed"
        onChange={handleInput}
        onKeyDown={handleKeyDown}
      />
      <button className={classes.searchBarButton} onClick={handleButtonClick}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
