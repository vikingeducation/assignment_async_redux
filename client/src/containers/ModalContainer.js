import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getReviews} from '../actions'
import Modal from '../components/Modal'

class ModalContainer extends Component {

  render() {

    const {searchBooks, isFetching} = this.props

    return (
      <div className='searchResults'>
        <Modal width={400}
              showOk={false}
              onClick={this.props.onClick} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

  return {
    searchBooks: state.searchBooks,
    isFetching: state.isFetching
  }
}

// Add our new getReviews action dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (e) => {
      //
      //
      //
      // if (e.target === e.currentTarget) props.hideModal();
      // e.preventDefault();
      // const form = e.target
      // const data = serialize(form, {hash: true})
      // dispatch(getReviews(data.id))
      // form.reset()
    }
  }

  // return {
  //   getReviews: () => {
  //     dispatch(getReviews())
  //   }
  // }
}

// Map props and dispatch to ModalContainer which will
// now render BookList itself.
// Export the result of `connect` directly.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalContainer)
