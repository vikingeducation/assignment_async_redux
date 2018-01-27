import React from 'react'
import BookBox from './BookBox'

const BookList = ({searchBooks, isFetching}) => {
  const bookBoxes = searchBooks.map((bookData) => (
    <div className="col-sm-3 " key={1} >
      <BookBox bookData={bookData}  />
    </div>
  ))

  return (
    <div className='GReads'>
      <h1>Books Results</h1>
      {isFetching ? <p>Loading ...</p> : bookBoxes }
    </div>
  )
}


export default BookList
