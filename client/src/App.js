import React, { Component } from "react";
import SearchFormContainer from "./containers/SearchFormContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Search GoodReads</h1>
				<SearchFormContainer />
			</div>
		);
	}
}

export default App;
