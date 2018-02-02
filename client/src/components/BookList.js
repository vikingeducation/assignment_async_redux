import React from 'react'
import BookBox from './BookBox'

const BookList = ({searchBooks, isFetching, onShow}) => {
  const bookBoxes = searchBooks.map((bookData) => (
    <div className="col-sm-3 " key={bookData.id} >
      <BookBox bookData={bookData}  onShow={onShow}/>
    </div>
  ))


  return (
    <div className='GReads'>
      <h1>Books Results</h1>
      <div className="container-fluid ">
      <div className="row">
        {isFetching ? <p>Loading ...</p> : bookBoxes }
      </div>
      </div>

    </div>
  )
}


export default BookList
