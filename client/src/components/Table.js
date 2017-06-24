import React from 'react'

const Table = ({ children, ...rest }) => (
  <table className="table" {...rest}>
  {children}
  </table>
)

export default Table
