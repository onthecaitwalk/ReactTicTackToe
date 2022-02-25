import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
