import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import { searchBooks } from "../actions";

class AppContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getInitialBooks();
  }

  render() {
    return <App />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getInitialBooks: () => {
      dispatch(searchBooks("to kill a mockingbird"));
    }
  };
};

export default connect(null, mapDispatchToProps)(AppContainer);
