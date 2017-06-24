import React from 'react'
const TableHeaders = ({ headers, ...rest }) => {
  let labels = headers.map((header) => {
    return (<th key={header}>{header}</th>)
  })

  return (
    <thead {...rest}>
      <tr>{labels}</tr>
      </thead>
  )

}

export default TableHeaders
