import React from 'react';
import { useNavigate } from 'react-router-dom';
import './insured.css';
const Insured = () => {
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    // Here you can handle the user's answer, e.g., save it to the database
    console.log(`User answered: ${answer}`);
    // Navigate to the next page or section
    navigate('/next-page');
  };

  return (
    <div className="insurance-question-page">
      <div className="question-container">
        <h1 className="question-title">Do you have insurance?</h1>
        <div className="button-container">
          <button className="btn btn-primary" onClick={() => handleAnswer('Yes')}>Yes</button>
          <button className="btn btn-secondary" onClick={() => handleAnswer('No')}>No</button>
        </div>
      </div>
    </div>
  );
};

export default Insured;