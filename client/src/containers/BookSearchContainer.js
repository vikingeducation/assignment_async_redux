import React, { Component } from "react";
import { connect } from "react-redux";
import serialize from "form-serialize";
import BookSearch from "../components/BookSearch";
import {
  getInitialAllBooks,
  getSearchedBooks,
  getSelectedBook,
  setModalToClosed
} from "../actions";

class BookSearchContainer extends Component {
  componentDidMount() {
    this.props.getInitialAllBooks();
  }
  componentWillUnmount() {
    console.log('WY');
  }
  render() {
    return <BookSearch {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    books: state.allBooks.books,
    isFetchingAll: state.allBooks.isFetching,
    isModalOpen: state.modal.isModalOpen,
    selectedBook: state.selectedBook.book,
    isFetchingSelected: state.selectedBook.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInitialAllBooks: () => {
      dispatch(getInitialAllBooks());
    },
    onSearchSubmit: e => {
      const data = parseForm(e);
      dispatch(getSearchedBooks(data));
    },
    onSelectBookSubmit: e => {
      const data = parseForm(e);
      dispatch(getSelectedBook(data));
    },
    onCloseModal: e => {
      e.preventDefault();
      dispatch(setModalToClosed());
    }
  };
};

const parseForm = e => {
  e.preventDefault();
  const form = e.target;
  const data = serialize(form);
  form.reset();
  return data;
};

export default connect(mapStateToProps, mapDispatchToProps)(
  BookSearchContainer
);
