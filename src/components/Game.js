import React, { useState, useCallback } from "react";
import Board from "./Board";
import History from "./History";
import { Button, Stack } from "@mui/material";
import { calculateWinningSquares } from "../calculateWinningSquares";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [selectedMove, setSelectedMove] = useState(-1);

  const jumpTo = useCallback((step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    setSelectedMove(step);
  }, []);

  const handleClick = useCallback(
    (i) => {
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[hist.length - 1];
      const squares = current.squares.slice();

      if (calculateWinningSquares(squares) || squares[i]) {
        return;
      }

      squares[i] = xIsNext ? "X" : "O";
      setHistory(
        hist.concat([
          {
            squares: squares,
          },
        ])
      );
      setStepNumber(hist.length);
      setXIsNext(!xIsNext);
      setSelectedMove(-1);
    },
    [history, stepNumber, xIsNext]
  );

  const currentHist = history[stepNumber];
  const winningSquares = calculateWinningSquares(currentHist.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move # " + move : "Go to game start";
    return (
      <Button
        key={move}
        variant={move === selectedMove ? "contained" : "outlined"}
        onClick={() => jumpTo(move)}
      >
        {desc}
      </Button>
    );
  });

  const status = winningSquares
    ? "Winner: " + (xIsNext ? "O" : "X")
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <Stack spacing={2} direction="row">
      <Board
        squares={currentHist.squares}
        winningSquares={winningSquares}
        onClick={(i) => handleClick(i)}
      />
      <History status={status} moves={moves}></History>
    </Stack>
  );
};

export default React.memo(Game);
