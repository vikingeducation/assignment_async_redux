export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";

/***********************
server actions
************************/
export function getGOODREADSRequest() {
	return {
		type: GET_GOODREADS_REQUEST
	};
}

export function getGOODREADSSuccess(data) {
	console.log("HERE 1");

	return {
		type: GET_GOODREADS_SUCCESS,
		data
	};
}

export function getGOODREADSFailure(error) {
	return {
		type: GET_GOODREADS_FAILURE,
		error
	};
}

export function getResults() {
	console.log("in getResults");
	return dispatch => {
		// Update the state so that it knows the request has begun
		dispatch(getGOODREADSRequest());

		fetch(`/test`)
			.then(response => {
				console.log("action response", response);
				// If response not okay, throw an error
				if (!response.ok) {
					console.log("error in actions.js response");
					console.log(response);
					throw new Error(`${response.status} ${response.statusText}`);
				}
				// Otherwise, extract the response into json
				return response.json();
			})
			.then(json => {
				console.log("hit", json);
				// Dispatch success which sets the APOD.
				dispatch(getGOODREADSSuccess(json));
			})
			.catch(error => {
				// Dispatch failure which sets the error in state
				dispatch(getGOODREADSFailure(error));
			});
	};
}
/***********************

************************/
