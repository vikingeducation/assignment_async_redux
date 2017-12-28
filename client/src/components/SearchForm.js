import React from 'react';
import PropTypes from 'prop-types';
import Input from './elements/Input';
import Button from './elements/Button';

const SearchForm = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="SearchForm container">
        <div className="row justify-content-center">
          <Input name="search_query" placeholder="&#xF002; Search Books" className="SearchInput col-md-6" />
        </div>

        <div className="row justify-content-center">
          <Button type="submit" color="primary" size="sm" className="col-md-6">Search</Button>
        </div>

      </div>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default SearchForm;
