const superagent = require('superagent');

const API_KEY = process.env.API_KEY || 'foobar';

const GR_BASE_URL = 'https://www.goodreads.com/';
const GR_SEARCH_URL = 'search/index.xml';
const GR_SEARCH_AUTHOR_BY_NAME_URL = 'api/author_url/'; // name
const GR_SEARCH_BOOK_BY_AUTHOR_URL = 'search/index.xml';

module.exports = {
	searchAuthors: async name => {
		try {
			const URL = GR_BASE_URL + GR_SEARCH_AUTHOR_BY_NAME_URL + name;

			const queryObj = {
				key: API_KEY
			};

			const response = await superagent.get(URL).query(queryObj);
			console.log(response);
		} catch (error) {
			console.error(error, error.stack);
		}
	},
	searchBooks: () => {},
	searchBooksByAuthor: () => {}
};
