import React from 'react';
import OptionCard from '../OptionCard.js';
import * as Icons from '../../data/Icons';
import '../../styles/QuestionPages.css';

const QuestionPage2 = ({ updateSelectedEnjoyableSubjects }) => {
  const subjects = ['Math', 'Art', 'Health / P.E.', 'Chemistry', 'Biology', 'English', 'Physics', 'Music', 'Psychology', 'Government', 'Photography', 'Foreign Language', 'Journalism', 'Economics', 'Tech Ed', 'Business', 'History', 'Environmental Science'];


  return (
    <div className="questionPage">
      <h2>What classes do you enjoy the most?</h2>
      <div className="optionsContainer flex">
      {subjects.map((subject, index) => {
        const wordIndex = subject.search(/[^a-zA-Z]/);
        const firstWord = wordIndex !== -1 ? subject.slice(0, wordIndex) : subject;
        const IconComponent = Icons[firstWord + "Svg"];
        return <OptionCard key={index} subject={subject} icon={<IconComponent /> } className="optionCard" updateSelectedEnjoyableSubjects={updateSelectedEnjoyableSubjects}/>;
      })}
      </div>
    </div>
  );
};

export default QuestionPage2;
