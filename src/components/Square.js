import React from "react";
import { Button, InputLabel } from "@mui/material";

const Square = (props) => {
  console.log("rendering square...");
  return (
    <Button
      variant="outlined"
      sx={{ minHeight: 42, minWidth: 42, padding: 0 }}
      onClick={props.onClick}
    >
      <InputLabel>{props.value}</InputLabel>
    </Button>
  );
};

export default React.memo(Square);
