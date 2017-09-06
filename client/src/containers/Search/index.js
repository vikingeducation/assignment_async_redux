import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import serialize from 'form-serialize';
import * as actions from '../../actions';
import './Search.css';

class Search extends Component {
	onSubmitSearch = e => {
		e.preventDefault();
		const data = serialize(e.target, { hash: true });

		this.props.actions.searchBooks(data);
	};

	render() {
		return (
			<form className="form-inline" onSubmit={this.onSubmitSearch}>
				<div className="form-group col-md-5 col-md-offset-1">
					<label htmlFor="title">Search by Title or Author</label>{' '}
					<input type="text" name="title" id="title" className="form-control" />
				</div>

				<button className="btn btn-primary" type="submit">
					Search
				</button>
				<hr />
			</form>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		{ ...actions.BookActions, ...actions.AuthorActions },
		dispatch
	)
});

export default connect(null, mapDispatchToProps)(Search);
