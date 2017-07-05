import React, { Component } from "react";
import { connect } from "react-redux";
import BookSearch from "../components/BookSearch";
import { getInitialAllBooks } from "../actions";

// Define the class so that we can populate componentDidMount
class BookSearchContainer extends Component {
  componentDidMount() {
    this.props.getInitialAllBooks();
  }

  // Render is required for all class components
  render() {
    const { books, isFetching } = this.props;

    // Manually set the props - the presentational component
    // does not need the getInitialAPOD action since it
    // was already dispatched in componentDidMount
    return <BookSearch books={books} isFetching={isFetching} />;
  }
}

const mapStateToProps = state => {
  return {
    books: state.allBooks.books,
    isFetching: state.allBooks.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialAllBooks: () => {
      dispatch(getInitialAllBooks());
    }
  };
};

// Map props and dispatch to ApodContainer which will
// now render Apod itself.
// Export the result of `connect` directly.
export default connect(mapStateToProps, mapDispatchToProps)(BookSearchContainer);
