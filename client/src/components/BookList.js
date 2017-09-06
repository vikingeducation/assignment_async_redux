import React from "react";
import BookModal from "./BookModal";

const BookList = ({ books, fetchBook }) => {
  return (
    <div>
      <div className="row">
        {books.map(b => (
          <div key={b.id} className="col-xs-3">
            <img src={b.image} />
            <a onClick={fetchBook(b.id)}>
              <h3>{b.title}</h3>
            </a>
            <p>{b.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
