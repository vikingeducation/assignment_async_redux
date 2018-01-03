import React from "react";
import Modal from "./Modal";

let App = ({ books, book, onSubmit, onClick, getGoodreads, clearBook }) => {
  console.log(books);
  console.log(book);
  let bookArray = books.map(el => {
    return (
      <div key={el.id}>
        <a href="/" bookid={el.id} onClick={onClick}>
          {el.title} by {el.author}
        </a>
      </div>
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Goodreads!</h1>
      </header>

      {bookArray}
      <button onClick={getGoodreads}>See books</button>

      <form name="search" onSubmit={onSubmit}>
        <input type="text" name="search" placeholder="Search term here!" />
        <input type="submit" />
      </form>

      <Modal book={book} clearBook={clearBook}/>
    </div>
  );
};

export default App;
