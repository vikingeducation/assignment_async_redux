import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './App.css';

class App extends Component {
	render() {
		console.log(this.props, 'props');
		return <div>Book Search</div>;
	}
}

const mapStateToProps = state => {
	return { ...state };
};
const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(
			actions.BookActions,
			actions.AuthorActions,
			dispatch
		)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
