import React from 'react'
import PropTypes from 'prop-types'
import Button from './elements/Button'

const Modal = ({isFetching, onClose, onShow, currentReviews}) => {
  let style = onShow ? { display: 'block' } : {}
  if (!onShow) {

    const reviews = currentReviews.reviews_widget
    let bookAuthors;
    if (Array.isArray(currentReviews.authors.author)) {
      bookAuthors = currentReviews.authors.author.map((auth) => {
        return <a href={auth.link}>{auth.name}</a>
      })
    } else {
      bookAuthors = <a href={currentReviews.authors.author.link}>{currentReviews.authors.author.name}</a>
    }

    return (
      <div className="backdropStyle" style={style}>
        <div className='modalStyle' >
          <img src={currentReviews.small_image_url} className='left-position' /><br />
          <h3>{ currentReviews.title }</h3>
          <h4>{bookAuthors }</h4><br/>
          <h6>Rating: { currentReviews.ratings_count }</h6><br/>
          <i>Published: { currentReviews.publication_year }</i>
          <p dangerouslySetInnerHTML={{ __html: currentReviews.description }}></p>

          <div dangerouslySetInnerHTML={{__html: reviews }} />

          <div className="footer">
            <Button color='info' onClick={onClose}>
              Close
            </Button>
          </div>

        </div>
      </div>
    )

  } else if (isFetching){
    return (
      <div className="backdropStyle" style={style}>
        <div className='modalStyle' >

            <p>{isFetching ? 'Loading...' : 'No Data found'}</p>

            <Button color='info' onClick={onClose}>
              Close
            </Button>

        </div>
      </div>

    )
  } else {
    return null
  }
}

Modal.propTypes = {
  onShow: PropTypes.bool.isRequired,
  currentReviews: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal
