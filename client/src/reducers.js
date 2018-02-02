import * as Actions from './actions'

const initialState = {
  searchBooks: [],
  isOpen: false,
  isFetching: false,
  isFetching: true,
  error: null,
  currentReviews: {},
  currentBook: {}
}

export function goodReadsApp(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_GREADS_SUCCESS:
      return {
        ...state,
        searchBooks: action.data.results.work,
        isFetching: false,
        isOpen: false
      }
    case Actions.REVIEWS_SUCCESS:
      return {
        ...state,
        isFetchingReview: false,
        isOpen: true,
        currentReviews: action.data,
        currentBook: action.data.id
      }
    case Actions.GET_GREADS_REQUEST:
    return {
      ...state,
      isFetching: true,
      error: null,
      isOpen: false,
      currentReviews: {}
    }
    case Actions.REVIEWS_REQUEST:
      return {
        ...state,
        isFetchingReview: true,
        error: null,
        isOpen: false,
        currentReviews: {}
      }
    case Actions.GET_GREADS_FAILURE:
    case Actions.REVIEWS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetchingReview: false,
        isOpen: false,
        currentReviews: {},
        error: action.error
      }
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        currentReviews: {}
      }
    default:
      return state
  }
}
