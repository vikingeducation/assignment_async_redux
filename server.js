require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();
const app = require("express")();
const fs = require('fs')
const parseXMLtoJSON = require('xml2js').parseString;

const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = "https://www.goodreads.com/";

app.set("port", process.env.PORT || 3001);

// For later when we deploy to production, use the static
// assets built in the client/build folder instead of
// hosted at localhost:3000
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Extract checking the status of the response for reuse
const checkStatus = response => {
  // If response not okay, throw an error
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }

  // Otherwise just return the response
  return response;
};

const parseXML = response => {
  return new Promise((resolve, reject) => {
    parseXMLtoJSON(response, (err, result) => {
      resolve(result);
      reject(err);
    })
  });
};

app.get("/api/search", (req, res, next) => {
  console.log("Requesting search data from GoodReads...");
  const { q } = req.query;
  fetch(`${baseUrl}/search/index.xml?key=${GOODREADS_API_KEY}&q=${q}`)
    .then(checkStatus)
    .then(response => response.text())
    .then(parseXML)
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      next(error);
    });
});

app.get("/api/book", (req, res, next) => {
  console.log("Requesting search data from GoodReads...");
  const { id } = req.query;
  fetch(`${baseUrl}/book/show/${id}.xml?key=${GOODREADS_API_KEY}`)
    .then(checkStatus)
    .then(response => response.text())
    .then(parseXML)
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      next(error);
    });
});

// Defines next action for errors
const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
};

// Tell the app to use the errorHandler middleware
app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Find the server at http://localhost:${app.get("port")}/`);
});
