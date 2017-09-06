import React from "react";
import Showable from "./Showable";
import Book from "./Book";

const BookList = ({ books, status }) => (
  <div>
    <h2>Here are your books</h2>
    <Showable condition={status.isFetching}>
      <h4>Searching for books...</h4>
    </Showable>
    <Showable condition={books.length}>
      {books.map(book => <Book book={book} key={book.id} />)}
    </Showable>
  </div>
);

export default BookList;
