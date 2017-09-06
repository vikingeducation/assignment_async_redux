

export const GET_BOOKS_REQUEST = 'GET_USERS_REQUEST'
export const GET_BOOKS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_BOOKS_FAILURE = 'GET_USERS_FAILURE'

export const GET_BOOK_REQUEST = 'GET_USERS_REQUEST'
export const GET_BOOK_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_BOOK_FAILURE = 'GET_USERS_FAILURE'

export function getBooksRequest(data){
  return {
    type: GET_BOOKS_REQUEST,
    data
  }
}

export function getBooksSuccess(data){
  return {
    type: GET_BOOKS_REQUEST,
    data
  }
}

export function getBooksFailure(error){
  return {
    type: GET_BOOKS_REQUEST,
    error
  }
}