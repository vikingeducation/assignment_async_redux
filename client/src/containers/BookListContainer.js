import React, { Component } from "react";
import { connect } from "react-redux";
import BookList from "../components/BookList";
import { getResults } from "../actions";

class BookListContainer extends Component {
	componentDidMount() {}
	render() {
		const { bookList, handleBookClick } = this.props;

		return <BookList bookList={bookList} handleClick={handleBookClick} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		bookList: state.bookList.bookList
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		handleBookClick: (e, id) => {
			e.preventDefault();
			console.log("bklistCont e.target", e.target, "id: ", id);
			dispatch(getResults(id, "book"));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
