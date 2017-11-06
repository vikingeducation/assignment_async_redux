import React, { Component } from "react";
import { connect } from "react-redux";
import Goodread from "../components/Goodread/Goodread";
import { getBookInfo } from "../actions";

class GoodreadsContainer extends Component {
  render() {
    const { goodreads, isFetching, bookDetails, bookSelected } = this.props;

    return (
      <Goodread
        goodreads={goodreads}
        isFetching={isFetching}
        bookDetails={bookDetails}
        bookSelected={bookSelected}
      />
    );
  }
}

const mapStateToProps = (state = []) => {
  return {
    goodreads: state.goodreads,
    isFetching: state.isFetching,
    bookSelected: state.bookSelected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    bookDetails: id => {
      console.log("dispatch book", id);
      dispatch(getBookInfo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodreadsContainer);
