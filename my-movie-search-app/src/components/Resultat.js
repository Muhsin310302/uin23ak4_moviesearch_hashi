import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [drop, setDrop] = useState("");

  const SearchResult = (event) => {
    event.preventDefault();
    onSearch(drop);
  };

  return (
    <form className="search" onSubmit={SearchResult}>
      <input className="input" type="text" value={drop} onChange={(event) => setDrop(event.target.value)} />
      <button className="space" type="submit">
        Search Movie
      </button>
    </form>
  );
}

export default SearchBar;
