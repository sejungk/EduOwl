import React from 'react';
import '../../styles/QuestionPages.css';

const QuestionPage1 = ({ name, onNameChange }) => {

  return (
    <div className="questionPage center">
      <h2>Hello! <br/> Before we get started, what is your name?</h2>
        <label>
          <input
            className="textForm"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </label>
    </div>
  );
};

export default QuestionPage1;
