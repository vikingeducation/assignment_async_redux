// Require es6-promise polyfill and isomorphic-fetch
require("isomorphic-fetch");

// Dotenv
require("dotenv").config();
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = "https://goodreads.com";

// Express
const express = require("express");
const app = express();

// Set development port to 3001
app.set("port", process.env.PORT || 3001);

// When in production, only serve static assets
// from the client/build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Extract check status function for reuse
const checkStatus = response => {
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
};

const convert = require("xml-to-json-promise").xmlDataToJSON;
app.get("/api/books", async (req, res, next) => {
  try {
    const query = req.query.query || "";
    const search = req.query.all || "all";
    console.log("Requesting Book data from GoodReads...");
    const url = `${baseUrl}/search/index.xml?key=${GOODREADS_API_KEY}&q=${query}&search[field]=${search}`;
    const response = checkStatus(await fetch(url));
    const text = await response.text();
    res.json(await convert(text));
  } catch (error) {
    next(error);
  }
});

// Defines next action for errors
app.use((err, req, res, next) => {
  console.error("Error: ", err.stack);
  res.status(err.response ? err.response.status : 500);
  res.json({ error: err.message });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
