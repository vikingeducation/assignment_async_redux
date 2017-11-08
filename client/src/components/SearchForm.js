import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSubmit }) => {
	return (
		<form className="searchForm" onSubmit={e => onSubmit(e)}>
			<label htmlFor="search">Search goodreads</label>
			<input type="text" name="search" />
			<button type="submit">Search</button>
		</form>
	);
};

SearchForm.propTypes = {};
export default SearchForm;
