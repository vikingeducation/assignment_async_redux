export const GET_SEARCH_REQUEST = 'GET_SEARCH_REQUEST'
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS'
export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE'
export const GET_REVIEW_REQUEST = 'GET_REVIEW_REQUEST'
export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS'
export const GET_REVIEW_FAILURE = 'GET_REVIEW_FAILURE'
export const CLOSE_MODAL = 'CLOSE_MODAL'
export const GET_PAGE_REQUEST = 'GET_PAGE_REQUEST'
export const GET_PAGE_SUCCESS = 'GET_PAGE_SUCCESS'
export const GET_PAGE_FAILURE = 'GET_PAGE_FAILURE'

export function getSearchRequest(terms) {
  return {
    type: GET_SEARCH_REQUEST,
    data: terms
  }
}

export function getSearchSuccess(data) {
  return {
    type: GET_SEARCH_SUCCESS,
    data: data
  }
}

export function getSearchFailure(error) {
  return {
    type: GET_SEARCH_FAILURE,
    error
  }
}

export function getReviewRequest(terms) {
  return {
    type: GET_REVIEW_REQUEST,
    data: terms
  }
}

export function getReviewSuccess(data) {
  return {
    type: GET_REVIEW_SUCCESS,
    data: data
  }
}

export function getReviewFailure(error) {
  return {
    type: GET_REVIEW_FAILURE,
    error
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}

export function getPageRequest(data) {
  return {
    type: GET_PAGE_REQUEST,
    data: data
  }
}

export function getPageSuccess(data) {
  return {
    type: GET_PAGE_SUCCESS,
    data: data
  }
}

export function getPageFailure(data) {
  return {
    type: GET_PAGE_FAILURE,

  }
}

export function getSearchResults(query) {
  return (dispatch) => {
    dispatch(getSearchRequest({
      term: query.term,
      type: query.type,
      page: query.page || 1
    }))

    fetch('/api/search/?q=' + query.term + '&field=' + query.type + '&page=' + query.page)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        dispatch(getSearchSuccess(json.GoodreadsResponse.search))
      })
      .catch((error) => {
        dispatch(getSearchFailure(error))
      })
  }
}

export function getReview(id) {
  return (dispatch) => {
    dispatch(getReviewRequest())

    fetch('/api/reviews/?id=' + id + '&text_only=true')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        console.log('review data', json.GoodreadsResponse.book)
        dispatch(getReviewSuccess(json.GoodreadsResponse.book))
      })
      .catch((error) => {
        dispatch(getReviewFailure(error))
      })
  }
}


export function getOtherPage(query) {
  return (dispatch) => {
    dispatch(getPageRequest({
      term: query.term,
      type: query.type,
      page: query.page || 1
    }))

    fetch('/api/search/?q=' + query.term + '&field=' + query.type + '&page=' + query.page)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`)
        }
        return response.json()
      })
      .then((json) => {
        dispatch(getPageSuccess(json.GoodreadsResponse.search))
      })
      .catch((error) => {
        dispatch(getPageFailure(error))
      })
  }
}
