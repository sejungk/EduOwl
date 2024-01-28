import React, { useState } from 'react';
import '../styles/Bttn.css'

const StrokeSelectionLargeBttn = ({ selection, className, updateSelection }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOptionClick = () => {
    setIsSelected(!isSelected);
    updateSelection(selection);
  };

  return (
    <div onClick={handleOptionClick} className={`${className} strokeSelectionBttn ${isSelected ? 'selectedOption' : ''}`}>
      <p className="strokeSelectionBttnText">{selection}</p>
    </div>
  );
};

export default StrokeSelectionLargeBttn;
