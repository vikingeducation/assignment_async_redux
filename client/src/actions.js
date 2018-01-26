export const GET_GReads_REQUEST = 'GET_GReads_REQUEST'
export const GET_GReads_SUCCESS = 'GET_GReads_SUCCESS'
export const GET_GReads_FAILURE = 'GET_GReads_FAILURE'

export function getGReadsRequest() {
  return {
    type: GET_GReads_REQUEST
  }
}

export function getGReadsSuccess(data) {
  return {
    type: GET_GReads_SUCCESS,
    data
  }
}

export function getGReadsFailure(error) {
  return {
    type: GET_GReads_FAILURE,
    error
  }
}

export function getInitialGReads() {
  return (dispatch) => {
    dispatch(getGReadsRequest())

    fetch('api/greads')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.satus} - ${response.statusText}`)
      }
      return response.json()
    })
    .then((json) => {
      dispatch(getGReadsSuccess(json))
    })
    .catch((error) => {
      dispatch(getGReadsFailure(error))
    })
  }
}
