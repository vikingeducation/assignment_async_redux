export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const GET_BOOK_REQUEST = "GET_BOOK_REQUEST";
export const GET_BOOK_SUCCESS = "GET_BOOK_SUCCESS";
export const GET_BOOK_FAILURE = "GET_BOOK_FAILURE";

//get a list of books
export function getBooksRequest(data) {
  return {
    type: GET_BOOKS_REQUEST,
    data
  };
}

export function getBooksSuccess(data) {
  return {
    type: GET_BOOKS_REQUEST,
    data
  };
}

export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_REQUEST,
    error
  };
}

//single book details
export function getBookRequest(data) {
  return {
    type: GET_BOOK_REQUEST,
    data
  };
}

export function getBookSuccess(data) {
  return {
    type: GET_BOOK_REQUEST,
    data
  };
}

export function getBookFailure(error) {
  return {
    type: GET_BOOK_REQUEST,
    error
  };
}
