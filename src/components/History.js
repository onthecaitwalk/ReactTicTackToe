import React from "react";
import { Stack, InputLabel } from "@mui/material";

const History = (props) => {
  return (
    <Stack spacing={0.5} direction="column">
      <InputLabel>{props.status}</InputLabel>
      {props.moves}
    </Stack>
  );
};

export default History;
