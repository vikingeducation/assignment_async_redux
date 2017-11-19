import React from "react";
import PropTypes from "prop-types";

let books = booksArray => {
	console.log("BAAAAA", booksArray);
	if (booksArray.length > 0) {
		return booksArray.map((book, i) => <li key={i}>{book.title}</li>);
	}
	return [];
};

const BookList = ({ bookList }) => {
	console.log("BBLL", bookList);
	return <ul>{books(bookList)}</ul>;
};

BookList.propTypes = {
	bookList: PropTypes.array.isRequired
};
export default BookList;
