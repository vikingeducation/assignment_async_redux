require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();
const express = require("express");
const app = express();
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = "https://goodreads.com/";
var fastXmlParser = require("fast-xml-parser");

app.set("port", process.env.PORT || 3001);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Extract checking status of response
function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

function parseJson(response) {
  //Parse xml to json from buffer
  return fastXmlParser.parse(response.body._buffer.toString());
}

app.get("/api/goodreads", (req, res, next) => {
  console.log("Requesting Book Data...");
  fetch(`${baseUrl}search/index.xml?key=${GOODREADS_API_KEY}&q=Ender`)
    .then(checkStatus)
    .then(parseJson)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      next(error);
    });
});

function errorHandler(err, req, res, next) {
  console.error(`Error: ${err.stack}`);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
}

app.use(errorHandler);

app.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}/`);
});
