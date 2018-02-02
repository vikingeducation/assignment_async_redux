require('es6-promise').polyfill();
require('isomorphic-fetch');
require('dotenv').config();
const parseString = require('xml2js').parseString;
const express = require('express');
const app = express();

const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = 'https://www.goodreads.com';

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const checkStatus = (response) => {
  if (!response.ok) {
    const error = new Error(response.message);
    error.response = response;
    throw error;
  }

  return response.text();
};

const convertXmlToJson = (xml) => {
  return new Promise((resolve, reject) => {
    parseString(xml, function (err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
};

app.get('/api/goodreads/search', (req, res, next) => {
  const  searchTerm = req.query.q;

  if (!searchTerm) {
    const error = new Error('noQuery');
    error.response = { status: 400, message: 'Bad request - No search query provided' };
    throw error;
  }

  fetch(`${ baseUrl }/search/index.xml?key=${ GOODREADS_API_KEY }&q=${ searchTerm }&format=xml`)
    .then(checkStatus)
    .then(convertXmlToJson)
    .then(json => {
      const booksData = json.GoodreadsResponse.search[0].results[0].work;
      let books = [];

      for (let rawBook of booksData) {
        const book = rawBook.best_book[0];
        books.push({
          id: book.id[0]._,
          title: book.title[0],
          author: book.author[0].name[0]
        });
      }

      res.json(books);
    })
    .catch(error => {
      next(error);
    });
});

app.get('/api/goodreads/book/:id', (req, res, next) => {
  const bookId = req.params.id;

  if (!bookId) {
    const error = new Error('noBook');
    error.response = { status: 400, message: 'Bad request - No book id provided' };
    throw error;
  }

  fetch(`${ baseUrl }/book/show/${bookId}.xml?key=${ GOODREADS_API_KEY }&format=xml&text_only=true`)
    .then(checkStatus)
    .then(convertXmlToJson)
    .then(json => {
      const bookData = json.GoodreadsResponse.book[0];

      const book = {
        title: bookData.title[0],
        author: bookData.authors[0].author[0].name[0],
        description: bookData.description[0].split('<br /><br />')[0] || 'No Description Available',
        image: bookData.image_url[0],
        averageRating: bookData.average_rating[0],
        ratingsCount: bookData.ratings_count[0],
        reviews: bookData.reviews_widget[0]
          .split('</style>')[1]
          .replace('width="565"', 'width="80%"')
      };

      res.json(book);
    })
    .catch(error => {
      next(error);
    });
});

const errorHandler = (err, req, res, next) => {
  res.status(err.response ? err.response.status : 500);
  res.json(err.response);
  next();
};

app.use(errorHandler);

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
