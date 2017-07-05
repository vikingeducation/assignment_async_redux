import React from 'react';
import BookCard from './BookCard';

// Build out a search bar and make sure it works
// In each bookCard, make a "book details container"
// passes in id of book
// and maps a click that will set the selectedBook state to the new book
//

const BookSearch = ({books, isFetching}) => {
  const bookCards = books.slice(0, 12).map(book => (
    <BookCard key={book.id._} book={book} />
  ));
  return (
    <div className="row">
      <div className="col-md-12">
      <h1>GoodReads Book Search</h1>
      </div>
      <div className="row">
        {bookCards}
      </div>
    </div>
  );
};

export default BookSearch;