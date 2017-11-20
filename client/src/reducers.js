import { combineReducers } from "redux";

import {
	GET_GOODREADS_REQUEST,
	GET_GOODREADS_SUCCESS,
	GET_GOODREADS_FAILURE,
	SEARCH_RESULTS,
	HANDLE_CHANGE,
	SHOW_MODAL,
	CLOSE_MODAL
} from "./actions";

const initialFetchState = {
	isFetching: false,
	error: null
};

//reducers for fetching state
function fetchAPI(state = initialFetchState, action) {
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
const initialBookListState = {
	bookList: []
};
function bookList(state = initialBookListState, action) {
	switch (action.type) {
		case SEARCH_RESULTS:
			return action.data;
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
	bookData: {
		title: "",
		cover: "",
		description: "",
		authors: []
	}
};

function bookModal(state = initialModalState, action) {
	console.log("inreducer for modal", action);
	switch (action.type) {
		case SHOW_MODAL:
			return {
				showingModal: true,
				bookData: action.data
			};
		case CLOSE_MODAL:
			return {
				...state,
				showingModal: false
			};
		default:
			return state;
	}
}

//combine reducers
export const goodReadsApp = combineReducers({
	fetchAPI,
	bookList,
	searchValue,
	bookModal
});
