import React from 'react';
import StrokeSelectionLargeBttn from '../StrokeSelectionLargeBttn';
import '../../styles/QuestionPages.css';

const QuestionPage6 = ({ updateSelectedRange }) => {
  const SalaryRanges = [
    "$20,000 - $50,000", "$50,000 - $100,000", "$100,000 - $150,000", "$150,000 - $250,000", "$250,000 - $500,000+", "Doesn't matter"
  ];

  return (
    <div className="questionPage">
      <div className="questionPageText">
        <h2>What is your expected salary?</h2>
      </div>

      <div className="strokedOptionContainer flex">
        {SalaryRanges.map((range) => (
          <StrokeSelectionLargeBttn
            selection={range}
            className="strokedLargeOption"
            updateSelection = {updateSelectedRange}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionPage6;
