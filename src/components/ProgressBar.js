import React from 'react';
import '../styles/ProgressBar.css'

const Progress = ({ currentQuestion, totalQuestions }) => {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="progressContainer">
      <div className="progressBar" style={{ width: `${progressPercentage}%` }} />
    </div>
  );
};

export default Progress;
