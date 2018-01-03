import {combineReducers} from "redux";

import {ADD_ITEM, PURCHASE_ITEM, SET_FILTER, SET_SORT} from "./actions";

const initialState = {
  books:[],
  isFetching:false,
  error:null
};

export function goodreads(state = initialState, action) {
  switch (action.type) {
    case GET_GOODREADS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case GET_GOODREADS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.data
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


export const goodreadsApp = combineReducers({
  goodreads
});

