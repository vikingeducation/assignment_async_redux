import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import SearchForm from "../components/SearchForm";

class SearchFormContainer extends React.Component {
  render() {
    return <SearchForm />;
  }
}

export default SearchFormContainer;
