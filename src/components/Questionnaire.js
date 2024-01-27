import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import SolidBttn from './SolidBttn';
import '../styles/Questionnaire.css'

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleBackQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 1));
  };

  const renderQuestionContent = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return <p>Question {questionNumber}.</p>;
      case 2:
        return <p>Question {questionNumber}.</p>;
      case 3:
        return <p>Question {questionNumber}.</p>;
      default:
        return <p>No content for this question.</p>;
    }
  };

  return (
    <div className="questionnaire">
      <ProgressBar currentQuestion={currentQuestion} totalQuestions={5} />

      {renderQuestionContent(currentQuestion)}
      <div className="buttonContainer">
        <SolidBttn
          onClick={handleBackQuestion}
          label="Back"
          className={`backButton ${currentQuestion <= 1 ? 'disabled' : ''}`}
        />
        <SolidBttn onClick={handleNextQuestion} label="Continue" />
      </div>
    </div>
  );
};

export default Questionnaire;
