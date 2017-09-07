import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import LinkList from "../elements/LinkList";


const mapStateToProps = state => {
  return {
    bookList: state.bookList
  };
};

const DisplayContainer = connect(mapStateToProps, null)(LinkList);
export default DisplayContainer;
