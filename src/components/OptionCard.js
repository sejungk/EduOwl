import React from 'react';

const OptionCard = ({ subject }) => {
  const index = subject.search(/[^a-zA-Z]/);
  const firstWord = index !== -1 ? subject.slice(0, index) : subject;
  const imageUrl = `/images/${firstWord}.svg`;

  return (
    <div className="optionCard">
      <img src={imageUrl} alt={`${subject} icon`} className="optionIcon" />
      <p className="optionText">{subject}</p>
    </div>
  );
};

export default OptionCard;
