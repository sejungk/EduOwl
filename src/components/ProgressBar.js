import React from 'react';
import '../styles/ProgressBar.css'

const Progress = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = ((currentQuestion - 1) / (totalQuestions - 1)) * 100;

  return (
    <div className="progressContainer">
      <div className="progressBar" style={{ width: `${progressPercentage}%` }} />
    </div>
  );
};

export default Progress;
