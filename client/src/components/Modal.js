import React from 'react'
import PropTypes from 'prop-types'
import Button from './elements/Button'

const Modal = ({show, reviews, book, isFetching, closeModal}) => {

  if (!show) {
    return null
  }

  const backdropStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 50
      };

    // The modal "window"
  const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30
  };

  return (
    <div className="backdrop" style={backdropStyle}>
      <div className='modal' style={modalStyle}>
        <a href='#' onClick={closeModal}>
          <img src={book.best_book.image_url} alt={book.best_book.title} /><br />
        </a>
        {book.best_book.id}<br />

        <div className="footer">
          <Button onClick={closeModal}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  reviews: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default Modal
