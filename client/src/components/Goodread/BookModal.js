import React from "react";
import PropTypes from "prop-types";

const BookModal = ({ getBookInfo }) => {
  var author = "";
  if (getBookInfo.authors) {
    if (Array.isArray(getBookInfo.authors.author)) {
      author = getBookInfo.authors.author[0].name;
    } else if (getBookInfo.authors.author.name) {
      author = getBookInfo.authors.author.name;
    }
  }
  return (
    <div className="card" id="myModal" role="dialog">
      <a href={getBookInfo.link}>
        <p>{getBookInfo.title}</p>
      </a>
      <p>{author}</p>
      <img
        className="image"
        style={{ maxWidth: "100px" }}
        src={getBookInfo.image_url}
      />
      <p>
        {Array.isArray(getBookInfo.description)
          ? ""
          : getBookInfo.description ? getBookInfo.description : ""}
      </p>
      <div id="goodreads-widget">
        <div id="gr_header">
          <h1>
            <a rel="nofollow" href={getBookInfo.link}>
              Goodreads reviews for {getBookInfo.title}
            </a>
          </h1>
        </div>
        <iframe
          id="the_iframe"
          src={
            "https://www.goodreads.com/api/reviews_widget_iframe?did=31342&format=html&header_text=Goodreads+reviews+for+" +
            getBookInfo.link +
            "&isbn=" +
            getBookInfo.isbn13 +
            "&links=660&review_back=fff&stars=000&text=000"
          }
          width="565"
          height="400"
          frameBorder="0"
        />
        <div id="gr_footer">
          <a
            className="gr_branding"
            target="_blank"
            rel="nofollow"
            href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?utm_medium=api&utm_source=reviews_widget"
          >
            Reviews from Goodreads.com
          </a>
        </div>
      </div>
    </div>
  );
};

BookModal.propTypes = {
  getBookInfo: PropTypes.object.isRequired
};

export default BookModal;
