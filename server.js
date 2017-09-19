// require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();
const express = require("express");
const app = express();
const parseString = require("xml2js").parseString;
const baseURL = "https://www.goodreads.com/search.xml";
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;

app.set("port", process.env.PORT || 3000);

function checkStatus(response) {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}

app.get("/api/goodreads", async (req, res, next) => {
  console.log("Requesting Goodreads data...");

  try {
    let response = await fetch(`${baseURL}?key=${GOODREADS_API_KEY}`);
    response = checkStatus(response);
    response = await response.text();
    console.log(response);
    response = parseString(response, (err, result) => {
      if (err) {
        return res.status(500).send("Could not parse XML response");
      }
      return res.json(result);
    });
  } catch (err) {
    next(err);
  }
});

app.listen(app.get("port"), () => {
  console.log(`server running at port ${app.get("port")}`);
});
