import React from "react";
import PropTypes from "prop-types";
let bookAuthors = authorsArray => {
	return authorsArray.map((item, i) => (
		<p key={i} className="modal-author">
			{item}
		</p>
	));
};

const Modal = props => {
	const { display, book, onClick } = props;
	const modalStatus = display ? "block" : "none";
	const authorsArray = book.authors;
	function createMarkup() {
		return { __html: book.description };
	}

	return (
		<div
			style={{ display: modalStatus }}
			id="modal-wrapper"
			onClick={e => onClick()}>
			<div className="modal">
				<div id="modal-header">
					<img src={book.cover} alt="book cover" />
					<div id="modal-title-container">
						<p id="modal-title">{book.title}</p>
						<div id="modal-author-container">{bookAuthors(authorsArray)}</div>
					</div>
				</div>
				<div id="book-description" dangerouslySetInnerHTML={createMarkup()} />
			</div>
		</div>
	);
};

Modal.propTypes = {
	display: PropTypes.bool.isRequired,
	book: PropTypes.object.isRequired,
	onClick: PropTypes.func.isRequired
};
export default Modal;
