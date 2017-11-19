import React, { Component } from "react";
import SearchFormContainer from "./containers/SearchFormContainer";
import BookListContainer from "./containers/BookListContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 id="title">Search GoodReads</h1>
				<SearchFormContainer />
				<BookListContainer />
			</div>
		);
	}
}

export default App;
