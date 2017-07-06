import React from "react";

const parseAuthors = authors => {
  if (!Array.isArray(authors)) {
    return <span>{authors.name}</span>;
  }

  if (authors.length === 2) {
    return <span>{authors[0].name} and {authors[1].name}</span>;
  }

  let authorsString = "";
  authors.forEach((author, index) => {
    if (index === authors.length - 1) {
      authorsString += `and ${author.name}`;
    } else {
      authorsString += `${author.name}, `;
    }
  });

  return <span>{authorsString}</span>;
};

const SelectedBook = ({ book }) => {
  const authors = parseAuthors(book.authors.author);
  return (
    <div className="modal-details">
      <h1>
        {" "}{book.title}{" "}
      </h1>
      <h2> By {authors} </h2>
      <img src={book.image_url} alt={book.title} className="img-responsive" />
      <h4>Published By: {book.publisher}</h4>
      <h4>Description:</h4>
      <p>{book.description}</p>
      <div className="goodreads-widget">
        <div dangerouslySetInnerHTML={{ __html: book.reviews_widget }} />
      </div>
      <h4>Average Rating: {book.average_rating}</h4>
    </div>
  );
};

export default SelectedBook;
