import React from 'react';
import Button from './elements/Button';

const BookCard = ({book}) => {
  const title = book.best_book.title;
  const author = book.best_book.author.name;
  const imageUrl = book.best_book.image_url;
  return (
    <div className="col-md-4">
      <div className="col-md-12 well book-card">
        <h4>{title}</h4>
        <h4>By: {author}</h4>
        <img src={imageUrl} alt={title} className="img-responsive" />
        <Button color="success">View Details</Button>
      </div>
    </div>
  );
};

export default BookCard;