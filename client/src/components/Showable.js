import React from "react";

const Showable = ({ condition, children }) => {
  if (condition) {
    return <div>{children}</div>;
  } else {
    return null;
  }
};

export default Showable;
