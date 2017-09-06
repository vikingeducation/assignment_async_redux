import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { fetchBooks } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    handleFetch: e => {
      e.preventDefault();
      dispatch(fetchBooks(e.target.query.value, e.target.field.value));
    }
  };
};

const SearchFormContainer = connect(null, mapDispatchToProps)(SearchForm);

export default SearchFormContainer;
