import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Spinner from './elements/Spinner';
import { stringToFormattedNumber } from '../helpers';
import { Markup } from 'interweave';

const BookInfoModal = ({ isOpen, toggleModal, book, isFetching, createMarkup }) => {
  return (
    <div>
      <Button id="ModalButton" className="hidden" onClick={toggleModal}/>
      <Modal isOpen={isOpen} toggle={toggleModal} size="lg">
        {isFetching || !book
          ? <Spinner />
          : (
            <div>
              <ModalHeader toggle={toggleModal}>
                {book.title}
                <small className="modal-heading-author text-muted">by {book.author}</small>
              </ModalHeader>
              <ModalBody>
                <div className="row justify-content-left">
                  <div className="book-image">
                    <img src={book.image} alt={book.title} />
                  </div>
                  <div className="col">
                    <Markup
                      tagName="p"
                      content={book.description}
                    />
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="RatingInfo">
                    <p>Average Rating: {book.averageRating}</p>
                  </div>
                  <div className="RatingInfo">
                    <p>Total Ratings: {stringToFormattedNumber(book.ratingsCount)}</p>
                  </div>
                </div>
                <div dangerouslySetInnerHTML={createMarkup(book.reviews)} />
              </ModalBody>
            </div>
          )}
        <ModalFooter>
          <Button color="danger" onClick={toggleModal} >Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

BookInfoModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  book: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  createMarkup: PropTypes.func.isRequired
};

export default BookInfoModal;
