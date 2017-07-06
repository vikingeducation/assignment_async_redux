import React from 'react';
import PropTypes from 'prop-types';
import BookCard from './BookCard';
import Input from './elements/Input';
import InputGroup from './elements/InputGroup';
import Button from './elements/Button';

const buildBookCards = books => {
  let results;

  if (books.length === 0) {
    results = <p>Sorry, no books were found!</p>
  } else {
    results = books.slice(0, 12).map(book => (
      <BookCard key={book.id._} book={book} />
    ));
  }

  return results;
};

const BookSearch = ({books, isFetching, onSearchSubmit}) => {
  let bookCards = buildBookCards(books);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
        <h1>GoodReads Book Search</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 well">
          <form onSubmit={onSearchSubmit}>
            <InputGroup name="q" labelText="Search for books by title or author">
              <Input name="q" type="text"/>
            </InputGroup>
            <Button color="success" type="submit">Search!</Button> 
          </form>
        </div>
      </div>
      <div className="row">
        {isFetching ? 
        <span className="img-loader"></span> :
        bookCards}
      </div>
    </div>
  );
};

BookSearch.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired
};

export default BookSearch;