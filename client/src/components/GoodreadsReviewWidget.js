import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class GoodreadsReviewWidget extends Component {
	render() {
		const bookTitle = this.props.bookTitle || 'foo';
		const isbn = this.props.isbn || '0452254264';
		return (
			<div id="goodreads-widget">
				<iframe
					id="the_iframe"
					src={`https://www.goodreads.com/api/reviews_widget_iframe?&format=html&header_text=${bookTitle}&isbn=${isbn}&links=660&review_back=fff&stars=ffb400&text=333`}
					width="765"
					height="400"
				/>
			</div>
		);
	}
}

export default GoodreadsReviewWidget;
