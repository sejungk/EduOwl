import React from 'react';
import StrokeSelectionBttn from '../StrokeSelectionBttn';
import '../../styles/QuestionPages.css';

const QuestionPage4 = ({ updateSelectedStrengths }) => {
  const Characteristics = [
    'Creativity', 'Communication', 'Writing', 'Leadership', 'Technology',
    'Public Speaking', 'Analytics', 'Interpersonal Skill', 'Research',
    'Organization', 'Stress Management', 'Adaptability', 'Attention to Detail',
    'Quantitative Skill', 'Collaboration'
  ];

  const toCamelCase = (str) => {
    return str.replace(/\s+/g, '').toLowerCase();
  };

  return (
    <div className="questionPage">
      <div className="questionPageText">
        <h2>What are your strengths?</h2>
        <p className="subtext">Select all that apply</p>
      </div>

      <div className="strokedOptionContainer flex">
        {Characteristics.map((strength, index) => (
          <StrokeSelectionBttn
            characteristic={strength}
            className={`${toCamelCase(strength)} strokedOption`}
            updateSelectedCharacteristic = {updateSelectedStrengths}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage4;
