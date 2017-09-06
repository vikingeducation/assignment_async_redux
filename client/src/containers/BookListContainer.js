import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import BookList from "../components/BookList";
import { searchBooks, fetchBook } from "../actions";

class BookListContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getInitialBooks();
  }

  render() {
    return (
      <div className="container">
        <BookList books={this.props.books} onClick={fetchBook} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialBooks: () => {
      dispatch(searchBooks("to kill a mockingbird"));
    }
    fetchBook
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
