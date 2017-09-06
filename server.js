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
const ensureFetch = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  const text = await response.text();
  return await convert(text, { explicitArray: false });
};

const convert = require("xml-to-json-promise").xmlDataToJSON;
app.get("/api/books", async (req, res, next) => {
  try {
    const query = req.query.query || "";
    const field = req.query.field || "all";
    console.log("Searching for books from GoodReads...");
    const url = `${baseUrl}/search/index.xml?key=${GOODREADS_API_KEY}&q=${query}&search[field]=${field}`;
    const jsonData = await ensureFetch(url);
    const worksArray = jsonData.GoodreadsResponse.search.results.work.map(
      work => {
        return {
          id: work.best_book.id._,
          title: work.best_book.title,
          author: work.best_book.author.name,
          image: work.best_book.image_url,
          year: work.original_publication_year._,
          rating: work.average_rating
        };
      }
    );

    res.json(worksArray);
  } catch (error) {
    next(error);
  }
});

app.get("/api/books/:id", async (req, res, next) => {
  try {
    console.log("Requesting single book info from Goodreads...")
    const url = `${baseUrl}/book/show.xml?key=${GOODREADS_API_KEY}&id=${req.params.id}`
    const jsonData = await ensureFetch(url);
    const bookData = jsonData.GoodreadsResponse.book
    console.log(JSON.stringify(bookData, null, 2));
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
