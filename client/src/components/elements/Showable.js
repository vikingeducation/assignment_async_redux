import React from "react";
import PropTypes from "prop-types";

const Showable = ({ show, children }) => {
  if (!show) {
    console.log("show", show);
    return null;
  }
  console.log("show", show);
  return <div>{children}</div>;
};

Showable.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default Showable;
