import React from "react";
import Square from "./Square";
import { Stack } from "@mui/material";

const Board = (props) => {
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  return (
    <Stack>
      <Stack direction="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Stack>
      <Stack direction="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Stack>
      <Stack direction="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Stack>
    </Stack>
  );
};

export default React.memo(Board);
