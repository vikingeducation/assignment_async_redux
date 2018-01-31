import React from 'react'

const BookBox = (props) => {

  const {bookData, onClick} = props

  return (
    <div className="thumbnail">
      <br />
      <a href='#' onClick={onClick}>
        <img src={bookData.best_book.image_url} alt={bookData.best_book.title} /><br />
      </a>
      {bookData.best_book.id}<br />
      {bookData.best_book.author.name}<br />
      {bookData.best_book.title}<br /><br /><br />
      Rating <b>{bookData.average_rating}</b>
    </div>
  )
}

export default BookBox
