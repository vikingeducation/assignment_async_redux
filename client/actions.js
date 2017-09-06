const FETCH_BOOK = "FETCH_BOOK";
const SEARCH_BOOKS = "SEARCH_BOOKS";
const REQUEST_START = "REQUEST_START";
const REQUEST_SUCCESS = "REQUEST_SUCCESS";
const REQUEST_FAILURE = "REQUEST_FAILURE";

export function requestStart() {
  return {
    type: REQUEST_START
  };
}

export function requestSuccess(data) {
  return {
    type: REQUEST_SUCCESS,
    data
  };
}

export function requestFailure(error) {
  return {
    type: REQUEST_FAILURE,
    error
  };
}

export const fetchBook = id => {
  return dispatch => {
    dispatch(requestStart());

    fetch(`https://localhost:3000/goodreads/show/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(requestSuccess(data));
      })
      .catch(error => {
        dispatch(requestFailure(error));
      });
  };
};

export const searchBooks = data => {
  return {
    type: SEARCH_BOOKS,
    data
  };
};
