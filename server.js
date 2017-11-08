/*The Server

First set up your backend secrets and server. Set up all the API routes that you will need and verify that they are working. This API sends XML instead of JavaScript. XML has its advantages, but for the most part, we don't need those advantages here in this project, so it's okay to convert it to JSON using a tool like node-xml2js.

The Client

Next, set up your client using Create React App. Your user interface should include a way to search for books by title or author, showing a list of those results.

Clicking on a particular book should show that book's detailed information including some of the reviews for it. You can experiment with how to show this detailed information. For example, think through how you would make it a modal. How do modals work? They typically just need a trigger attribute to be set on the element. You can easily do this with props, managing whether it is open or not using state in Redux.
*/
require("es6-promise").polyfill();
require("isomorphic-fetch");
require("dotenv").config();
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3001);

function checkStatus(response) {
	if (!response.ok) {
		const error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
	return response; //no error
}

function parseJSON(response) {
	return response.json();
}

function errorHandler(err, req, res, next) {
	console.error("Error", err.stack);
	res.status(err.response ? err.response.status : 500);
	res.json({ error: err.message });
}

app.get("/", (req, res, next) => {
	console.log("Requesting data from goodreads API");
	fetch(`${baseUrl}....`)
		.then(checkStatus)
		.then(parseJSON)
		.then(json => res.json(json))
		.catch(error => next(error));
});

app.use(errorHandler);

app.listen(app.get("port"), () => {
	console.log(`server at http://localhost:${app.get("port")}/`);
});
