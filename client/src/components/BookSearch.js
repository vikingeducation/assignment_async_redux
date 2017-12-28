import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchInfoSection from './elements/SearchInfoSection';
import SearchForm from './SearchForm';
import BooksTable from './BooksTable';

class BookSearch extends Component {
  render() {
    const { books, isFetching, onSearchSubmit, onBookInfoRequest } = this.props;
    const searchForm = <SearchForm onSubmit={onSearchSubmit} />;

    return (
      <div className="BookSearch row justify-content-center">
        <SearchInfoSection search={searchForm} col="10">
          <BooksTable books={books} isFetching={isFetching} onBookInfoRequest={onBookInfoRequest} />
        </SearchInfoSection>
      </div>
    );
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  onBookInfoRequest: PropTypes.func.isRequired
};

export default BookSearch;
