import * as Actions from './actions'

const initialState = {
  searchBooks: {},
  isFetching: false,
  error: null
}

export function goodReadsApp(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GREADS_SUCCESS:
    console.log('success!!')
      return {
        ...state,
        searchBooks: action.data,
        isFetching: false
      }
    case Actions.INSERT_SUCCESS:
      return {
        ...state,
        searchBooks: [...state.searchBooks, action.data],
        isFetching: false
      }
    case Actions.GET_GREADS_REQUEST:
    case Actions.INSERT_REQUEST:
    console.log('request coming!!')
      return {
        ...state,
        isFetching: true,
        error: null
      }
    case Actions.GET_GREADS_FAILURE:
    case Actions.INSERT_FAILURE:
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
