
import React from 'react'
import Link from "./elements/LInk";

const Search = ({ onClick }) => {
  return (
    <form onSubmit={onClick}>
      <Input name="search" />
      <p>Displaying things</p>
      <Button onClick={onClick} size="sm" color="info" />
    </form>
  );
};

export default Search;