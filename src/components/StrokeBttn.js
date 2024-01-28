import React from 'react';
import '../styles/Bttn.css'

const StrokeBttn = ({ onClick, label }) => {
  return (
    <div onClick={onClick} className="strokeBttn">
      <p className="strokeBttnText">{label}</p>
    </div>
  );
};

export default StrokeBttn;
