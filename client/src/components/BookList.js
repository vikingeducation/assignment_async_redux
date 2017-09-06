import React from "react";

const BookList = ({ books, fetchBook }) => (
  <div className="row">
    {books.map(b => (
      <div className="col-xs-3">
        <img src={b.image} />
        <a onClick={fetchBook(b.id)}>
          <h3>{b.title}</h3>
        </a>
        <p>{b.author}</p>
      </div>
    ))}
  </div>
);

export default BookList;
