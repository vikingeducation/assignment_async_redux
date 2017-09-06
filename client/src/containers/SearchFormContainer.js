import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { searchBooks } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    searchBooks: e => {
      dispatch(searchBooks(e.target.value));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchForm);
