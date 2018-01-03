export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";
export const GET_GOODREADS_BOOK_REQUEST = "GET_GOODREADS_BOOK_REQUEST";
export const GET_GOODREADS_BOOK_SUCCESS = "GET_GOODREADS_BOOK_SUCCESS";
export const GET_GOODREADS_BOOK_FAILURE = "GET_GOODREADS_BOOK_FAILURE";

export function getGoodreadsRequest() {
  return {
    type: GET_GOODREADS_REQUEST
  };
}

export function getGoodreadsSuccess(data) {
  return {
    type: GET_GOODREADS_SUCCESS,
    data: data
  };
}

export function getGoodreadsFailure(error) {
  return {
    type: GET_GOODREADS_FAILURE,
    error: error
  };
}

export function getGoodreadsBookRequest() {
  return {
    type: GET_GOODREADS_BOOK_REQUEST
  };
}

export function getGoodreadsBookSuccess(data) {
  return {
    type: GET_GOODREADS_BOOK_SUCCESS,
    data: data
  };
}

export function getGoodreadsBookFailure(error) {
  return {
    type: GET_GOODREADS_BOOK_FAILURE,
    error: error
  };
}

export function getGoodreads(query) {
  return dispatch => {
    dispatch(getGoodreadsRequest());
    fetch(`api/goodreads?search=${query}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        dispatch(getGoodreadsSuccess(response));
      })
      .catch(e => {
        dispatch(getGoodreadsFailure(e));
      });
  };
}

export function getGoodreadsBook(id) {
  return dispatch => {
    dispatch(getGoodreadsBookRequest());
    fetch(`api/goodreads/book/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response}`);
        }
        return response.json();
      })
      .then(response => {
        dispatch(getGoodreadsBookSuccess(response));
      })
      .catch(e => {
        dispatch(getGoodreadsBookFailure(e));
      });
  };
}
