export const REQUEST_START = "REQUEST_START";
export const REQUEST_SEARCH_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAILURE = "REQUEST_FAILURE";
export const REQUEST_SHOW_SUCCESS = "REQUEST_SHOW_SUCCESS";
export const CLOSE_MODAL = "CLOSE_MODAL";

export function requestStart() {
  return {
    type: REQUEST_START
  };
}

export function requestSearchSuccess(data) {
  return {
    type: REQUEST_SEARCH_SUCCESS,
    data
  };
}

export function requestShowSuccess(data) {
  return {
    type: REQUEST_SHOW_SUCCESS,
    data
  };
}

export function requestFailure(error) {
  return {
    type: REQUEST_FAILURE,
    error
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
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
        dispatch(requestShowSuccess(data));
      })
      .catch(error => {
        dispatch(requestFailure(error));
      });
  };
};

export const searchBooks = query => {
  return dispatch => {
    dispatch(requestStart());

    fetch(`https://localhost:3000/goodreads/${query}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(requestSearchSuccess(data));
      })
      .catch(error => {
        dispatch(requestFailure(error));
      });
  };
};
