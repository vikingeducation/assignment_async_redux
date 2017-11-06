import React, { Component } from "react";
import GoodreadsContainer from "../containers/GoodreadsContainer";
import SearchContainer from "../containers/SearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Goodreads Book search</h1>
          <h2>Books</h2>
        </header>
        <SearchContainer />
        <GoodreadsContainer />
      </div>
    );
  }
}

export default App;
