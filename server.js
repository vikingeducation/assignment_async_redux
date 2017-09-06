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
  // console.log(xmlRes);
  // let jsonRes = await parseString(xmlRes);
  parseString(xmlRes, (err, result) => {
    const responseObj = {
      results: result.GoodreadsResponse.search[0].results[0].work.map(work => {
        return {
          title: work.best_book[0].title[0],
          bookId: work.id[0]._,
          author: work.best_book[0].author[0].name[0],
          image: work.best_book[0].small_image_url[0]
        };
      })
    };

    // console.log(
    //   JSON.stringify(
    //     result.GoodreadsResponse.search[0].results[0].work,
    //     null,
    //     2
    //   )
    // );
    console.log(responseObj);
    res.json(responseObj);
  });
});

app.get("/goodreads/show/:book", async (req, res, next) => {
  const book = req.params.book;
  const xmlRes = await fetch(baseUrlShowBook(book));
  const jsonRes = await parseString(await xmlRes.text());
  console.log(jsonRes);
});

app.listen(3000, "0.0.0.0", (req, res) => {
  console.log("listening on port 3000");
});
