import React from "react";
import PropTypes from "prop-types";

const Modal = props => {
	const { display, book, onClick } = props;
	const modalStatus = display ? "block" : "none";
	return (
		<div
			style={{ display: modalStatus }}
			id="modal-wrapper"
			onClick={e => onClick()}>
			`HERRO MODAL {modalStatus}`
			<div className="modal">
				<div id="modal-header">
					<img src={book.cover} alt="book cover" />
					<p id="modal-title">{book.title}</p>
					<p>{book.author}</p>
				</div>
				<div id="book-description">
					<p>Description: </p> {book.description}
				</div>
			</div>
		</div>
	);
};

Modal.propTypes = {};
export default Modal;
