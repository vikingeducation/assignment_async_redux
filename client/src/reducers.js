import * as Actions from './actions';
import { combineReducers } from 'redux';

const initialSearchState = {
  books: [],
  isFetching: false,
  error: null
};

const bookCollection = (state = initialSearchState, action) => {
  switch (action.type) {
  case Actions.GET_BOOK_SEARCH_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: null
    };
  case Actions.GET_BOOK_SEARCH_SUCCESS:
    return {
      ...state,
      isFetching: false,
      books: action.data
    };
  case Actions.GET_BOOK_SEARCH_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error
    };
  default:
    return state;
  }
};

const initialInfoState = {
  book: null,
  isFetching: false,
  error: null,
  modal: false
};

const bookInfo = (state = initialInfoState, action) => {
  switch (action.type) {
  case Actions.GET_BOOK_INFO_REQUEST:
    return {
      ...state,
      isFetching: true,
      modal: true
    };
  case Actions.GET_BOOK_INFO_SUCCESS:
    return {
      ...state,
      isFetching: false,
      book: action.data,
      modal: true
    };
  case Actions.GET_BOOK_INFO_FAILURE:
    return {
      ...state,
      isFetching: false,
      error: action.error,
      modal: true
    };
  case Actions.TOGGLE_MODAL:
    return {
      ...state,
      modal: !state.modal
    };
  default:
    return state;
  }
};

export const goodReadsApp = combineReducers({ bookCollection, bookInfo });
