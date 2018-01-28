import React, {Component} from 'react'
import {connect} from 'react-redux'
// import Search from '../components/Search'
import {getInitialGReads} from '../actions'
import BookList from '../components/BookList'

class SearchContainer extends Component {
  componentDidMount() {
    this.props.getInitialGReads()

  }

  // componentWillMount() {
  //   console.log('Will be called on the server...')
  //   this.props.getInitialGReads()
  //   debugger;
  // }

  render() {

    const {searchBooks, isFetching} = this.props
    
    return <BookList searchBooks={searchBooks} isFetching={isFetching} />
  }
}

const mapStateToProps = (state) => {
  console.log('helloooooo')

  return {
    searchBooks: state.searchBooks,
    isFetching: state.isFetching
  }
}

// Add our new getInitialGReads action dispatch to props
const mapDispatchToProps = (dispatch) => {
  console.log('helloooooo')

  return {
    getInitialGReads: () => {
      dispatch(getInitialGReads())
    }
  }
}

// Map props and dispatch to SearchContainer which will
// now render BookList itself.
// Export the result of `connect` directly.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
