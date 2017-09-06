import React from "react";
import BookListContainer from "../containers/BookListContainer";
import SearchFormContainer from "../containers/SearchFormContainer";

const App = () => {
  return (
    <div>
      <BookListContainer />
      <SearchFormContainer />
    </div>
  );
};

export default App;
