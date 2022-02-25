import React from "react";
import Square from "./Square";
import { Stack } from "@mui/material";

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  };

  const renderRow = (i, squares) => {
    return (
      <Stack key={i} direction="row">
        {squares}
      </Stack>
    );
  };

  const renderBoard = (numberOfSquares) => {
    const squareRootOfSquares = Math.pow(numberOfSquares, 1 / 2);
    let board = [];
    let squaresPerRow = [];
    for (let i = 0; i < numberOfSquares; i++) {
      squaresPerRow.push(renderSquare(i));
      if (squaresPerRow.length === squareRootOfSquares) {
        board.push(renderRow(i, squaresPerRow));
        squaresPerRow = [];
      }
    }
    return board;
  };

  return <Stack>{renderBoard(9)}</Stack>;
};

export default React.memo(Board);
