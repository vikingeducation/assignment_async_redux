import * as Actions from "./actions";
import { combineReducers } from "redux";

const initialState = {
  allBooks: {
    books: [],
    isFetching: false,
    error: null
  },
  selectedBook: {
    book: {},
    isFetching: false,
    error: null
  }
};

export function allBooks(state = initialState.allBooks, action) {
  switch (action.type) {
    case Actions.GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.data,
        isFetching: false
      };
    case Actions.GET_ALL_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_ALL_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function selectedBook(state = initialState.selectedBook, action) {
  switch (action.type) {
    case Actions.GET_SELECTED_BOOK_SUCCESS:
      return {
        ...state,
        book: action.data,
        isFetching: false
      };
    case Actions.GET_SELECTED_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_SELECTED_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const bookSearchApp = combineReducers({
  allBooks,
  selectedBook
});
