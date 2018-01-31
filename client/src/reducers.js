import * as Actions from './actions'

const initialState = {
  searchBooks: [],
  isFetching: false,
  error: null
}

export function goodReadsApp(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GREADS_SUCCESS:
      return {
        ...state,
        searchBooks: action.data.results.work,
        isFetching: false
      }
    case Actions.REVIEWS_SUCCESS:
      return {
        ...state,
        searchBooks: [...state.searchBooks, action.data],
        isFetching: false
      }
    case Actions.GET_GREADS_REQUEST:
    case Actions.REVIEWS_REQUEST:
    console.log('request coming!!')
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case Actions.GET_GREADS_FAILURE:
    case Actions.REVIEWS_FAILURE:
    console.log('failure!!')
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    default:
      return state
  }
}
