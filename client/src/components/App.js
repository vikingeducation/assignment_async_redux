import React from "react";

let App = ({ books, onSubmit, getGoodreads }) => {
  console.log(books);
  let book = books.map(book => {
    return (
      <div key={book.id}>
        <p>
          {book.title} by {book.author}
        </p>
      </div>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
      {book}
      <button onClick={getGoodreads}>See books</button>
      <form name="search" onSubmit={onSubmit}>
        <input type="text" name="search" placeholder="Search term here!" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default App;
