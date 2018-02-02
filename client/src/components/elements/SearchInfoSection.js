import React from 'react';
import PropTypes from 'prop-types';

const SearchInfoSection = props => {
  const { search, col, children } = props;

  return (
    <div className={"SearchInfoSection col-lg-" + col}>
      <div className="card">
        <div className="card-header">
          <div>{search}</div>
        </div>
        <div className="card-block">
          <div className="card-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

SearchInfoSection.propTypes = {
  search: PropTypes.node.isRequired,
  col: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default SearchInfoSection;







