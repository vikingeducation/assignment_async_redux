
//import React from 'react'
import {
  GET_BOOKS_REQUEST, 
  GET_BOOKS_SUCCESS, 
  GET_BOOKS_FAILURE, 
  GET_BOOK_REQUEST, 
  GET_BOOK_SUCCESS, 
  GET_BOOK_FAILURE,
  } from "./actions.js";

// const {
//   GET_BOOKS_REQUEST, 
//   GET_BOOKS_SUCCESS, 
//   GET_BOOKS_FAILURE, 
//   GET_BOOK_REQUEST, 
//   GET_BOOK_SUCCESS, 
//   GET_BOOK_FAILURE,
//   } = actionsObj

const initialState = {
  param: "",
  bookList: [],
  isFetching: false,
  error: null,
  currentBook: null
};

export default function bookReducer(state = initialState, action) {
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
