import React, { Component } from "react";

class SearchSort extends Component {
  render() {
    return (
      <div className="searchsort-container">
        <input type="text" id="search-bar"></input>
        <button id="search-button">Search</button>
        <p id="sort-by">sort by:</p>
        <select>
          <option value="base-price">Base Price</option>
          <option value="name">Name</option>/
        </select>
      </div>
    );
  }
}

export default SearchSort;
