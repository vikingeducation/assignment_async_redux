import React, { Component } from 'react';
import SearchContainer from '../containers/SearchContainer'
import ResultsContainer from '../containers/ResultsContainer'
import ModalContainer from '../containers/ModalContainer'
import PaginationContainer from '../containers/PaginationContainer'


class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="App-header">
          <h2 className="text-center">Book Review Finder</h2>
        </div>
        <SearchContainer />
        <p className="text-right">Powered by <a href="https://www.goodreads.com">Goodreads</a></p>
        <hr />
        <ResultsContainer />
        <ModalContainer />
        <PaginationContainer />
      </div>
    );
  }
}

export default App;
