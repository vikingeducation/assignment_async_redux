import React from 'react'

const ResultListings = ({ records, callback }) => {

  let results = records.map((record) => {
    return (
      <tr key={record.best_book.id}>
      <td>{record.best_book.title}</td>
      <td>{record.best_book.author.name}</td>
      <td>{record.average_rating}</td>
      <td><a href="#" onClick={callback} data-id={record.best_book.id}>View</a></td>
      </tr>
    )
  })

  return (
    <tbody>
    {results}
  </tbody>
  )

}

export default ResultListings
