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
  let jsonRes = await parseString(xmlRes);
  console.log(jsonRes);
});

app.get("/goodreads/show/:book", async (req, res, next) => {
  const book = req.params.book;
  const xmlRes = await fetch(baseUrlShowBook(book));
  const jsonRes = await parseString(await xmlRes.text());
  console.log(jsonRes);
});

app.listen(3001, "0.0.0.0", (req, res) => {
  console.log("listening on port 3001");
});
