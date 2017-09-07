import {
  REQUEST_SEARCH_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_SHOW_SUCCESS,
  REQUEST_START,
  CLOSE_MODAL
} from "./actions";

const initialState = {
  isFetching: false,
  books: [],
  book: {},
  bookModal: false,
  errorMessage: "",
  error: false
};

const booksApp = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        isFetching: true
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.data,
        isFetching: false
      };
    case REQUEST_SEARCH_SUCCESS:
      return {
        ...state,
        books: action.data,
        isFetching: false
      };
    case REQUEST_SHOW_SUCCESS:
      return {
        ...state,
        book: action.data,
        bookModal: true,
        isFetching: false
      };
    case CLOSE_MODAL:
      return {
        ...state,
        bookModal: false
      };
    default:
      return state;
  }
};

export default booksApp;
