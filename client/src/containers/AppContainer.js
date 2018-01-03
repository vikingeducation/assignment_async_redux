import { connect } from "react-redux";
import App from "../components/App";
import serialize from "form-serialize";
import { getGoodreads } from "../actions";

const mapStateToProps = state => {
  return {
    books: state.goodreads.books
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getGoodreads: () => {
      dispatch(getGoodreads("Harry Potter"));
    },
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log(data);
      let query = data.search;
      dispatch(getGoodreads(query));
      form.reset();
    },
    onClick: e => {
      e.preventDefault();
      //let id = e.target.data
      console.log(data);
      let query = data.search;
      dispatch(getGoodreads(query));
      form.reset();
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
