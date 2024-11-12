import React from "react";
import { RiSearchLine } from "react-icons/ri";
import './searchBar.css'
const SearchBar = () => {
  return (
    <div className="search-bar">
      <span className="search-bar-span">
        <RiSearchLine className="search-bar-icon"/>
        <input className="search-bar-input-box" type="text" placeholder="Type here to search" />
      </span>
    </div>
  );
};

export default SearchBar;
