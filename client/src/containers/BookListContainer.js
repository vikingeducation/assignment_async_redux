import { connect } from "react-redux";
import BookList from "../components/BookList";
import {showModal, hideModal} from "../actions";

const mapStateToProps = state => ({ books: state.books, status: state.status });
const mapDispatchToProps = dispatch => ({showBookHandler: (id) => (e) => {
	//
}})
const BookListContainer = connect(mapStateToProps)(BookList);

export default BookListContainer;
