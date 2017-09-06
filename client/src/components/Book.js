import React from "react";
import { Panel } from "react-bootstrap";

const Book = ({ book, onClick }) => {
  const title = (
    <h3>
      {book.title} <small>{book.author}</small>
    </h3>
  );
  return (
    <Panel header={title} onClick={onClick}>
      <img src={book.image} alt="" />
      Year: {book.year} Rating: {book.rating}
    </Panel>
  );
};

export default Book;
