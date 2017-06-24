import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pagination from '../components/Pagination'
import { getOtherPage } from '../actions'

const mapStateToProps = (state) => {
  return {
    pageCount: state.pageCount,
    search: state.search
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (e) => {
      e.preventDefault()
      console.log('changePage', e.target)
      const term = e.target.getAttribute('data-search-term')
      const type = e.target.getAttribute('data-search-type')
      const page = parseInt(e.target.getAttribute('data-pagination-action'), 10)
      dispatch(getOtherPage({
        term: term,
        type: type,
        page: page
      }))
    }
  }
}

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)

export default PaginationContainer
