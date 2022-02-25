import React from "react";
import { Stack, InputLabel, Switch, FormControlLabel } from "@mui/material";
import { useToggle } from "../hooks/toggle";

const History = (props) => {
  const [isAscending, setIsAscending] = useToggle(true);
  const moves = props.moves.slice();
  return (
    <Stack spacing={0.5} direction="column">
      <InputLabel>{props.status}</InputLabel>
      <FormControlLabel
        control={<Switch checked={isAscending} onClick={setIsAscending} />}
        label={isAscending ? "Ascending" : "Descending"}
      />
      {isAscending ? moves : moves.reverse()}
    </Stack>
  );
};

export default History;
