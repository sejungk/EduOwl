import React, { useState } from 'react';
import '../styles/Bttn.css'

const StrokeSelectionBttn = ({ characteristic, className, updateSelectedCharacteristic }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleOptionClick = () => {
    setIsSelected(!isSelected);
    updateSelectedCharacteristic(characteristic);
  };

  return (
    <div onClick={handleOptionClick} className={`${className} strokeSelectionBttn ${isSelected ? 'selectedOption' : ''}`}>
      <p className="strokeSelectionBttnText">{characteristic}</p>
    </div>
  );
};

export default StrokeSelectionBttn;
