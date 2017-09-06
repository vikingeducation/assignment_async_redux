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

		console.log(response.body);

		dispatch(getSearchBooksSuccess(response.body));
	} catch (error) {
		dispatch(getSearchBooksFailure(error));
	}
};
