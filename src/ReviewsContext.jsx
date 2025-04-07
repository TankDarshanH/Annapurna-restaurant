import React, { createContext, useState, useEffect } from "react";

export const ReviewsContext = createContext();

export const ReviewsProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    if (reviews.length > 0) {
      localStorage.setItem("reviews", JSON.stringify(reviews));
    }
  }, [reviews]);

  return (
    <ReviewsContext.Provider value={{ reviews, setReviews }}>
      {children}
    </ReviewsContext.Provider>
  );
};
