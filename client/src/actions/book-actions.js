const { superagent, parseString } = require('../utils/Superagent');

export const GET_SEARCH_BOOKS_REQUEST = 'GET_SEARCH_BOOKS_REQUEST';
export const GET_SEARCH_BOOKS_SUCCESS = 'GET_SEARCH_BOOKS_SUCCESS';
export const GET_SEARCH_BOOKS_FAILURE = 'GET_SEARCH_BOOKS_FAILURE';

export function getSearchBooksRequest() {
	return {
		type: GET_SEARCH_BOOKS_REQUEST
	};
}

export function getSearchBooksSuccess(data) {
	return {
		type: GET_SEARCH_BOOKS_SUCCESS,
		data
	};
}

export function getSearchBooksFailure(error) {
	return {
		type: GET_SEARCH_BOOKS_FAILURE,
		error
	};
}

export const getInitialBooks = () => async dispatch => {
	searchBooks({ author: 'rowling' })(dispatch);
};

export const searchBooks = data => async dispatch => {
	dispatch(getSearchBooksRequest());

	try {
		const response = await superagent
			.get('api/searchBooks')
			.query(data)
			.buffer();

		let books = response.body.map(b => {
			let title = b.book.title
				.replace(/\(.*\)/gi, '')
				.replace(/:.*$/gi, '')
				.replace(/[^\sa-z]/gi, '')
				.trim()
				.replace(/\s/g, '_');

			const url = `http://isbndb.com/api/v2/json/HXZLHRIH/book/${title}`;
			return new Promise((resolve, reject) => {
				resolve(superagent.get(url).buffer());
			});
		});

		books = await Promise.all(books);

		console.log(books, 'books');

		dispatch(getSearchBooksSuccess(books));
	} catch (error) {
		dispatch(getSearchBooksFailure(error));
	}
};
