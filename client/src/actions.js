export const SET_BOOKS = "SET_BOOKS";
export const SET_MODAL = "SET_MODAL";
export const SET_FETCHING = "SET_FETCHING";
export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";

const showModal = book => {
  return {
    type: SET_MODAL,
    data: {
      book,
      visible: true
    }
  };
};

export const hideModal = () => {
  return {
    type: SET_MODAL,
    data: {
      book: null,
      visible: false
    }
  };
};

const setFetching = () => {
  return {
    type: SET_FETCHING
  };
};

const setSuccess = () => {
  return {
    type: SET_SUCCESS
  };
};

const setError = msg => {
  return {
    type: SET_ERROR,
    error: msg
  };
};

const setBooks = bookList => {
  return {
    type: SET_BOOKS,
    data: bookList
  };
};

export const fetchBooks = (query = "", field = "") => async dispatch => {
  try {
    dispatch(setFetching());
    const response = await fetch(`api/books?query=${query}&field=${field}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    dispatch(setBooks(await response.json()));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};

export const fetchBook = id => async dispatch => {
  try {
    dispatch(setFetching());
    const response = await fetch(`api/books/${id}`);
    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
    dispatch(showModal(await response.json()));
    dispatch(setSuccess());
  } catch (error) {
    dispatch(setError(error));
  }
};
