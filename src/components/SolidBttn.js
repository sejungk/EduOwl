import React from 'react';
import '../styles/SolidBttn.css'

const SolidBttn = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className="solidBttn">
      <p className="solidBttnText">{label}</p>
    </div>
  );
};

export default SolidBttn;
