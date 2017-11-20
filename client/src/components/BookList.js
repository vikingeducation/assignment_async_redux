import React from "react";
import PropTypes from "prop-types";

//creates li elements to populate book list from API data
let books = (booksArray, handleClick) => {
	if (booksArray.length > 0) {
		return booksArray.map((book, i) => (
			<li
				id={book.id}
				key={book.id}
				className="book-card"
				onClick={e => handleClick(e, book.id)}>
				<h3 className="book-title">{book.title}</h3>
				<figure className="book-cover">
					<img src={book.img_url} alt="book cover" />
					<figcaption>By: {book.author}</figcaption>
				</figure>
			</li>
		));
	}
	return [];
};

const BookList = ({ bookList, handleClick }) => {
	return <ul id="book-list">{books(bookList, handleClick)}</ul>;
};

BookList.propTypes = {
	bookList: PropTypes.object.isRequired
};
export default BookList;
