import React from "react";

const Modal = ({ book, clearBook }) => {
  // Render nothing if the "show" prop is false
  if (!book) {
    return null;
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
      maxWidth:800,
      minHeight: 300,
      margin: '0 auto',
      padding: 30
    };

  return (
    <div className="backdrop" style={backdropStyle} >
      <div className="modal" style={modalStyle}>
        <div>
          <button onClick={clearBook}>Close</button>

          <img src={book.imageURL} />
          <div dangerouslySetInnerHTML={{__html: book.description}} />
          <p>Average Rating: {book.averageRating}</p>
          <p>Ratings: {book.ratingsCount}</p>
          <p>Reviews: {book.reviewsCount}</p>

        </div>
        <div dangerouslySetInnerHTML={{__html: book.reviewWidget}}>
        </div>
      </div>
    </div>
  );
};

export default Modal;
