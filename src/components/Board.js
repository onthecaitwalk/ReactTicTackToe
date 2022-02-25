import React from "react";
import Square from "./Square";
import { Stack } from "@mui/material";

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <Square
        key={i}
        id={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        winningSquares={props.winningSquares}
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
    let squaresInRow = [];
    for (let i = 0; i < numberOfSquares; i++) {
      squaresInRow.push(renderSquare(i));
      if (squaresInRow.length === squareRootOfSquares) {
        board.push(renderRow(i, squaresInRow));
        squaresInRow = [];
      }
    }
    return board;
  };

  return <Stack>{renderBoard(9)}</Stack>;
};

export default React.memo(Board);
