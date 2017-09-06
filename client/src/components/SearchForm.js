import React from "react";
import FormItem from "./FormItem";
import { Button } from "react-bootstrap";

const FIELDS = {
  All: "",
  Title: "title",
  Author: "author"
};

const SearchForm = ({ handleFetch }) => (
  <form onSubmit={handleFetch}>
    <FormItem
      name="Search"
      attrs={{ required: "true", type: "text", name: "query" }}
    />
    <FormItem name="By" attrs={{ componentClass: "select", name: "field" }}>
      {Object.entries(FIELDS).map(([name, value]) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </FormItem>
    <Button type="submit" bsStyle="primary">
      Search
    </Button>
  </form>
);

export default SearchForm;
