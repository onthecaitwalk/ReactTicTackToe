import React, { useCallback } from "react";
import { Button, InputLabel } from "@mui/material";

const Square = (props) => {
  const handleClick = useCallback(
    (i) => {
      props.onClick(i);
    },
    [props]
  );

  const variant = () => {
    if (!props.winningSquares) {
      return "outlined";
    }
    return props.winningSquares.indexOf(props.id) > -1
      ? "contained"
      : "outlined";
  };

  return (
    <Button
      variant={variant()}
      sx={{ minHeight: 42, minWidth: 42, padding: 0 }}
      onClick={handleClick}
    >
      <InputLabel>{props.value}</InputLabel>
    </Button>
  );
};

export default React.memo(Square);
