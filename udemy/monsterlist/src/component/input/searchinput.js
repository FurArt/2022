import React, { Component } from "react";
import "./searchinput.css"
const SearchBox = (props) => {
      return (
      <input
        placeholder={props.placeholder}
        className={`search-box ${props.className}`}
        type="search"
        onChange={props.searchHandler}
      />
    );
  
}
export default SearchBox;
