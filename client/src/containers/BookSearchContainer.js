import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";
import BookSearch from "../components/BookSearch";
import { getInitialAllBooks, getSearchedBooks } from "../actions";

class BookSearchContainer extends Component {
  componentDidMount() {
    this.props.getInitialAllBooks();
  }

  render() {
    return <BookSearch {...this.props} />;
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
    },
    onSearchSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form);
      console.log(data);
      form.reset();
      dispatch(getSearchedBooks(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSearchContainer);
