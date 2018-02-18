import React, { Component } from 'react';
import JumbotronFluid from './elements/JumbotronFluid'
import SearchContainer from '../containers/SearchContainer'
import ModalContainer from '../containers/ModalContainer'


class App extends Component {


  render() {
    return (
      <div className="App">
        <JumbotronFluid
        heading='Good Reads Book Search'
        lead='The book search tool using the Goodreads API. Goodreads has several endpoints for searching books and also contains a lot of review data.'
        />


        <SearchContainer />

        <ModalContainer />

      </div>
    );
  }
}

export default App;
