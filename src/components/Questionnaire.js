import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import SolidBttn from './SolidBttn';
import QuestionPage1 from './question-pages/QuestionPage1';
import QuestionPage2 from './question-pages/QuestionPage2';
import '../styles/Questionnaire.css';

const Questionnaire = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [name, setName] = useState(null);
  const [responses, setResponses] = useState({});

  const handleNextQuestion = (questionNumber, response) => {
    setResponses((prevResponses) => ({ ...prevResponses, [questionNumber]: response }));
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleNameChange = (name) => {
    setResponses((prevResponses) => ({ ...prevResponses, 1: name }));
  };

  useEffect(() => {
    console.log('Updated Responses:', responses);
  });

  const handleBackQuestion = () => {
    setCurrentQuestion((prevQuestion) => Math.max(prevQuestion - 1, 1));
  };

  const renderQuestionContent = (questionNumber) => {
    switch (questionNumber) {
      case 1:
        return <QuestionPage1 name={responses[1]} onNameChange={handleNameChange} />;
      case 2:
        return <QuestionPage2 name={responses[1]} onNameChange={handleNameChange} />;
      case 3:
        return <p>Question {questionNumber}.</p>;
      case 4:
        return <p>Question {questionNumber}.</p>;
      case 5:
        return <p>Question {questionNumber}.</p>;
      case 6:
        return <p>Question {questionNumber}.</p>;
      default:
        return <p>No content for this question.</p>;
    }
  };

  const handleCompleteQuestionnaire = () => {
    console.log('Final Responses:', responses);
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
        {currentQuestion === 5 ? (
          <SolidBttn onClick={handleCompleteQuestionnaire} label="Submit" />
        ) : (
          <SolidBttn
            onClick={() => handleNextQuestion(currentQuestion, responses[currentQuestion] || null)}
            label="Continue"
          />
        )}
      </div>
    </div>
  );
};

export default Questionnaire;
