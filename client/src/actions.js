export const GET_BOOK_SEARCH_REQUEST = 'GET_BOOK_SEARCH_REQUEST';
export const GET_BOOK_SEARCH_SUCCESS = 'GET_BOOK_SEARCH_SUCCESS';
export const GET_BOOK_SEARCH_FAILURE = 'GET_BOOK_SEARCH_FAILURE';
export const GET_BOOK_INFO_REQUEST = 'GET_BOOK_INFO_REQUEST';
export const GET_BOOK_INFO_SUCCESS = 'GET_BOOK_INFO_SUCCESS';
export const GET_BOOK_INFO_FAILURE = 'GET_BOOK_INFO_FAILURE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

export function getBookSearchRequest() {
  return {
    type: GET_BOOK_SEARCH_REQUEST
  };
}

export function getBookSearchSuccess(data) {
  return {
    type: GET_BOOK_SEARCH_SUCCESS,
    data
  };
}

export function getBookSearchFailure(error) {
  return {
    type: GET_BOOK_SEARCH_FAILURE,
    error
  };
}

export function getBookInfoRequest(data) {
  return {
    type: GET_BOOK_INFO_REQUEST,
    data
  };
}

export function getBookInfoSuccess(data) {
  return {
    type: GET_BOOK_INFO_SUCCESS,
    data
  };
}

export function getBookInfoFailure(error) {
  return {
    type: GET_BOOK_INFO_FAILURE,
    error
  };
}

export function searchBooks(term) {
  return (dispatch) => {
    dispatch(getBookSearchRequest());

    if (!term) {
      dispatch(getBookSearchFailure(new Error('No search query given')));
      return;
    }

    fetch(`/api/goodreads/search?q=${ term }`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${ response.status }: ${response.message}`);
        }

        return response.json();
      })
      .then(books => {
        dispatch(getBookSearchSuccess(books));
      })
      .catch(error => {
        dispatch(getBookSearchFailure(error));
      });
  };
}

export function getBookInfo(id) {
  return (dispatch) => {
    dispatch(getBookInfoRequest());

    if (id) {
      fetch(`/api/goodreads/book/${ id }`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`${ response.status }: ${response.message}`);
          }

          return response.json();
        })
        .then(bookInfo => {
          dispatch(getBookInfoSuccess(bookInfo));
        })
        .catch(error => {
          dispatch(getBookInfoFailure(error));
        });
    } else {
      dispatch(getBookInfoFailure(new Error('No book id given')));
    }
  };
}

export function toggleModal() {
  return {
    type: TOGGLE_MODAL
  };
}
