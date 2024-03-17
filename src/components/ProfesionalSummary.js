import React from 'react';
import '../assets/styles/ProfessionalSummary.css';
import review1 from '../assets/review1.jpg'; 
import review2 from '../assets/review2.jpg'; 
import review3 from '../assets/review3.jpg'; 
import review4 from '../assets/review4.jpg'; 
import review5 from '../assets/review5.jpg'; 

const ProfessionalSummary = () => {
  return (
    <div className="professional-summary">
      <h2>Professional Summary</h2> 
      <h3>Due to privacy reasons, for additional references please contact me.</h3>
      <h3>Reviews From Rover</h3>
      <div className="reviews">
        <img src={review1} alt="Review 1" className="review-image" />
        <img src={review2} alt="Review 2" className="review-image" />
        <img src={review3} alt="Review 3" className="review-image" />
        <img src={review4} alt="Review 4" className="review-image" />
        <img src={review5} alt="Review 5" className="review-image" />
      </div>
    </div>
  );
}

export default ProfessionalSummary;
