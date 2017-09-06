import React from "react";
import Link from "./Link";

const LinkList = props => {
  const { bookList } = props;

  const buttonList = bookList.map(book => {
    return <Link key={book.id} name={book.best_book.title} />;
  });

  return (
    <div>
      {buttonList}
    </div>
  );
};
export default LinkList;

// good response
// -search
// --results = [ {} {} ]
