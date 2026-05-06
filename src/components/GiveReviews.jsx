import React, { useState, useEffect } from 'react';

const GiveReviews = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [latestBooking, setLatestBooking] = useState(null);

  useEffect(() => {
    // Load latest booking from localStorage
    const booking = localStorage.getItem('latestBooking');
    if (booking) {
      setLatestBooking(JSON.parse(booking));
    }
    
    // Load existing reviews
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (rating === 0 || reviewText.trim() === '') {
      alert('Please select a rating and write a review!');
      return;
    }

    const newReview = {
      id: Date.now(),
      rating,
      text: reviewText,
      date: new Date().toLocaleDateString()
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    
    setRating(0);
    setReviewText('');
    alert('✅ Review submitted successfully!');
  };

  return (
    <div className="profile-reviews">
      <h2>Your Profile & Reviews</h2>
      
      {latestBooking && (
        <div className="latest-booking">
          <h3>Latest Booking</h3>
          <p><strong>Doctor:</strong> {latestBooking.doctorName}</p>
          <p><strong>Date:</strong> {latestBooking.date}</p>
          <p><strong>Time:</strong> {latestBooking.time}</p>
        </div>
      )}

      <div className="review-form">
        <h3>Leave a Review</h3>
        <form onSubmit={handleSubmitReview}>
          <div className="stars">
            {[5,4,3,2,1].map((star) => (
              <span
                key={star}
                className={rating >= star ? 'star filled' : 'star'}
                onClick={() => handleRatingChange(star)}
              >
                ★
              </span>
            ))}
          </div>
          
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience..."
            maxLength={200}
            required
          />
          
          <button type="submit">Submit Review</button>
        </form>
      </div>

      <div className="reviews-list">
        <h3>Your Reviews</h3>
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-header">
              <span className="review-stars">
                {[...Array(review.rating)].map((_, i) => '★').join('')}
                {[...Array(5 - review.rating)].map((_, i) => '☆').join('')}
              </span>
              <span className="review-date">{review.date}</span>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GiveReviews;
