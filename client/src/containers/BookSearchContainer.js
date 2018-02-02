import { connect } from 'react-redux';
import BookSearch from '../components/BookSearch';
import serialize from 'form-serialize';
import { searchBooks, getBookInfo } from '../actions';

const mapStateToProps = (state) => {
  return {
    books: state.bookCollection.books,
    isFetching: state.bookCollection.isFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchSubmit: (e) => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(searchBooks(data.search_query));
    },

    onBookInfoRequest: (e) => {
      e.preventDefault();
      document.getElementById('ModalButton').click();
      dispatch(getBookInfo(e.target.id));
    }
  };
};

const BookSearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookSearch);

export default BookSearchContainer;
