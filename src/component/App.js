import React from "react";
import "./App.scss";
import Header from "./Header.component";
import ControlPanel from "./ControlPanel.component";
import Display from "./Display.component";
import Pattern from "./Pattern.component";
import Board from "./Board.component";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { ContextProvider } from "../Context";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CBFF8B",
    },
  },

  overrides: {
    MuiInputLabel: {
      // Name of the component ⚛️ / style sheet
      root: {
        // Name of the rul
        "&.Mui-focused": {
          // increase the specificity for the pseudo class
          color: "rgba(255,255,255,0.87)",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ContextProvider>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <div className="Page">
            <div className="App">
              <Header />
              <ControlPanel />
              <Display />
              <Pattern />
              <Board />
            </div>
          </div>
          {/* <canvas id="canvas"></canvas> */}
        </ThemeProvider>
      </StyledEngineProvider>
    </ContextProvider>
  );
};

export default App;
