import React from "react";
import "./BookList.css";

const BookList = ({ books, fetchBook, bookModal }) => {
  const modalMode = bookModal ? <div className="shaded" /> : null;
  return (
    <div>
      {modalMode}
      <div className="row">
        {books.map(b => (
          <a onClick={fetchBook(b.id)} key={b.id}>
            <div className="col-xs-3 well book" style={{ height: "300px" }}>
              <img alt=":(" src={b.image} />
              <h3>{b.title}</h3>
              <p>{b.author}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BookList;
