import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSubmit, isFetching, onChange, value }) => {
	console.log("onsubmit", value);
	return (
		<form className="searchForm" onSubmit={e => onSubmit(e)}>
			<input type="radio" name="search-type" value="title" /> By Title
			<input type="radio" name="search-type" value="author" /> By Author
			<br />
			<label htmlFor="search" />
			<input type="text" name="search" value={value} onChange={onChange} />
			<button type="submit">Search</button>
		</form>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
};
export default SearchForm;
