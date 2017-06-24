import React, { Component } from 'react'

const Pagination = ({ pageCount, changePage, search }) => {

  const currentPage = search.page

  let previous, next;

  if (currentPage > 1) {
    previous = (<li className="page-item">
           <a aria-label="Previous" data-pagination-action={currentPage - 1} onClick={changePage}><span aria-hidden="true" className="page-link">Previous</span></a>
          </li>)
  } else {
    previous = (
      <li className="disabled page-item">
          <a aria-label="Previous" className="page-link"><span aria-hidden="true">Previous</span></a>
        </li>
    )
  }

  if (currentPage === (pageCount)) {
    next = (<li className="disabled page-item">
              <a aria-label="Next" className="page-link"><span aria-hidden="true" >Next</span></a>
                </li>)
  } else {
    next = (<li className="page-item" onClick={this.changePage } > 
        <a aria-label="Next" data-pagination-action={currentPage + 1}  data-search-term={search.term} data-search-type={search.type} className="page-link"  onClick={changePage } >
        <span aria-hidden="true" className="point-through">Next</span>
        </a> 
        </li>)
  }


  return (
    <nav aria-label="Page navigation">
        <ul className="pagination">
          {previous}
          {next}
        </ul>
     </nav>
  )
}


export default Pagination
