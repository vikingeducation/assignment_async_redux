import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getInitialGReads} from '../actions'
import BookList from '../components/BookList'
import serialize from 'form-serialize'
import Search from '../components/Search'

class SearchContainer extends Component {
  // componentDidMount() {
  //   this.props.getInitialGReads()
  //
  // }


  render() {

    const {searchBooks, isFetching} = this.props

    return (
      <div className='searchResults'>
      <Search onSubmit={this.props.onSubmit} />
      <BookList searchBooks={searchBooks} isFetching={isFetching} />
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

// Add our new getInitialGReads action dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e) => {
      e.preventDefault();
      const form = e.target
      const data = serialize(form, {hash: true})
      dispatch(getInitialGReads(data.searchedText))
      form.reset()
    }
  }

  // return {
  //   getInitialGReads: () => {
  //     dispatch(getInitialGReads())
  //   }
  // }
}

// Map props and dispatch to SearchContainer which will
// now render BookList itself.
// Export the result of `connect` directly.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
