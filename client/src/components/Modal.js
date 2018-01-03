import React from "react";

const Modal = ({ book }) => {
  // Render nothing if the "show" prop is false
  if (!book) {
    return null;
  }
  return (
    <div>
      <p>
        {book.description}
        {book.averageRating}
        {book.ratingsCount}
        {book.reviewsCount}
      </p>
    </div>
  );
};

export default Modal;
