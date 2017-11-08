import { combineReducers } from "redux";

import { getResults } from "./actions";

function bookList(state = {}, actions) {
	return state;
}

//combine reducers
export const goodReadsApp = combineReducers({
	bookList
});
