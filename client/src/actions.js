export const GET_GREADS_REQUEST = 'GET_GREADS_REQUEST'
export const GET_GREADS_SUCCESS = 'GET_GREADS_SUCCESS'
export const GET_GREADS_FAILURE = 'GET_GREADS_FAILURE'
export const INSERT_REQUEST = 'INSERT_REQUEST'
export const INSERT_FAILURE = 'INSERT_FAILURE'
export const INSERT_SUCCESS = 'INSERT_SUCCESS'

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

export function getInitialGReads(query) {
  return (dispatch) => {
    dispatch(getGReadsRequest())

    fetch('api/search?q=' + query)
    .then((response) => {
      console.log(query)
      debugger;
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
