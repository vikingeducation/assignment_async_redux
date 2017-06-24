import React from 'react'


const Modal = ({ show, content, closeModal, isFetching }) => {
  let style = show ? { display: 'block' } : {}

  // what if no content, i.e. content undefined?
  console.log('content', content, 'show', show)

  if (content) {
    var title = content.title
    var img = content.image_url
    var reviews = content.reviews_widget
    var description = content.description
    var rating = content.average_rating
    var link = content.link
    if (Array.isArray(content.authors.author)) {
      let limit = content.authors.author.length
      var author = content.authors.author.map((author, i) => {
        let divider = (i + 1 === limit) ? '' : ', '
        return <span key={author.id}><a href={author.link}>{author.name}</a>{divider}</span>
      })
    } else {
      var author = <a href={content.authors.author.link}>{content.authors.author.name}</a>
    }


    return (
      <div className="modal"
      style={ style } >
      <div className="modal-dialog" role="document">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
          <span aria-hidden="true">×</span>
        </button>
    <div className="media">
  <img className="d-flex mr-3" src={img} alt="Generic placeholder image" />
  <div className="media-body">
    <h5 className="mt-0"><a href={link}>{title}</a></h5>
    <p className="mb-0">{author}</p>
    <p>{rating}</p>
    <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
  </div>
  </div>

    <div className="goodreads" dangerouslySetInnerHTML={{ __html: reviews }}/>

    <div id="overlay"  style={ style }></div>
    </div> </div>
    )
  } else {
    return (
      <div className="modal" style={style} >
    <div className="modal-dialog" role="document">
    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
          <span aria-hidden="true">×</span>
        </button>
    <p>{isFetching ? 'Loading...' : 'No information found'}</p>
    </div>
    </div>
    )

  }
}

export default Modal
