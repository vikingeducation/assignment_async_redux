require("es6-promise").polyfill;
require("isomorphic-fetch");
require("dotenv").config();
const express = require("express");
const app = express();
const GOODREADS_API_KEY = process.env.GOODREADS_API_KEY;
const baseUrl = "https://goodreads.com/";
const fastXmlParser = require("fast-xml-parser");

async function test() {
	const response = await fetch(
		`https://www.goodreads.com/search/index.xml?key=WCybhC1XGmrIm4ZBvF4sbg&q=kill`
	);

	const data = await fastXmlParser.parse(response);

	const body = await response.body._buffer;
}
