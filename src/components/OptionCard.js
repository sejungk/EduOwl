import React, { useState } from 'react';
import '../styles/Questionnaire.css';

const OptionCard = ({ subject, icon, className, updateSelectedEnjoyableSubjects }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    updateSelectedEnjoyableSubjects(subject);
  };

  return (
    <div
      className={`${className} optionCard ${isSelected ? 'selected' : ''}`}
      onClick={handleCardClick}
    >
      {icon && <div className="optionIcon">{icon}</div>}
      <p className="optionCardText">{subject}</p>
    </div>
  );
};

export default OptionCard;
