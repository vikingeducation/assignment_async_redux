import React from "react";

const SearchForm = ({ searchBooks }) => (
  <div className="form-group" style={{ margin: "50px" }}>
    <label>Search</label>
    <input
      className="form-control"
      type="text"
      placeholder="To Kill a Mockingbird"
      onChange={searchBooks}
    />
  </div>
);

export default SearchForm;
