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

//
//let parsedResponse = xml2js.parseString(await response.text(), function() {});

// console.log("RRRAAA", parsedResponse);
//
// let resultArray = parsedResponse.GoodreadsResponse.search[0].results[0].work;
//
// let bookArray = resultArray.map(item => {
// 	return item.best_book[0];
// });
//
// //create array of book results for export
// bookList = bookArray.map(item => {
// 	return {
// 		title: item.title[0],
// 		author: item.author[0].name[0],
// 		img_url: item.image_url[0]
// 	};
// });
//console.log(bookList, "response is");
//return bookList;

//

export function getResults() {
	console.log("in getResults");
	return dispatch => {
		// Update the state so that it knows the request has begun
		dispatch(getGOODREADSRequest());

		fetch(`/results`)
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
				dispatch(getGOODREADSSuccess(data));
			})
			.catch(error => {
				// Dispatch failure which sets the error in state
				dispatch(getGOODREADSFailure(error));
			});
	};
}
/***********************

************************/
