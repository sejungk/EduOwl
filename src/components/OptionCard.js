import React from 'react';
import '../styles/Questionnaire.css';

const OptionCard = ({ subject, icon }) => {
  return (
    <div className="optionCard">
      {icon && <div className="optionIcon">{icon}</div>}
      <p className="optionCardText">{subject}</p>
    </div>
  );
};

export default OptionCard;
