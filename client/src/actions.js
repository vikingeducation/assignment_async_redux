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

export function getInitialGReads(query = '&q=Ender%27s+Game') {
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
      // console.log(json)
      // debugger;
      dispatch(getGReadsSuccess(json.GoodreadsResponse.search))
      // console.log(json.GoodreadsResponse.search.results.work)
      // debugger;
    })
    .catch((error, json) => {
      dispatch(getGReadsFailure(error))
      console.log(json)
      debugger;
    })
  }
}
