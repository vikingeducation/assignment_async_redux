import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import GoodreadsReviewWidget from './GoodreadsReviewWidget';

export default ({ id, rating, ratingsCount, year, isbn, book }) => {
	const { title, author, img } = book;

	return (
		<li className="row">
			<div className="col-md-2">
				<div className="thumbnail">
					<img className="book-img" src={img} alt="" />
				</div>
			</div>
			<div className="col-md-10">
				<div className="row">
					<div className="col-md-12">
						<h4>
							<strong>
								{title}
							</strong>
						</h4>
					</div>
				</div>
				<div className="row">
					<div className="col-md-3">
						<p>
							{author}
						</p>
						<p>
							{year}
						</p>
					</div>
					<div className="col-md-9">
						<StarRatingComponent
							name="rate1"
							starCount={5}
							value={+rating}
							editing={false}
						/>

						<p>
							Number of ratings: {ratingsCount}
						</p>
					</div>
				</div>
			</div>
			<GoodreadsReviewWidget title={title} isbn={isbn} />
		</li>
	);
};
