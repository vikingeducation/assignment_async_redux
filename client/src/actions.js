export const GET_ALL_BOOKS_REQUEST = "GET_ALL_BOOKS_REQUEST";
export const GET_ALL_BOOKS_SUCCESS = "GET_ALL_BOOKS_SUCCESS";
export const GET_ALL_BOOKS_FAILURE = "GET_ALL_BOOKS_FAILURE";
export const GET_SELECTED_BOOK_REQUEST = "GET_SELECTED_BOOK_REQUEST";
export const GET_SELECTED_BOOK_SUCCESS = "GET_SELECTED_BOOK_SUCCESS";
export const GET_SELECTED_BOOK_FAILURE = "GET_SELECTED_BOOK_FAILURE";

export function getAllBooksRequest() {
  return {
    type: GET_ALL_BOOKS_REQUEST
  };
}

export function getAllBooksSuccess(data) {
  return {
    type: GET_ALL_BOOKS_SUCCESS,
    data
  };
}

export function getAllBooksFailure(error) {
  return {
    type: GET_ALL_BOOKS_FAILURE,
    error
  };
}

export function getSelectedBookRequest() {
  return {
    type: GET_SELECTED_BOOK_REQUEST
  };
}

export function getSelectedBookSuccess(data) {
  return {
    type: GET_SELECTED_BOOK_SUCCESS,
    data
  };
}

export function getSelectedBookFailure(error) {
  return {
    type: GET_SELECTED_BOOK_FAILURE,
    error
  };
}

export function getInitialAllBooks() {
  return dispatch => {
    dispatch(getAllBooksRequest());

    fetch("api/search")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getAllBooksSuccess(json));
      })
      .catch(error => {
        dispatch(getAllBooksFailure(error));
      });
  };
}

export function getSearchedBooks(query) {
  return dispatch => {
    dispatch(getAllBooksRequest());

    fetch(`api/search?${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }

        return response.json();
      })
      .then(json => {
        dispatch(getAllBooksSuccess(json));
      })
      .catch(error => {
        dispatch(getAllBooksFailure(error));
      });
  }
}