// import React, {PropTypes} from 'react'
import React from 'react';
import PropTypes from 'prop-types';

const JumbotronFluid = ({heading, lead}) => (
  <div className='jumbotron jumbotron-fluid'>
    <div className='container'>
        <h1 className='display-3'>{heading}</h1>
        <p className='lead'>{lead}</p>
    </div>
  </div>
)

JumbotronFluid.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string
}

export default JumbotronFluid
