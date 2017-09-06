import React from "react";
import { Modal, Button } from "react-bootstrap";

const BookModal = ({ book, onClick }) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
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
        <p>{book.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onClick}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

export default BookModal;
