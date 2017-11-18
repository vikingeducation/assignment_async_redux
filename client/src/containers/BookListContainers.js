import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import BookList from "../components/BookList"
import  from "./"

const mapStateToProps = (state, ownProps) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

BookListContainer.propTypes = {

}
export default BookListContainer;
