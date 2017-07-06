import React from "react";
import PropTypes from "prop-types";
import Button from "./elements/Button";

const BookCard = ({ book, onSelectBookSubmit }) => {
  const title = book.best_book.title;
  const author = book.best_book.author.name;
  const imageUrl = book.best_book.image_url;
  return (
    <div className="col-md-4">
      <div className="col-md-12 well book-card">
        <h4>{title}</h4>
        <h4>By: {author}</h4>
        <img src={imageUrl} alt={title} className="img-responsive" />
        <form onSubmit={onSelectBookSubmit}>
          <input type="hidden" name="id" value={book.best_book.id._} />
          <Button color="success" type="submit">View Details</Button>
        </form>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  onSelectBookSubmit: PropTypes.func.isRequired
};

export default BookCard;
