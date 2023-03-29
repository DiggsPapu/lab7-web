import React from "react";
// import icon from '../../assets/search.png'
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="inline">
      <div className="input-icons">
        <i className="fa fa-search icon" />
        <input
          className="input-field"
          type="text"
          placeholder="Search the web without being tracked"
        />
      </div>
    </form>
  );
}
export default SearchBar;
