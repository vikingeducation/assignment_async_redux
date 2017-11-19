import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from "../components/BookList";

class BookListContainer extends Component {
	componentDidMount() {}
	render() {
		const { bookList, searchBy } = this.props;
		//const { isFetching, onSubmit } = this.props;
		return <BookList bookList={bookList} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log("IN MAP", state.bookList.bookList);
	return {
		bookList: state.bookList.bookList
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
