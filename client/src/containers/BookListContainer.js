import React from "react";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import { searchBooks, fetchBook } from "../actions";

class BookListContainer extends React.Component {
  componentDidMount() {
    this.props.getInitialBooks();
  }

  render() {
    return (
      <div className="container">
        <BookList
          bookModal={this.props.bookModal}
          books={this.props.books}
          fetchBook={this.props.getBook}
        />
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
    },
    getBook: id => () => dispatch(fetchBook(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
