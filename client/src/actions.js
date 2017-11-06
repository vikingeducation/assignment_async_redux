export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";
export const SET_SEARCH_TEXT = "SET_SEARCH_TEXT";
export const SET_BOOK_INFO = "SET_BOOK_INFO";

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

export function setSearchText(data) {
  return {
    type: SET_SEARCH_TEXT,
    data
  };
}

export function setBookInfo(data) {
  return {
    type: SET_BOOK_INFO,
    data
  };
}

export function getSearchText(data) {
  return dispatch => {
    console.log("getSearchText");
    dispatch(getGoodreadsRequest());

    fetch(`api/goodreads/search?book=${data.search}`)
      .then(response => {
        console.log("Ok?:", response.ok);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        console.log("getGoodreadsSuccess");
        dispatch(setSearchText(data.search));

        dispatch(
          getGoodreadsSuccess(json.GoodreadsResponse.search.results.work)
        );
      })
      .catch(error => {
        console.log("getGoodreadsFailure");
        dispatch(getGoodreadsFailure(error));
      });
  };
}

export function getBookInfo(data) {
  return dispatch => {
    console.log("getBookInfo");
    dispatch(getGoodreadsRequest());

    fetch(`api/goodreads/book?bookid=${data}`)
      .then(response => {
        console.log("Ok?:", response.ok);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(json => {
        console.log("getBookSuccess", json.GoodreadsResponse.book);
        dispatch(setBookInfo(json.GoodreadsResponse.book));
      })
      .catch(error => {
        console.log("getBookFailure");
        dispatch(getGoodreadsFailure(error));
      });
  };
}
