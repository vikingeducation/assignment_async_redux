import React, { Component } from "react";
import Header from "./elements/Header";
import BookSearchContainer from "../containers/BookSearchContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"GoodReads Book Search"} />
        <div className="container">
          <BookSearchContainer />
        </div>
      </div>
    );
  }
}

export default App;
