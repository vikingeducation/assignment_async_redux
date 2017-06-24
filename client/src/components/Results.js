import React from 'react'
import Table from './Table'
import TableHeaders from './elements/TableHeaders'
import ResultListings from './elements/ResultListings'

const Results = ({ count, results, search, isFetching, viewResult, pageCount }) => {

  const headers = ['Title', 'Author', 'Rating', 'View']

  let currentPage = search.page && pageCount ? "Currently viewing page " + search.page + " of " + pageCount + " pages" : ''

  search = search.term ? "for '" + search.term + "'" : ''

  if (isFetching) {
    var body = 'Loading...'
  } else {
    var body = (<Table>
  <TableHeaders headers={headers} />
  <ResultListings records={results} callback={viewResult} />
  </Table>)

  }

  return (
    <section id="results">
  <h2>{count} Results {search}</h2>
  <p>{currentPage}</p>
  {body}
  </section>
  )
}

export default Results
