import React from 'react'
import { connect } from 'react-redux'
import Search from '../components/Search'
import { getSearchResults } from '../actions'
import serialize from 'form-serialize'

const mapDispatchToProps = (dispatch) => {
  return {
    search: (e) => {
      e.preventDefault()
      const form = e.target
      const data = serialize(form, { hash: true })
      if (Object.keys(data).length > 1) {
        dispatch(getSearchResults(data))
      }
    }
  }
}

const SearchContainer = connect(
  null,
  mapDispatchToProps
)(Search)

export default SearchContainer
