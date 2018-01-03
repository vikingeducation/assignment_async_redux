import {connect} from 'react-redux'
import App from '../components/App'
//import serialize from 'form-serialize'
//import {showOne} from '../actions'


const mapStateToProps = (state) => {
  
  return {
    books: state.goodreads.books,
  }
}

/*
const mapDispatchToProps = (dispatch) =>{
  return {
    onSubmit: (e) => {
      e.preventDefault()
      const form = e.target
      form.id = Number(form.id)
      console.log(form.id)
      const data = serialize(form, {hash: true})

      dispatch(showOne(data))
    }
  }
}

const AccountListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountList)
*/

const AppContainer = connect(mapStateToProps)(App)
export default AppContainer
