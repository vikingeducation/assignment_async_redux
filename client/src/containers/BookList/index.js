import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './Book.css';

const Book = ({ id, rating, ratingsCount, year, book }) => {
	const { title, author, img } = book;
	return (
		<li className="row">
			<div className="col-md-2">
				<div className="thumbnail">
					<img className="book-img" src={img} alt="" />
				</div>
			</div>
			<div className="col-md-6 col-md-offset-1">INFORMATION</div>
		</li>
	);
};

class BookList extends Component {
	componentDidMount() {
		this.props.actions.getInitialBooks();
	}

	render() {
		console.log('book', this.props.BookReducer);
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
