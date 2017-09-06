import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import './App.css';

import PageHeader from '../../components/PageHeader';
import BookList from '../../containers/BookList';
import Search from '../../containers/Search';

class App extends Component {
	render() {
		console.log(this.props, 'props');
		return (
			<div className="container">
				<PageHeader />
				<Search />
				<BookList />
			</div>
		);
	}
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(
		actions.BookActions,
		actions.AuthorActions,
		dispatch
	)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
