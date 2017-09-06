const express = require("express");
const app = express();

require("dotenv").config();
const GOODREADS_KEY = process.env.GOODREADS_KEY;
const GOODREADS_SECRET = process.env.GOODREADS_SECRET;
const BASE_URL = "https://www.goodreads.com/search/index.xml";

app.get("/goodreads/title", (req, res, next) => {});

app.get("/goodreads/author", (req, res, next) => {});

app.get("/goodreads/bookID", (req, res, next) => {
  //URL: https://www.goodreads.com/book/show.FORMAT  (sample url)
  // HTTP method: GET
  // Parameters:
  // format: xml or json
  // key: Developer key (required).
  // id: A Goodreads internal book_id
  // text_only: Only show reviews that have text (default false)
  // rating: Show only reviews with a particular rating (optional)
});

app.listen(3001, "0.0.0.0", (req, res) => {
  console.log("listening on port 3000");
});
