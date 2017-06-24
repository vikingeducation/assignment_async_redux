import React, { Component } from 'react'
import { connect } from 'react-redux'
import Modal from '../components/Modal'
import { closeModal } from '../actions'



const mapStateToProps = (state) => {
  return {
    content: state.review,
    show: state.showModal,
    isFetching: state.isFetchingReview
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: (e) => {
      e.preventDefault()
      dispatch(closeModal())
    }
  }
}


const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)



export default ModalContainer
