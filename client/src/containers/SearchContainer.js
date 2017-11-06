import { connect } from "react-redux";
import Searchbar from "../components/Searchbar/Searchbar";
import { getSearchText, setSearchText } from "../actions";
import serialize from "form-serialize";

const mapStateToProps = state => {
  return {
    searchText: state.searchText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchText: data => {
      dispatch(setSearchText(data));
    },
    searchSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(getSearchText(data));
      form.reset();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
