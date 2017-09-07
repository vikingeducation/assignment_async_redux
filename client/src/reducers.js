import { combineReducers } from "redux";
import {
  SET_BOOKS,
  SET_MODAL,
  SET_FETCHING,
  SET_ERROR,
  SET_SUCCESS
} from "./actions";

const books = (state = [], action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.data;
    default:
      return state;
  }
};

const status = (state = { isFetching: false, error: null }, action) => {
  switch (action.type) {
    case SET_FETCHING:
      return { error: null, isFetching: true };
    case SET_ERROR:
      console.error("Fetch Error: ", action.error);
      return { isFetching: false, error: action.error };
    case SET_SUCCESS:
      return { isFetching: false, error: null };
    default:
      return state;
  }
};

const modal = (state = { visible: false, book: null }, action) => {
  switch (action.type) {
    case SET_MODAL:
      return action.data;
    default:
      return state;
  }
};

export const booksApp = combineReducers({ books, modal, status });
