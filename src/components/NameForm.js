import React, { useState } from 'react';

const NameForm = ({ onSubmit }) => {
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
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default NameForm;
