import React from "react";
import Button from "./elements/Button";
import PropTypes from "prop-types";
import SelectedBook from "./SelectedBook";

const SelectedBookModal = ({ book, isModalOpen, isFetching, onCloseModal }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="btn btn-danger close-modal-x" onClick={onCloseModal}>
          &times;
        </button>
        {isFetching
          ? <span className="img-loader" />
          : <SelectedBook book={book} />}
        <br />
        <Button color="danger" onClick={onCloseModal}>Close</Button>
      </div>
    </div>
  );
};

SelectedBookModal.propTypes = {
  book: PropTypes.object.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export default SelectedBookModal;
