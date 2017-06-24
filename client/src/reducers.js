import * as Actions from './actions'

const initialState = {
  isFetching: false,
  results: [],
  search: {},
  currentPage: 1,
  review: null,
  showModal: false
}

export function search(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true,
        search: action.data,
        resultsCount: '',
        currentPage: 1,
      }
    case Actions.GET_PAGE_REQUEST:
      return {
        ...state,
        isFetching: true,
        search: action.data,
      }
    case Actions.GET_PAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.data.results.work
      }
    case Actions.GET_PAGE_FAILURE:
      return state
    case Actions.GET_SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        results: action.data.results.work,
        resultsCount: action.data.total_results,
        pageCount: Math.ceil(action.data.total_results / 20)
      }
    case Actions.GET_SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        results: [],
        resultsCount: 0,
        pageCount: 1,
        currentPage: 1
      }
    case Actions.GET_REVIEW_REQUEST:
      return {
        ...state,
        isFetchingReview: true,
        showModal: true
      }
    case Actions.GET_REVIEW_SUCCESS:
      return {
        ...state,
        isFetchingReview: false,
        review: action.data
      }
    case Actions.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        review: null
      }
    default:

      return state
  }
}
