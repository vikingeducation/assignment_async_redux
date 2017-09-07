import React from "react";
import BookListContainer from "../containers/BookListContainer";
import SearchFormContainer from "../containers/SearchFormContainer";
import BookModalContainer from "../containers/BookModalContainer";

const App = () => {
  return (
    <div>
      <SearchFormContainer />
      <BookModalContainer />
      <BookListContainer />
    </div>
  );
};

export default App;
