import React, { useState } from 'react';
import '../../styles/QuestionPages.css';

const QuestionPage1 = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="questionPage">
      <h2>Hello! Before we get started, what is your name?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="textForm"
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
      </form>
    </div>
  );
};

export default QuestionPage1;
