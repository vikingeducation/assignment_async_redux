import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { getResults, handleChange } from "../actions";

class SearchFormContainer extends Component {
	componentDidMount() {}
	render() {
		//const { isFetching, onSubmit, searchBy } = this.props;
		return <SearchForm {...this.props} />;
	}
}

const mapStateToProps = state => {
	//console.log("mapState", state);
	return {
		isFetching: state.bookList.isFetching,
		value: state.searchValue
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: value => {
			dispatch(getResults(value, "bookList"));
			dispatch(handleChange("")); //resets search input
		},
		onChange: e => {
			//console.log("E", e.target.value);
			dispatch(handleChange(e.target.value));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(
	SearchFormContainer
);
