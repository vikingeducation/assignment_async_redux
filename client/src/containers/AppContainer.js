import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";

class AppContainer extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // the action creator from thunk
  }

  render() {
    return <App />;
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
