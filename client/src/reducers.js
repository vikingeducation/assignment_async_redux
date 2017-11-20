import { combineReducers } from "redux";

import {
	GET_GOODREADS_REQUEST,
	GET_GOODREADS_SUCCESS,
	GET_GOODREADS_FAILURE,
	HANDLE_CHANGE,
	SHOW_MODAL,
	CLOSE_MODAL
} from "./actions";

const initialState = {
	bookList: [],
	isFetching: false,
	error: null
};

function bookList(state = initialState, action) {
	switch (action.type) {
		case GET_GOODREADS_REQUEST:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case GET_GOODREADS_SUCCESS:
			console.log("array of books", action.data);
			return {
				...state,
				isFetching: false,
				bookList: action.data
			};
		case GET_GOODREADS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default:
			return state;
	}
}

function searchValue(state = "", action) {
	switch (action.type) {
		case HANDLE_CHANGE:
			return action.data;
		default:
			return state;
	}
}

const initialModalState = {
	showingModal: false,
	bookDetails: "",
	bookReviews: []
};

function bookModal(state = initialModalState, action) {
	switch (action.type) {
		case SHOW_MODAL:
			return action.data;
		case CLOSE_MODAL:
			return initialState;
		default:
			return state;
	}
}

//combine reducers
export const goodReadsApp = combineReducers({
	bookList,
	searchValue,
	bookModal
});
