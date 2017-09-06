import { connect } from "react-redux";
import BookList from "../components/BookList";
import { fetchBook, hideModal } from "../actions";

const mapStateToProps = state => ({
  books: state.books,
  status: state.status,
  modal: state.modal
});
const mapDispatchToProps = dispatch => ({
  showBookHandler: id => () => {
    dispatch(fetchBook(id));
  },
  hideModal: () => {dispatch(hideModal())}
});
const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(
  BookList
);

export default BookListContainer;
