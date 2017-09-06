import React, { Component } from 'react';

class GoodreadsReviewWidget extends Component {
	render() {
		if (!this.props.isbn) return null;
		const bookTitle = 'foo';
		const isbn = '0452254264';
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
