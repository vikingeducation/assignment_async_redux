// client/src/reducers.js
import { AuthorActions } from '../actions';

const initialState = {
	authors: [],
	isFetching: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case AuthorActions.GET_SEARCH_AUTHORS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case AuthorActions.GET_SEARCH_AUTHORS_SUCCESS:
			return {
				...state,
				authors: action.data,
				isFetching: false
			};
		case AuthorActions.GET_SEARCH_AUTHORS_FAILURE:
			console.log('Error:', action.error);
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
};
