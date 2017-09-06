import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './Book.css';
import Book from '../../components/Book';

class BookList extends Component {
	componentDidMount() {
		this.props.actions.getInitialBooks();
	}

	render() {
		const bookList = this.props.BookReducer.books;
		if (!bookList || !Array.isArray(bookList) || bookList.length === 0)
			return null;
		return (
			<ul className="list-unstyled">
				{bookList.map(book => <Book key={book.id} {...book} />)}
			</ul>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{ ...actions.BookActions, ...actions.AuthorActions },
		dispatch
	)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
