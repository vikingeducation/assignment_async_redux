export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST"
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS"
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE"


export function getGoodreadsRequest(){
  return{
    type:GET_GOODREADS_REQUEST
  }
}

export function getGoodreadsSuccess(data){
  return{
    type:GET_GOODREADS_SUCCESS,
    data:data
  }
}

export function getGoodreadsFailure(error){
  return{
    type:GET_GOODREADS_FAILURE,
    error:error
  }
}

export function getGoodreads(query){
  return dispatch=>{
    dispatch(getGoodreadsRequest());
    fetch(`api/goodreads?${query}`).then(response =>{
      if (!response.ok){
        throw new Error(`${response}`)
      }
      return response
    })
    .then(response=>{
      dispatch(getGoodreadsSuccess(response))
    })
    .catch(e){
      dispatch(getGoodreadsFailure(e))
    }
  }
}