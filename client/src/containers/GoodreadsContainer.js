import React, { Component } from "react";
import { connect } from "react-redux";
import Goodread from "../Goodread/Goodread";
import { getInitialGoodreads } from "../actions";

class GoodreadsContainer extends Component {
  componentDidMount() {
    this.props.getInitialGoodreads();
  }

  render() {
    const { goodreads, isFetching } = this.props;

    return <Goodread goodreads={goodreads} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    goodreads: state.goodreads,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialGoodreads: () => {
      dispatch(getInitialGoodreads());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodreadsContainer);
