import React, { Component } from 'react';
import BookSearchContainer from '../containers/BookSearchContainer';
import BookInfoModalContainer from '../containers/BookInfoModalContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookInfoModalContainer />
        <header className="App-header">
          <h1 className="App-title text-center">Book Search</h1>
        </header>
        <div className="container">
          <BookSearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
