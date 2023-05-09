import React, { useState } from 'react';

/*
TODO: 1. add a way to insert only one start and end points
      2. change on click event handler to be able to set
         walls while moving mouse with LMB pressed
      3. try to optimize Cell component (Current complexity is 6.2)
*/

export default function Cell({ index }) {
  const [cellType, setCellType] = useState('');
  // const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    setCellType(cellType === '' ? 'grid__cell--wall' : '');
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 32) {
      setCellType(cellType === '' ? 'grid__cell--wall' : '');
    }
  };

  return (
    <div
      className={`grid__cell ${cellType}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-hidden="true"
      // onMouseDown={() => setIsDragging(true)}
      // onMouseUp={() => setIsDragging(false)}
      // onMouseMove={handleMouseMove}
      data-col={`${index}`}
    />
  );
}
