import React, { useRef, useEffect } from "react";
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
import { Box, Card, Container, Grid, Paper, styled } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#CBFF8B",
    },
    background: {
      default: "#abcdef",
      paper: "#121212",
    },
  },
});
const PagePaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  overflow: "auto",
}));

const AppPaper = styled(Paper)(({ theme }) => ({
  position: "relative",
  padding: "30px",
  width: "1200px",
}));

const StyledGrid = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
}));

const App = () => {
  const pageBoxRef = useRef(null);
  const appBoxRef = useRef(null);

  useEffect(() => {
    const pageBox = pageBoxRef.current;
    const appBox = appBoxRef.current;
    const maxWidth = appBox.clientWidth;
    const maxHeight = appBox.clientHeight;
    window.addEventListener(
      "resize",
      () => {
        let scale,
          width = window.innerWidth,
          height = window.innerHeight,
          isMax = width >= maxWidth && height >= maxHeight;

        scale = Math.min(width / maxWidth, height / maxHeight);
        appBox.style.transform = isMax ? "" : "scale(" + scale + ")";
        pageBox.style.width = isMax ? "" : maxWidth * scale;
        pageBox.style.height = isMax ? "" : maxHeight * scale;
      },
      []
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <PagePaper elevation={1} ref={pageBoxRef}>
        <AppPaper elevation={2} ref={appBoxRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Header />
            </Grid>
            <StyledGrid item xs={3}>
              <ControlPanel />
            </StyledGrid>
            <StyledGrid item xs={5.5}>
              <Display />
            </StyledGrid>
            <StyledGrid item xs={3.5}>
              <Pattern />
            </StyledGrid>
            <Grid item xs={12}>
              <Board />
            </Grid>
          </Grid>
        </AppPaper>
      </PagePaper>
    </ThemeProvider>
  );
};

export default App;

// const App = () => {
//   return (
//     <ContextProvider>
//       <StyledEngineProvider injectFirst>
//         <ThemeProvider theme={theme}>
//           <div className="Page">
//             <div className="App">
//               <Header />
//               <ControlPanel />
//               <Display />
//               <Pattern />
//               <Board />
//             </div>
//           </div>
//           {/* <canvas id="canvas"></canvas> */}
//         </ThemeProvider>
//       </StyledEngineProvider>
//     </ContextProvider>
//   );
// };

// export default App;
