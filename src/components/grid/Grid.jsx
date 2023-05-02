import React from 'react';
import useRefDimensions from './grid.useRefDimentions';
import Cell from '../cell/Cell';

const DEFAULT_ROW_SIZE = 15;
const DEFAULT_COL_SIZE = 10;

const toCell = (_, index) => (
  <Cell index={index} key={index} />
);

const createRow = (element, index) => (
  <div className="grid__row" data-row={`${index}`} key={index}>
    {element}
  </div>
);

const createGrid = (rowSize = DEFAULT_ROW_SIZE, colSize = DEFAULT_COL_SIZE) => {
  const rows = new Array(rowSize);

  for (let row = 0; row <= rowSize; row += 1) {
    const cols = new Array(colSize).fill('').map(toCell);

    rows.push(createRow(cols, row));
  }
  return rows;
};

export default function Grid() {
  const [divRef, dimensions] = useRefDimensions();

  return (
    <div className="grid" ref={divRef}>
      {createGrid(Math.floor(dimensions.height / 29), Math.floor(dimensions.width / 28))}
    </div>
  );
}
