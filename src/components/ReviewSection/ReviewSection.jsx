import React, { useState } from 'react';

// Review Form Component
const ReviewForm = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      onSubmit(reviewText, rating);
      setReviewText("");
      setRating(1);
    }
  };

  return (
    <div className="review-form">
      <h3>Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review here..."
          rows="4"
        />
        <div className="rating">
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Star{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

// Review List Component
const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      <h3>Customer Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="rating">{'★'.repeat(review.rating)}</div>
            <p>{review.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

// Main Review Section Component
const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (text, rating) => {
    const newReview = { text, rating };
    setReviews([newReview, ...reviews]);
  };

  return (
    <div className="review-section">
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default ReviewSection;
