import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from '../components/Results'
import { getSearchResults, getReview } from '../actions'

const mapStateToProps = (state) => {
  return {
    results: state.results,
    search: state.search,
    isFetching: state.isFetching,
    count: state.resultsCount,
    pageCount: state.pageCount,
    currentPage: state.search.page
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewResult: (e) => {
      e.preventDefault()
      const id = parseInt(e.target.getAttribute('data-id'), 10)
      dispatch(getReview(id))
    }
  }
}

const ResultsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results)

export default ResultsContainer
