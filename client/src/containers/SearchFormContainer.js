import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { dispatch, getResults } from "../actions";

class SearchFormContainer extends Component {
	componentDidMount() {}
	render() {
		const { isFetching, books } = this.props;
		return <SearchForm books={books} isFetching={isFetching} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		books: state.bookList,
		isFetching: state.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: dispatch(getResults())
	};
};

SearchFormContainer.propTypes = {};
export default connect(mapStateToProps, mapDispatchToProps)(
	SearchFormContainer
);
