import React from "react";
import PropTypes from "prop-types";
import SelectedBookModal from "../components/SelectedBookModal";
import BookCard from "./BookCard";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const buildBookCards = (books, onSelectBookSubmit) => {
  let results;

  if (books.length === 0) {
    results = <p>Sorry, no books were found!</p>;
  } else {
    results = books
      .slice(0, 12)
      .map(book =>
        <BookCard
          key={book.id._}
          book={book}
          onSelectBookSubmit={onSelectBookSubmit}
        />
      );
  }

  return results;
};

const BookSearch = props => {
  let {
    books,
    isFetchingAll,
    selectedBook,
    isFetchingSelected,
    isModalOpen,
    onSearchSubmit,
    onSelectBookSubmit,
    onCloseModal
  } = props;
  let bookCards = buildBookCards(books, onSelectBookSubmit);
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>GoodReads Book Search</h1>
        </div>
      </div>
      <SelectedBookModal
        isModalOpen={isModalOpen}
        onCloseModal={onCloseModal}
        book={selectedBook}
        isFetching={isFetchingSelected}
      />
      <div className="row">
        <div className="col-md-6 col-md-offset-3 well">
          <form onSubmit={onSearchSubmit}>
            <InputGroup
              name="q"
              labelText="Search for books by title or author"
            >
              <Input name="q" type="text" />
            </InputGroup>
            <Button color="success" type="submit">Search!</Button>
          </form>
        </div>
      </div>
      <div className="row">
        {isFetchingAll ? <span className="img-loader" /> : bookCards}
      </div>
    </div>
  );
};

BookSearch.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
  onSelectBookSubmit: PropTypes.func.isRequired
};

export default BookSearch;
