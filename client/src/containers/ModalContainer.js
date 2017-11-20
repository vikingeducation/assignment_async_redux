import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import { handleModalClick } from "../actions";
class ModalContainer extends Component {
	render() {
		return <Modal {...this.props} />;
	}
}

const mapStateToProps = (state, ownProps) => {
	//console.log("In modal container", state);
	return {
		display: state.bookModal.showingModal,
		book: state.bookModal.bookData
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: e => {
			dispatch(handleModalClick());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);
