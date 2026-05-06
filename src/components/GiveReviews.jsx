import React, { useState, useEffect } from 'react';

const GiveReviews = () => {
  const [reviewData, setReviewData] = useState({
    rating: 0,
    comment: ''
  });
  
  const [hasReviewed, setHasReviewed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // ✅ Check if user already reviewed (localStorage/API)
    const existingReview = localStorage.getItem('userReview');
    if (existingReview) {
      setHasReviewed(true);
    }
  }, []);

  const handleRatingChange = (rating) => {
    setReviewData({ ...reviewData
