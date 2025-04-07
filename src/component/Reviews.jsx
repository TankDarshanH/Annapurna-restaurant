import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ReviewsContext } from "../ReviewsContext"; // Import context

const Reviews = () => {
  const { reviews, setReviews } = useContext(ReviewsContext); // Use global state
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  // Get logged-in user from sessionStorage
  const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

  const handleAddReview = () => {
    if (!loggedInUser) {
      alert("You must be logged in to leave a review.");
      return;
    }
    if (newReview.trim() === "" || newRating === 0) return;

    const review = {
      id: uuidv4(),
      email: loggedInUser.email,
      text: newReview,
      rating: newRating,
      date: new Date().toLocaleString(),
    };

    setReviews([...reviews, review]); // Update global reviews
    setNewReview("");
    setNewRating(0);
  };

  const handleEditReview = (id) => {
    const updatedText = prompt(
      "Edit your review:",
      reviews.find((r) => r.id === id)?.text
    );
    if (updatedText !== null) {
      setReviews(
        reviews.map((r) => (r.id === id ? { ...r, text: updatedText } : r))
      );
    }
  };

  const handleDeleteReview = (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      setReviews(reviews.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>

      {loggedInUser ? (
        <>
          <textarea
            className="w-full p-2 border rounded mb-4"
            rows="3"
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
          />
          <div className="mb-4">
            <span className="text-lg font-semibold">Rating: </span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className={`text-2xl ${
                  newRating >= star ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setNewRating(star)}
              >
                ★
              </button>
            ))}
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleAddReview}
          >
            Submit Review
          </button>
        </>
      ) : (
        <p className="text-red-500">Please log in to leave a review.</p>
      )}

      <div className="mt-6">
        {reviews.length === 0 ? (
          <p className="text-gray-500">
            No reviews yet. Be the first to review!
          </p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="p-4 border-b">
              <p className="text-lg">{review.text}</p>
              <p className="text-yellow-500 text-lg">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="text-sm text-gray-700 font-bold">
                {review.email === loggedInUser?.email ? "You" : review.email}
              </p>

              {review.email === loggedInUser?.email && (
                <div className="mt-2 flex space-x-2">
                  <button
                    className="text-blue-500 hover:underline"
                    onClick={() => handleEditReview(review.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDeleteReview(review.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
