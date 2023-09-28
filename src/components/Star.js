import React from 'react';
import '../styles/Star.scss';

const Star = ({ position, filled, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <span
      className={`star ${filled ? 'filled' : ''}`}
      onClick={() => onClick(position)}
      onMouseEnter={() => onMouseEnter(position)}
      onMouseLeave={() => onMouseLeave(position)}
    >
      ★
    </span>
  );
};

export default Star;
