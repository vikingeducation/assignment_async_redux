import React from "react";
import Showable from "./Showable";
import Book from "./Book";
import BookModal from "./BookModal";

const BookList = ({ books, status, showBookHandler, modal, hideModal }) => (
  <div>
    <h2>Here are your books</h2>
    <Showable condition={status.isFetching}>
      <h4>Loading books...</h4>
    </Showable>
    <Showable condition={books.length}>
      {books.map(book => (
        <Book book={book} key={book.id} onClick={showBookHandler(book.id)} />
      ))}
    </Showable>
    <Showable condition={modal.visible}>
      <BookModal book={modal.book} onClick={hideModal} />
    </Showable>
  </div>
);

export default BookList;
