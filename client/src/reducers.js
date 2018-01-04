import { combineReducers } from "redux";

import * as Actions from "./actions";

const initialState = {
  books: [],
  isFetching: false,
  error: null,
  book: null
};

export function goodreads(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GOODREADS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_GOODREADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.data
      };

    case Actions.GET_GOODREADS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case Actions.GET_GOODREADS_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_GOODREADS_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        book: action.data
      };

    case Actions.GET_GOODREADS_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };

    case Actions.CLEAR_BOOK:
      return {
        ...state,
        book:null
      };

    default:
      return state;
  }
}

export const goodreadsApp = combineReducers({
  goodreads
});
