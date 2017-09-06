const express = require("express");
const app = express();
require("dotenv").config({ path: "../" });
const API_CLIENT_KEY = process.env.API_CLIENT_KEY;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

const port = 3001;
const baseUrl = `https://www.goodreads.com`;

function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
}

//handle some errors
function errorHandler(err, req, res, next) {
  console.log(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

// Tell the app to use the errorHandler middleware
app.use(errorHandler);

const parseString = require("xml2js").parseString;
// const xml2JSON = parseString(xml, function(err, result) {
//   return result;
// });

//routes
app.get("/api/book_search_stuff", (req, res, next) => {
  const searchParams = "stuff";
  fetch(`${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}&q=${searchParams}`)
    .then(response => {
      return parseString(response, () => {
        return response;
      });
    })
    .then(checkStatus)
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      next(error);
    });
});

app.get("/api/review_search_stuff", (req, res, next) => {
  const bookId = //some thing
  const searchParams = "stuff";
  fetch(`${baseUrl}/book/show/${bookId}.json?key=${API_CLIENT_KEY}`)
    .then(response => {
      return parseString(response, () => {
        return response;
      });
    })
    .then(checkStatus)
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      next(error);
    });
});

app.listen(port, () => {
  console.log(`Find the server at http://localhost:${port}/`);
});
