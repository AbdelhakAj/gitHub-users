import React, { useState } from "react";

import "./searchBar.scss";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  return (
    <div className="search-bar">
      <input
        id="username"
        className="search-bar-username"
        type="text"
        name="username"
        placeholder="write a github username here"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button className="search-bar-btn" onClick={() => onSearch(username)}>
        search
      </button>
    </div>
  );
};
export default SearchBar;
