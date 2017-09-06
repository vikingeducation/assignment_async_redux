const superagent = require('superagent');
const { promisify } = require('bluebird');
const parseString = promisify(require('xml2js').parseString);
require('dotenv').config();
const API_KEY = process.env.API_KEY || 'foobar';

const GR_BASE_URL = 'https://www.goodreads.com/';
const GR_SEARCH_URL = 'search/index.xml';
const GR_SEARCH_AUTHOR_BY_NAME_URL = 'api/author_url/'; // name
const GR_SEARCH_BOOK_BY_AUTHOR_URL = 'search/index.xml';

module.exports = {
	searchAuthors: async name => {
		try {
			// Create URI
			const URL = GR_BASE_URL + GR_SEARCH_AUTHOR_BY_NAME_URL + name;
			const queryObj = {
				key: API_KEY
			};

			// Send request.
			const response = await superagent
				.get(URL)
				.query(queryObj)
				.accept('xml')
				.buffer();

			// Parse the string.
			// TODO: new xlmParser
			return (await parseString(response.text, { explicitArray: false }))
				.GoodreadsResponse.author;
		} catch (error) {
			console.error(error, error.stack);
		}
	},
	searchBooks: async query => {
		const { author, title } = query;
		// TODO: BUG!!!!!!!!
		if (!author && !title) throw Error('SEARCH_BOOKS: No query specified');

		try {
			// Create URI
			const URL = GR_BASE_URL + GR_SEARCH_URL;
			const queryObj = {
				q: author || title,
				key: API_KEY,
				search: author && title ? 'all' : !author && title ? 'title' : 'author'
			};

			// Send request.
			const response = await superagent
				.get(URL)
				.query(queryObj)
				.accept('xml')
				.buffer();

			// Parse the string.
			return parseString(response.text);
		} catch (error) {
			console.error(error, error.stack);
		}
	}
};
