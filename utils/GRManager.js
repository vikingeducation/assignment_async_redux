const superagent = require('superagent');
const { promisify } = require('bluebird');

const parser = new require('xml2js').Parser({ explicitArray: false });
const parseString = promisify(parser.parseString);
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
			return (await parseString(response.text)).GoodreadsResponse.author;
		} catch (error) {
			console.error(error, error.stack);
		}
	},
	searchBooks: async query => {
		const { author, title } = query;
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
			const parsedResults = await parseString(response.text);
			const bookList = parsedResults.GoodreadsResponse.search.results.work.map(
				_extractBooks
			);
			const books = await Promise.all(
				bookList.map(b => {
					const url = `https://www.goodreads.com/book/show/${b.book
						.id}.xml?key=${API_KEY}`;
					return new Promise((resolve, reject) => {
						superagent.get(url).buffer().end(async (err, body) => {
							const parsedBody = await parseString(body.text);
							const tmpBook = parsedBody.GoodreadsResponse;
							if (!tmpBook) reject('Error, no book found');
							else {
								const isbn = tmpBook.book.isbn || tmpBook.book.isbn13;
								b.isbn = isbn;
								resolve(b);
							}
						});
					});
				})
			);
			return bookList;
		} catch (error) {
			if (error.error && error.error === 'Page not found')
				console.log('Unable to find reviews for that book');
			else console.error(error);
		}

		function _extractBooks(book) {
			return {
				ratingsCount: book.ratings_count._,
				rating: book.average_rating,
				year: book.original_publication_year._,
				book: {
					id: book.best_book.id._,
					img: book.best_book.image_url,
					title: book.best_book.title,
					author: book.best_book.author.name
				}
			};
		}
	}
};
