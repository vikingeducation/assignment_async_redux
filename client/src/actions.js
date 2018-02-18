export const GET_GREADS_REQUEST = 'GET_GREADS_REQUEST'
export const GET_GREADS_SUCCESS = 'GET_GREADS_SUCCESS'
export const GET_GREADS_FAILURE = 'GET_GREADS_FAILURE'
export const REVIEWS_REQUEST = 'REVIEWS_REQUEST'
export const REVIEWS_FAILURE = 'REVIEWS_FAILURE'
export const REVIEWS_SUCCESS = 'REVIEWS_SUCCESS'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export function getGReadsRequest() {
  return {
    type: GET_GREADS_REQUEST
  }
}

export function getGReadsSuccess(data) {

  return {
    type: GET_GREADS_SUCCESS,
    data: data
  }
}

export function getGReadsFailure(error) {
  return {
    type: GET_GREADS_FAILURE,
    error
  }
}

export function getReviewsRequest() {
  return {
    type: REVIEWS_REQUEST
  }
}

export function getReviewsSuccess(data) {

  return {
    type: REVIEWS_SUCCESS,
    data: data
  }
}

export function getReviewsFailure(error) {
  return {
    type: REVIEWS_FAILURE,
    error
  }
}


export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}


export function getInitialGReads(query) {
  return (dispatch) => {
    dispatch(getGReadsRequest())

    fetch('api/search?q=' + query)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.satus} - ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      dispatch(getGReadsSuccess(json.GoodreadsResponse.search))
    })
    .catch((error, json) => {
      dispatch(getGReadsFailure(error))
      console.log(json)
      debugger;
    })
  }
}

export function getReviews(id) {
  return (dispatch) => {
    dispatch(getReviewsRequest())

    fetch('api/show?id=' + id)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.satus} - ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      dispatch(getReviewsSuccess(json.GoodreadsResponse.book))
    })
    .catch((error, json) => {
      dispatch(getReviewsFailure(error))
      console.log(json)
      debugger;
    })
  }
}
