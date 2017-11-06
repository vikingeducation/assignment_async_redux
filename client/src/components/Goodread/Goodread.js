import React from "react";
import PropTypes from "prop-types";
import GoodreadContent from "./GoodreadContent";
import BookModal from "./BookModal";
import Showable from "../elements/Showable";

const Goodread = ({ goodreads, isFetching, bookDetails, bookSelected }) => (
  <div className="Goodread">
    <div className="card-group">
      {isFetching ? (
        <p>Loading...</p>
      ) : goodreads ? (
        <div>
          <Showable show={!!bookSelected.title}>
            <BookModal getBookInfo={bookSelected} />
          </Showable>

          <GoodreadContent goodreads={goodreads} bookDetails={bookDetails} />
        </div>
      ) : (
        <p>Loading...failed, refresh</p>
      )}
    </div>
  </div>
);

Goodread.propTypes = {
  goodreads: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Goodread;
