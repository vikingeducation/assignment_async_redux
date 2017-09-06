import * from "./actions.js";

const initialState = {
  param: "",
  bookList: [],
  isFetching: false,
  error: null,
  currentBook: null
};

export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        bookList: action.data
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case GET_BOOK_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case GET_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentBook: action.data
      };
    case GET_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}
