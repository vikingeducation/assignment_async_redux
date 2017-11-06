import React from "react";
import PropTypes from "prop-types";

const GoodreadContent = ({ goodreads, bookDetails }) => {
  if (Array.isArray(goodreads) !== true) {
    return <p>Error</p>;
  }
  return goodreads.map(each => {
    if (each.best_book.title.length) {
      return (
        <div
          className="card"
          key={each.best_book.id}
          name={each.best_book.id}
          onClick={() => bookDetails(each.best_book.id)}
        >
          <p>{each.best_book.title}</p>
          <p>{each.best_book.author ? each.best_book.author.name : ""}</p>
          <img
            className="image"
            style={{ maxWidth: "100px" }}
            src={each.best_book.image_url}
            alt={each.best_book.title}
          />
        </div>
      );
    } else {
      return false;
    }
  });
};

GoodreadContent.propTypes = {
  goodreads: PropTypes.array.isRequired
};

export default GoodreadContent;
