import React from "react";

const GoodreadContent = ({ goodreads }) => {
  return goodreads.GoodreadsResponse.search.results.work.map(each => {
    if (each.best_book.author) {
      return (
        <div className="card" key={each.best_book.id}>
          <p>{each.best_book.title}</p>
          <p>{each.best_book.author.name}</p>
          <img
            className="image"
            style={{ maxWidth: "100px" }}
            src={each.best_book.image_url}
            alt={each.best_book.title}
          />
        </div>
      );
    }
  });
};

const Goodread = ({ goodreads, isFetching }) => {
  // if (goodreads.GoodreadsResponse) {
  //   console.log(goodreads.GoodreadsResponse.search.results.work);
  // }

  return (
    <div className="Goodread">
      <h2>Books</h2>
      {goodreads.GoodreadsResponse ? (
        <h4>
          Searched: {JSON.stringify(goodreads.GoodreadsResponse.search.query)}
        </h4>
      ) : (
        ""
      )}
      <div className="card-group">
        {isFetching ? (
          <p>Loading...</p>
        ) : goodreads.GoodreadsResponse ? (
          <GoodreadContent goodreads={goodreads} />
        ) : (
          <p>Loading...still</p>
        )}
      </div>
    </div>
  );
};

export default Goodread;
