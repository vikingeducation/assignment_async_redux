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

		this.props.onSubmitSearch(data);
	};

	render() {
		return (
			<form className="form-inline" onSubmit={this.onSubmitSearch}>
				<div className="form-group">
					<label htmlFor="title">Search by Title</label>
					<input type="text" name="title" id="title" className="form-control" />
				</div>

				<div className="form-group">
					<label htmlFor="author">Search by Author</label>
					<input
						type="text"
						name="author"
						id="author"
						className="form-control"
					/>
				</div>

				<button className="btn btn-primary" type="submit">
					Search
				</button>
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
