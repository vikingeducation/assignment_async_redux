import { BookActions } from '../actions';

const initialState = {
	books: [],
	isFetching: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case BookActions.GET_SEARCH_BOOKS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case BookActions.GET_SEARCH_BOOKS_SUCCESS:
			return {
				...state,
				books: action.data,
				isFetching: false
			};
		case BookActions.GET_SEARCH_BOOKS_FAILURE:
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
