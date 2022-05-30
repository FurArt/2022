import React, { Component } from "react";
import "./searchinput.css"
class SearchBox extends Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        className={`search-box ${this.props.className}`}
        type="search"
        onChange={this.props.searchHandler}
      />
    );
  }
}
export default SearchBox;
