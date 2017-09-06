import React from "react";
import BookModal from "./BookModal";

const BookList = ({ books, fetchBook }) => {
  return (
    <div>
      <div className="row">
        {books.map(b =>
          <a onClick={fetchBook(b.id)} key={b.id}>
            <div className="col-xs-3 well" style={{ height: "300px" }}>
              <img src={b.image} />
              <h3>
                {b.title}
              </h3>
              <p>
                {b.author}
              </p>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default BookList;
