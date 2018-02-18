import React, {Component} from 'react'
import {connect} from 'react-redux'
import {closeModal} from '../actions'
import Modal from '../components/Modal'

class ModalContainer extends Component {

  render() {

    return (
      
      <div className='searchResults'>
        <Modal  onShow={this.props.isOpen}
                isFetching={this.props.isFetching}
                currentReviews={this.props.currentReviews}
                onClose={this.props.onClose}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchBooks: state.searchBooks,
    isFetching: state.isFetchingReview,
    isOpen: !state.isOpen,
    currentReviews: state.currentReviews,
    currentBook: state.currentBook
  }
}

// Add our new getReviews action dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (e) => {
      e.preventDefault();
      dispatch(closeModal())
    }
  }

}

// Map props and dispatch to ModalContainer which will
// now render BookList itself.
// Export the result of `connect` directly.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer)
