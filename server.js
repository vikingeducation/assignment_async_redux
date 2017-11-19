/*The Server

First set up your backend secrets and server. Set up all the API routes that you will need and verify that they are working. This API sends XML instead of JavaScript. XML has its advantages, but for the most part, we don't need those advantages here in this project, so it's okay to convert it to JSON using a tool like node-xml2js.

The Client

Next, set up your client using Create React App. Your user interface should include a way to search for books by title or author, showing a list of those results.

Clicking on a particular book should show that book's detailed information including some of the reviews for it. You can experiment with how to show this detailed information. For example, think through how you would make it a modal. How do modals work? They typically just need a trigger attribute to be set on the element. You can easily do this with props, managing whether it is open or not using state in Redux.
*/
require("dotenv").config();
const express = require("express");
const app = express();
//const async = require("async");
const fetch = require("node-fetch");
//var wrap = require("async-middleware").wrap;

//handle xml response
const xml2js = require("xml2js");
// Set development port to 3001
app.set("port", process.env.PORT || 3001);

// When in production, only serve static assets
// from the client/build folder
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}
//Api keys and secrets
const API_CLIENT_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = "https://www.goodreads.com";

async function getApi(term) {
	let booklist;
	const response = await fetch(
		`${baseUrl}/search/index.xml?key=${API_CLIENT_KEY}&search['author']&q=${term}`
	);
	//console.log("hi", xml2js.parseString(await response.text()));
	let parsedResponse = xml2js.parseString(await response.text(), function(
		err,
		result
	) {
		// array of books
		let resultArray = result.GoodreadsResponse.search[0].results[0].work;
		//grab pertinent data from resultsArray
		let bookArray = resultArray.map(item => {
			return item.best_book[0];
		});
		//create array of book results for export
		bookList = bookArray.map(item => {
			return {
				title: item.title[0],
				author: item.author[0].name[0],
				img_url: item.image_url[0]
			};
		});
	});
	return bookList;
}

app.get("/results", async (req, res, next) => {
	console.log(
		"Getting search results from goodreads API for search term: ",
		req.query.search
	);
	let result = await getApi(req.query.search);
	res.json(result);
});

// Defines next action for errors
function errorHandler(err, req, res, next) {
	console.error("Error: ", err.stack);
	res.status(err.response ? err.response.status : 500);
	res.json({ error: err.message });
}

app.use(errorHandler);
app.listen(app.get("port"), () => {
	console.log(`server at http://localhost:${app.get("port")}/`);
});
