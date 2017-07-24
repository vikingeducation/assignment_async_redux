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
  },
  modal: {
    isModalOpen: false
  }
};

const allBooks = (state = initialState.allBooks, action) => {
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

const selectedBook = (state = initialState.selectedBook, action) => {
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

const modal = (state = initialState.modal, action) => {
  switch (action.type) {
    case Actions.SET_MODAL_TO_OPEN:
      return {
        isModalOpen: true
      };
    case Actions.SET_MODAL_TO_CLOSED:
      return {
        isModalOpen: false
      };
    default:
      return state;
    // eslint-disable-next-line
  }
}

export const bookSearchApp = combineReducers({
  modal,
  allBooks,
  selectedBook
});
