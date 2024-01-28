import React from 'react';
import StrokeSelectionLargeBttn from '../StrokeSelectionLargeBttn';
import '../../styles/QuestionPages.css';

const QuestionPage7 = ({ updateSelectedAspect }) => {
  const JobAspects = [
    "Work-life Balance", "Job Satisfaction", "Social Impact", "Job Security", "Development Opportunities", "Employee Benefits"
  ];

  return (
    <div className="questionPage">
      <div className="questionPageText">
        <h2>Which aspect is the most important to you?</h2>
      </div>

      <div className="strokedOptionContainer flex">
        {JobAspects.map((Aspect) => (
          <StrokeSelectionLargeBttn
            selection={Aspect}
            className="strokedLargeOption"
            updateSelection = {updateSelectedAspect}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage7;
