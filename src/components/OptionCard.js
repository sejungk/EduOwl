import React, { useState } from 'react';
import '../styles/Questionnaire.css';

const OptionCard = ({ subject, icon, className, updateSelectedSubjects}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
    updateSelectedSubjects(subject);
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
