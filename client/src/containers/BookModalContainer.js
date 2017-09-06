import React from "react";
import BookModal from "../components/BookModal";
import { closeModal } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = ({ bookModal, book }) => {
  return {
    bookModal,
    book
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => {
      dispatch(closeModal());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookModal);
