import React from "react";

const BookModal = ({ bookModal, book, closeModal }) => {
  if (!bookModal) return null;
  return (
    <div>
      <h1 onClick={closeModal}>X</h1>
      <h1>{book.title}</h1>
    </div>
  );
};

export default BookModal;
