const express = require("express");
const app = express();
const fetch = require("isomorphic-fetch");
var parser = require("xml2json");

// ----------------------------------------
// App Variables
// ----------------------------------------
app.locals.appName = "My App";

// ----------------------------------------
// ENV
// ----------------------------------------
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// ----------------------------------------
// Body Parser
// ----------------------------------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// ----------------------------------------
// Sessions/Cookies
// ----------------------------------------
const cookieSession = require("cookie-session");

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.SESSION_SECRET || "secret"]
  })
);

app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

// ----------------------------------------
// Flash Messages
// ----------------------------------------
const flash = require("express-flash-messages");
app.use(flash());

// ----------------------------------------
// Method Override
// ----------------------------------------
const methodOverride = require("method-override");
const getPostSupport = require("express-method-override-get-post-support");

app.use(
  methodOverride(
    getPostSupport.callback,
    getPostSupport.options // { methods: ['POST', 'GET'] }
  )
);

// ----------------------------------------
// Referrer
// ----------------------------------------
app.use((req, res, next) => {
  req.session.backUrl = req.header("Referer") || "/";
  next();
});

// ----------------------------------------
// Public
// ----------------------------------------
app.use(express.static(`${__dirname}/public`));

// ----------------------------------------
// Logging
// ----------------------------------------
const morgan = require("morgan");
const morganToolkit = require("morgan-toolkit")(morgan);

app.use(morganToolkit());

// ----------------------------------------
// Routes
// ----------------------------------------
app.get("/api/goodreads/book/:id", async (req, res) => {
  try {
    let response = await fetch(
      `https://www.goodreads.com/book/show/${req.params.id}.xml?key=${
        process.env.GOODREADS_KEY
      }`
    ); //return buffers
    response = await response.text();
    response = parser.toJson(response);
    //res.json(response);
    response = JSON.parse(response, null, 2);
    console.log(response.GoodreadsResponse);
    let book = response.GoodreadsResponse.book;

    let result = {
      description: book.description,
      averageRating: book.average_rating,
      ratingsCount: book.work.ratings_count.$t,
      reviewsCount: book.work.reviews_count.$t,
      imageURL: book.image_url,
      reviewWidget: book.reviews_widget
    };

    res.json(result);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

app.get("/api/goodreads/", async (req, res) => {
  try {
    let query = req.query.search;
    console.log("==============QUERY", query);
    let response = await fetch(
      `https://www.goodreads.com/search.xml?key=${
        process.env.GOODREADS_KEY
      }&q=${query}`
    ); //return buffers
    response = await response.text();
    response = parser.toJson(response);
    //res.json(response);
    response = JSON.parse(response, null, 2);
    console.log(response.GoodreadsResponse.search.results.work[0].best_book);
    let results = response.GoodreadsResponse.search.results.work.map(el => {
      return {
        id: el.best_book.id.$t,
        title: el.best_book.title,
        author: el.best_book.author.name,
        imageURL: el.best_book.image_url
      };
    });
    res.json(results);
  } catch (e) {
    console.error(e);
    res.json(e);
  }
});

/*
app.get("/api/goodreads/author", async (req, res) => {
  try {
    let query = req.query.author;
    console.log("==============QUERY", query);
    let response = await fetch(
      `https://www.goodreads.com/api/author_url/${query}?key=${
        process.env.GOODREADS_KEY
      }`
    ); //return buffers
    response = await response.text();
    response = parser.toJson(response);
    //res.json(response);
    response = JSON.parse(response, null, 2);
    console.log(response.GoodreadsResponse);
  } catch (e) {
    console.error(e);
    res.json(e);
  }

});

*/

// ----------------------------------------
// Template Engine
// ----------------------------------------
const expressHandlebars = require("express-handlebars");
const helpers = require("./helpers");

const hbs = expressHandlebars.create({
  helpers: helpers,
  partialsDir: "views/",
  defaultLayout: "application"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// ----------------------------------------
// Server
// ----------------------------------------
const port = process.env.PORT || process.argv[2] || 4000;
const host = "localhost";

let args;
process.env.NODE_ENV === "production" ? (args = [port]) : (args = [port, host]);

args.push(() => {
  console.log(`Listening: http://${host}:${port}\n`);
});

if (require.main === module) {
  app.listen.apply(app, args);
}

// ----------------------------------------
// Error Handling
// ----------------------------------------
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.stack) {
    err = err.stack;
  }
  res.status(500).render("errors/500", { error: err });
});

module.exports = app;
