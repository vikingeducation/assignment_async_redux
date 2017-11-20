import React from "react";
import PropTypes from "prop-types";

const SearchForm = ({ onSubmit, onChange, value }) => {
	let handleSubmit = e => {
		e.preventDefault();
		onSubmit(value);
	};
	return (
		<form className="search-form" onSubmit={e => handleSubmit(e)}>
			<label htmlFor="search" />
			<input
				type="text"
				name="search"
				value={value}
				onChange={onChange}
				placeholder="Enter search term"
			/>
			<button type="submit">Search</button>
		</form>
	);
};

SearchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	value: PropTypes.string
};
export default SearchForm;
