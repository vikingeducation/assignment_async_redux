import React, { Component } from "react";
import SearchContainer from "./containers/SearchContainer";
// import

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>AWESOME OPPOSUM</h2>
        </div>
        <SearchContainer />
      </div>
    );
  }
}

export default App;
