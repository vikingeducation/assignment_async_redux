import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid'
import SearchContainer from '../containers/SearchContainer'
// import Search from './Search'


class App extends Component {


  render() {
    return (
      <div className="App">
        <JumbotronFluid
        heading='Good Reads Book Search'
        lead='The book search tool using the Goodreads API. Goodreads has several endpoints for searching books and also contains a lot of review data.'
        />


        <SearchContainer />

      </div>
    );
  }
}

export default App;
