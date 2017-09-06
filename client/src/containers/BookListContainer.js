import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/App";
import BookList from "../components/BookList";
import { searchBooks } from "../actions";

class BookListContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getInitialBooks();
  }

  render() {
    return <BookList books={this.props.books} />;
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
