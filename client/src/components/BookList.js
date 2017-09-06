import React from "react";
import Showable from "./Showable";
import Book from "./Book";

const BookList = ({ books, status, showBookHandler }) => (
  <div>
    <h2>Here are your books</h2>
    <Showable condition={status.isFetching}>
      <h4>Loading books...</h4>
    </Showable>
    <Showable condition={books.length}>
      {books.map(book => <Book book={book} key={book.id} onClick={showBookHandler(book.id)} />)}
    </Showable>
  </div>
);

export default BookList;
