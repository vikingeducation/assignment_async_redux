import React, { Component } from "react";
import SearchFormContainer from "./containers/SearchFormContainer";
import BookListContainer from "./containers/BookListContainer";
import ModalContainer from "./containers/ModalContainer";
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 id="title">Search GoodReads</h1>
				<SearchFormContainer />
				<ModalContainer />
				<BookListContainer />
			</div>
		);
	}
}

export default App;
