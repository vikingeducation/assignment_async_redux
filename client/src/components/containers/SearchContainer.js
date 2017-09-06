import { Component } from "react";
import { connect } from "react-redux";
import Search from "../Search";
import serialize from "form-serialize";

class SearchContainer extends Component {
  // constructor(){
  //   super()
  // }
  render() {
    return <Search />;
  }
}

//
// const mapStateToProps = state =>{
//
// }
const mapDispatchToProps = dispatch => {
  return {
    onClick: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });
      console.log("form = ", data);
      dispatch(getBooksRequest(data));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchContainer);
