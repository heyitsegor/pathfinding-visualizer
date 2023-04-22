import React from 'react';
import Cell from '../cell/Cell';

const toCell = (_, index) => (
  <Cell index={index} key={index} />
);

const createRow = (element, index) => (
  <div className={`row ${index}`} key={index}>
    {element}
  </div>
);

const createGrid = (rowSize = 15, colSize = 25) => {
  const rows = new Array(rowSize);

  for (let row = 0; row <= rowSize; row += 1) {
    const cols = new Array(colSize).fill('').map(toCell);

    rows.push(createRow(cols, row));
  }
  return rows;
};

const Grid = () => (
  <div className="grid">
    {createGrid()}
  </div>
);

export default Grid;
