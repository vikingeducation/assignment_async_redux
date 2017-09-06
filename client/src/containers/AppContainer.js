import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import { searchBooks } from "../actions";

class AppContainer extends React.Component {
  render() {
    return <App />;
  }
}

export default AppContainer;
