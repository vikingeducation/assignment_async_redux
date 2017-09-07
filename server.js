const express = require("express");
const app = express();
const fetch = require("node-fetch");
const parseString = require("xml2js").parseString;

require("dotenv").config();
const GOODREADS_KEY = process.env.GOODREADS_KEY;
const GOODREADS_SECRET = process.env.GOODREADS_SECRET;
const baseUrlSearch = query =>
  `https://www.goodreads.com/search/index.xml?key=${GOODREADS_KEY}&q=${query}`;
const baseUrlShowBook = book =>
  `https://www.goodreads.com/book/show/${book}?key=${GOODREADS_KEY}`;

app.get("/goodreads/:query", async (req, res, next) => {
  const query = req.params.query;
  let xmlRes = await fetch(baseUrlSearch(query));
  xmlRes = await xmlRes.text();
  let jsonRes;
  parseString(xmlRes, (err, result) => {
    jsonRes = result;
  });
  const responseObj = {
    results: jsonRes.GoodreadsResponse.search[0].results[0].work.map(work => {
      return {
        title: work.best_book[0].title[0],
        id: work.best_book[0].id[0]._,
        author: work.best_book[0].author[0].name[0],
        image: work.best_book[0].small_image_url[0]
      };
    })
  };
  res.json(responseObj);
});

app.get("/goodreads/show/:book", async (req, res, next) => {
  const book = req.params.book;
  let xmlRes = await fetch(baseUrlShowBook(book));
  xmlRes = await xmlRes.text();
  let jsonRes;
  parseString(xmlRes, (err, result) => {
    jsonRes = result;
  });
  const bookRes = jsonRes.GoodreadsResponse.book[0];
  const responseObj = {
    title: bookRes.title[0],
    id: bookRes.id[0],
    authors: bookRes.authors.map(a => a.author[0].name[0]),
    image: bookRes.image_url[0],
    publicationYear: bookRes.publication_year[0],
    publisher: bookRes.publisher[0],
    description: bookRes.description[0],
    buyLinkName: bookRes.buy_links[0].buy_link[0].name[0],
    buyLink: bookRes.buy_links[0].buy_link[0].link[0],
    averageRating: bookRes.average_rating[0]
  };
  res.json(responseObj);
});

app.listen(3001, "0.0.0.0", (req, res) => {
  console.log("listening on port 3001");
});
