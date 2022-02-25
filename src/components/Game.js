import React, { useCallback, useState } from "react";
import Board from "./Board";
import History from "./History";
import { Paper, Button, Stack } from "@mui/material";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

const Game = (props) => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const jumpTo = useCallback((step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  }, []);

  const handleClick = useCallback(
    (i) => {
      const hist = history.slice(0, stepNumber + 1);
      const current = hist[hist.length - 1];
      const squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
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
    },
    [history, stepNumber, xIsNext]
  );

  const currentHist = history[stepNumber];
  const winner = calculateWinner(currentHist.squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move # " + move : "Go to game start";
    return (
      <Button key={move} variant="outlined" onClick={() => jumpTo(move)}>
        {desc}
      </Button>
    );
  });

  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <Paper>
      <Stack spacing={2} direction="row">
        <Board squares={currentHist.squares} onClick={(i) => handleClick(i)} />
        <History status={status} moves={moves}></History>
      </Stack>
    </Paper>
  );
};

export default React.memo(Game);
