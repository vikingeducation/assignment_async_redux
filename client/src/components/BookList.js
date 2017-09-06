import React from "react";

const BookList = ({ books }) => (
  <div>books: {books.map(b => <div>{b.title}</div>)}</div>
);

export default BookList;
