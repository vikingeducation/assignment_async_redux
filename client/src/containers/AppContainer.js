import React, { Component } from "react";
import { connect } from "redux";
import { mapStateToProps, mapDispatchToProps } from "react-redux";
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
