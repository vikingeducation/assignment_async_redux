export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";

export function getGoodreadsRequest() {
  return {
    type: GET_GOODREADS_REQUEST
  };
}

export function getGoodreadsSuccess(data) {
  return {
    type: GET_GOODREADS_SUCCESS,
    data
  };
}

export function getGoodreadsFailure(error) {
  return {
    type: GET_GOODREADS_FAILURE,
    error
  };
}

export function getInitialGoodreads() {
  return dispatch => {
    console.log("getGoodreadsRequest");
    dispatch(getGoodreadsRequest());

    fetch("api/goodreads")
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        console.log("getGoodreadsSuccess");
        dispatch(getGoodreadsSuccess(json));
      })
      .catch(error => {
        console.log("getGoodreadsFailure");
        dispatch(getGoodreadsFailure(error));
      });
  };
}
