import * as Actions from "./actions";

const initialState = {
  goodreads: [],
  searchText: "",
  bookSelected: {},
  isFetching: false,
  error: null
};

export function goodreads(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GOODREADS_SUCCESS:
      console.log(action);
      return {
        ...state,
        goodreads: action.data,
        isFetching: false,
        bookSelected: {}
      };
    case Actions.GET_GOODREADS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case Actions.GET_GOODREADS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case Actions.SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.data
      };
    case Actions.SET_BOOK_INFO:
      return {
        ...state,
        bookSelected: action.data,
        isFetching: false
      };
    default:
      return state;
  }
}
