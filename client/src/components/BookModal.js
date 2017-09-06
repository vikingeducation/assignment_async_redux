import React from "react";
import "./BookModal.css";

const BookModal = ({ bookModal, book, closeModal }) => {
  if (!bookModal) return null;
  return (
    <div className="well" id="modal">
      <button className="btn btn-danger" onClick={closeModal}>
        X
      </button>
      <h1>{book.title}</h1>
      <h2>{book.authors.map(author => author)}</h2>
      <img alt=":(" src={book.image} />
      <p>
        Publication year: {book.publicationYear} <br /> Publisher:{" "}
        {book.publisher}
      </p>
      <p>{book.description}</p>
      <p>
        Purchase on {book.buyLinkName} <a href={book.buyLink}>here</a>
      </p>
      <p>GoodReads rating: {book.averageRating}</p>
    </div>
  );
};

export default BookModal;
