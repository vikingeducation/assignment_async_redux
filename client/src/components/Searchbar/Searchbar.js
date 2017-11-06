import React from "react";
import PropTypes from "prop-types";
import Input from "../elements/Input";
import InputGroup from "../elements/InputGroup";
import Button from "../elements/Button";

const Searchbar = ({ searchText, searchSubmit }) => {
  return (
    <form onSubmit={searchSubmit}>
      <InputGroup name="search" labelText="Search">
        <Input name="search" placeholder={searchText} />
        <Button type="submit" color="primary">
          Search
        </Button>
      </InputGroup>
    </form>
  );
};

Searchbar.propTypes = {
  searchText: PropTypes.string,
  searchSubmit: PropTypes.func.isRequired
};

export default Searchbar;
