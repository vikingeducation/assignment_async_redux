// require("es6-promise").polyfill;
require("isomorphic-fetch");
const express = require("express");
const app = express();
require("dotenv").config({ path: "../.env" });
const API_CLIENT_KEY = process.env.API_CLIENT_KEY;
const API_CLIENT_SECRET = process.env.API_CLIENT_SECRET;

// console.log("key = ", API_CLIENT_KEY)

const port = 3001;
const baseUrl = `https://www.goodreads.com`;
//
// function checkStatus(response) {
//   console.log("response ");
//   if (!response.Body.statusText === "OK") {
//     const error = new Error(response.statusText);
//     error.response = response;
//     throw error;
//   }
//
//   // Otherwise just return the response
//   return response;
// }

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

//routes
app.get("/api/book", (req, res, next) => {
  //no search params is edge case to be treated later
  const searchParams = req.query.search || "bible";
  fetch(`${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}&q=${searchParams}`)
    .then(res => res.text())
    .then(response => {
      return new Promise((resolve, reject) => {
        parseString(response, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });
    })
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
