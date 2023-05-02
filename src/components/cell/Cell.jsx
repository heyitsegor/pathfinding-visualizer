import React, { useState } from 'react';

export default function Cell({ index }) {
  const [isWall, setIsWall] = useState('');

  const handleClick = () => {
    setIsWall(isWall === '' ? 'grid__wall' : '');
  };

  return (
    <div
      className={`grid__cell ${isWall}`}
      onClick={handleClick}
      data-col={`${index}`}
    />
  );
}
