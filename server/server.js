// require("es6-promise").polyfill;
require("isomorphic-fetch");
const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const API_CLIENT_KEY = process.env.API_CLIENT_KEY;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

const port = 3001;
const baseUrl = `https://www.goodreads.com`;

function checkStatus(response) {
  console.log("res = ", response);
  // if (!response.ok) {
  //   const error = new Error(response.statusText);
  //   error.response = response;
  //   throw error;
  // }

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

//handle XML
const parseString = require("xml2js").parseString;
// const xml2JSON = parseString(xml, function(err, result) {
//   return result;
// });

//routes
app.get("/api/book", (req, res, next) => {
  //no search params is edge case to be treated later
  const searchParams = req.query.search || "bible";
  console.log(
    "url =  ",
    `${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}&q=${searchParams}`
    // `${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}{q}`
  );
  fetch(`${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}&q=${searchParams}`)
    .then(response => {
      return parseString(response, data => {
        return data;
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

//FORGET THE WIDGETS, GRAB OTHER INFO
app.get("/api/review/:id", (req, res, next) => {
  const bookId = req.params.id;
  fetch(`${baseUrl}/book/show/${bookId}.json?key=${API_CLIENT_KEY}`)
    .then(checkStatus)
    .then(JSON.parse)
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      next(error);
    });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});
