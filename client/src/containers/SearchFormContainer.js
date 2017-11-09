import React, { Component } from "react";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { getResults } from "../actions";

class SearchFormContainer extends Component {
	componentDidMount() {}
	render() {
		const { isFetching, onSubmit } = this.props;
		return <SearchForm onSubmit={onSubmit} isFetching={isFetching} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: e => {
			e.preventDefault();
			dispatch(getResults());
		}
	};
};

SearchFormContainer.propTypes = {};
export default connect(mapStateToProps, mapDispatchToProps)(
	SearchFormContainer
);
