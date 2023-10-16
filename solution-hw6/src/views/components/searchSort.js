import React, { Component } from "react";

class SearchSort extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
    };
  }

  handleQueryChange = (e) => {
    this.setState({ query: e.target.value });
  };

  updateQuery = () => {
    this.props.updateQuery(this.state.query);
  };

  render() {
    return (
      <div className="searchsort-container">
        <input
          type="text"
          value={this.state.query}
          id="search-bar"
          onChange={this.handleQueryChange}
        ></input>
        <button id="search-button" onClick={this.updateQuery}>
          Search
        </button>
        <p id="sort-by">sort by:</p>
        <select onChange={(e) => this.props.updateOrder(e.target.value)}>
          <option value="0">Base Price</option>
          <option value="1">Name</option>
        </select>
      </div>
    );
  }
}

export default SearchSort;
