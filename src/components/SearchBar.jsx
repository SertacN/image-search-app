import React, { useState } from "react";
import "../searchbar.css";

function SearchBar({ search }) {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="searchDiv">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchBar">Search Images</label>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          id="searchBar"
          spellCheck="false"
        />
      </form>
    </div>
  );
}

export default SearchBar;
