
import React from 'react'
import Button from "./elements/Button";
import Input from "./elements/Input";

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