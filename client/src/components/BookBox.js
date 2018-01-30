import React from 'react'

const BookBox = (props) => {

  const {bookData} = props

  return (
    <div className="thumbnail">
      <br />
      <img src={bookData.best_book.image_url} alt={bookData.best_book.title} /><br />
      {bookData.best_book.id}<br />
      {bookData.best_book.author.name}<br />
      {bookData.best_book.title}<br /><br /><br />
    </div>
  )
}

export default BookBox
