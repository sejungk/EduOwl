import React, { useState } from 'react';
import OptionCard from '../OptionCard.js'
import '../../styles/QuestionPages.css';


const QuestionPage1 = ({ name, onNameChange }) => {
  const subjects = ['Math', 'Art', 'Health / P.E.', 'Chemistry', 'Biology', 'English', 'Physics', 'Music', 'Psychology', 'Government', 'Photography', 'Foreign Language', 'Journalism', 'Economics', 'Tech Ed', 'Business', 'History', 'Environmental Science'];

  return (
    <div className="questionPage">
      <h2>What classes do you enjoy the most?</h2>
      <div className="optionsContainer">
        {subjects.map((subject, index) => (
          <OptionCard key={index} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage1;
