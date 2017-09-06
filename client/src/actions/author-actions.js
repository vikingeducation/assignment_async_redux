const { superagent, parseString } = require('../utils/Superagent');

export const GET_SEARCH_AUTHORS_REQUEST = 'GET_SEARCH_AUTHORS_REQUEST';
export const GET_SEARCH_AUTHORS_SUCCESS = 'GET_SEARCH_AUTHORS_SUCCESS';
export const GET_SEARCH_AUTHORS_FAILURE = 'GET_SEARCH_AUTHORS_FAILURE';

export function getSearchAuthorsRequest() {
	return {
		type: GET_SEARCH_AUTHORS_REQUEST
	};
}

export function getSearchAuthorsSuccess(data) {
	return {
		type: GET_SEARCH_AUTHORS_SUCCESS,
		data
	};
}

export function getSearchAuthorsFailure(error) {
	return {
		type: GET_SEARCH_AUTHORS_FAILURE,
		error
	};
}

// export const getInitialAuthors = query => async dispatch => {
// 	dispatch(getSearchAuthorsRequest());
//
// 	try {
// 		const response = await superagent
// 			.get(`api/searchAuthors`)
// 			.query({
// 				author: 'rowling'
// 			})
// 			.buffer();
//
// 		console.log(response, 'response initial');
//
// 		dispatch(getSearchAuthorsSuccess());
// 	} catch (error) {
// 		dispatch(getSearchAuthorsFailure(error));
// 	}
// };
