import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ book, onClick }) => {
  const htmlDesc = { __html: book.description };
  const htmlRev = { __html: book.reviews };
  const modalStyle = {
    maxHeight: "100%",
    overflowY: "auto"
  };
  return (
    <div className="static-modal">
      <Modal.Dialog onClick={onClick} style={modalStyle}>
        <Modal.Header closeButton>
          <Modal.Title>
            <a href={book.url}>
              <h3>
                {book.title} <small>{book.author}</small>
              </h3>
            </a>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <a href={book.url}>
            <img src={book.image} alt="" />
          </a>
          Year: {book.year} Rating: {book.rating}
          <h4>Description:</h4>
          <p dangerouslySetInnerHTML={htmlDesc} />
          <div dangerouslySetInnerHTML={htmlRev} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClick}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default BookModal;
