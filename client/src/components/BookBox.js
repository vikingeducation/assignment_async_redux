import React from 'react'
// const {
//   getUserPage,
//   getHashtag,
//   getUserRealName,
//   getCommentsCount,
//   getLikesCount,
//   getUserName,
//   getFilter,
//   getBookLink,
//   getInstagramLink,
//   getCreationTime } = require('../../helpers/jsonScraper');




// <a href={getInstagramLink(photoData)} target="_blank">
//   <img onError={addDefaultSrc} src={getBookLink(photoData)} alt="" />
// </a>
// <div className="caption">
//   <h4>
//     <a href={getUserPage(photoData)} target="_blank">
//       {getUserName(photoData)}
//     </a>
//   </h4>
//   <em>Author name: {getUserRealName(photoData)}</em>
//   <br/><small>
//     {getCreationTime(photoData).toDateString() }<br/>
//     {getCreationTime(photoData).toLocaleTimeString()}
//   </small>
//   <p className="text-success text-left">
//     {getLikesCount(photoData)} Likes
//     <br/>
//     {getCommentsCount(photoData)} Comments
//   </p>
//   <p>
// </div>


const BookBox = (props) => {

  const {bookData} = props

  console.log('anyone fucking in hereeeee!!!!!!!!!!!!')

  return (

    <div className="thumbnail">
      BookBox
      {bookData}
    </div>
  )
}

export default BookBox
