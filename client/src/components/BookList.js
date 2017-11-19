import React from "react";
import PropTypes from "prop-types";

let books = booksArray => {
	console.log("BAAAAA", booksArray);
	if (booksArray.length > 0) {
		return booksArray.map((book, i) => (
			<li key={i} className="book-card">
				<h3 className="book-title">{book.title}</h3>
				<figure className="book-cover">
					<img src={book.img_url} alt="book cover" />
					<figcaption>By:&nbsp;{book.author}</figcaption>
				</figure>
			</li>
		));
	}
	return [];
};

const BookList = ({ bookList }) => {
	console.log("BBLL", bookList);
	return <ul id="book-list">{books(bookList)}</ul>;
};

BookList.propTypes = {
	bookList: PropTypes.array.isRequired
};
export default BookList;
