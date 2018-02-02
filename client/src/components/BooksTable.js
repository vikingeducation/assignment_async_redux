import React from 'react';
import PropTypes from 'prop-types';
import Table from './elements/Table';
import Spinner from './elements/Spinner';

const BooksTable = ({ books, isFetching, onBookInfoRequest }) => {
  const tableHead = (
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
    </tr>
  );

  const tableRows = books.map(book => {
    return (
      <tr key={book.id}>
        <td><a href="/" id={book.id} onClick={onBookInfoRequest}>{book.title}</a></td>
        <td>{book.author}</td>
      </tr>
    );
  });

  if (!isFetching) {
    return (
      <div className="BooksTable">
        {books.length
          ? <Table head={tableHead} rows={tableRows} />
          : <p className="text-center text-muted">Search for books using the form</p>}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

BooksTable.propTypes = {
  books: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onBookInfoRequest: PropTypes.func.isRequired
};

export default BooksTable;

