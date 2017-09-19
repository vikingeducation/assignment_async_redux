import React from "react";
import SearchFormContainer from "../containers/SearchFormContainer";
import BookListContainer from "../containers/BookListContainer";

const App = () => (
  <div className="container">
    <h2>Find you some books!</h2>
    <SearchFormContainer />
    <BookListContainer />
  </div>
);

export default App;
