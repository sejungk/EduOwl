import React, { useState } from 'react';
import SolidBttn from './SolidBttn';
import '../styles/NameForm.css';

const NameForm = ({ onSubmit }) => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Add any additional logic you need here
  };
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div>
      <h2>Hello, what is your name?</h2>
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
      <div className="bttn">
        <SolidBttn onClick={handleClick} label="Continue" />
      </div>
    </div>
  );
};

export default NameForm;
