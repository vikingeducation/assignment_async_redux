export const GET_GOODREADS_REQUEST = "GET_GOODREADS_REQUEST";
export const GET_GOODREADS_SUCCESS = "GET_GOODREADS_SUCCESS";
export const GET_GOODREADS_FAILURE = "GET_GOODREADS_FAILURE";
export const SEARCH_RESULTS = "SEARCH_RESULTS";
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

/***********************
server actions
************************/
export function getGOODREADSRequest() {
	return {
		type: GET_GOODREADS_REQUEST
	};
}

export function getGOODREADSSuccess(data) {
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

/***********************
User Events
************************/
export function searchResults(data) {
	return {
		type: SEARCH_RESULTS,
		data
	};
}

//controls state of user input into search box
export function handleChange(data) {
	console.log("DATA", data);
	return {
		type: HANDLE_CHANGE,
		data
	};
}

//when a book is click, show modal
export function handleBookClickAction(data) {
	return {
		type: SHOW_MODAL,
		data
	};
}
//closes Modal when modal is clicked
export function handleModalClick() {
	return {
		type: CLOSE_MODAL
	};
}
/***********************************
sends data to server to make API calls
***********************************/
//gets booklist based on value argument
export function getResults(value, type) {
	console.log("in getResults", value);
	return dispatch => {
		// Update the state so that it knows the request has begun
		dispatch(getGOODREADSRequest());

		fetch(`/${type}?search=${value}`)
			.then(response => {
				// If response not okay, throw an error
				if (!response.ok) {
					console.log("error in actions.js response");
					console.log(response);
					throw new Error(`${response.status} ${response.statusText}`);
				}
				return response.json();
			})
			.then(data => {
				dispatch(getGOODREADSSuccess());
				if (type === "bookList") {
					dispatch(searchResults(data));
				} else if (type === "book") {
					dispatch(handleBookClickAction(data));
				}
			})
			.catch(error => {
				// Dispatch failure which sets the error in state
				dispatch(getGOODREADSFailure(error));
			});
	};
}
