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
import { Box, Container, Grid, styled } from "@mui/material";
import { AspectRatio } from "@mui/icons-material";

// const theme = createTheme({
//   // palette: {
//   //   mode: "dark",
//   //   primary: {
//   //     main: "#CBFF8B",
//   //   },
//   // },
//   // overrides: {
//   //   MuiInputLabel: {
//   //     // Name of the component ⚛️ / style sheet
//   //     root: {
//   //       // Name of the rul
//   //       "&.Mui-focused": {
//   //         // increase the specificity for the pseudo class
//   //         color: "rgba(255,255,255,0.87)",
//   //       },
//   //     },
//   //   },
//   // },
// });

const PageBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1A1A1A",
  display: "flex",
  justifyContent: "center",
  overflow: "auto",
}));

const AppBox = styled(Box)(({ theme }) => ({
  position: "relative",
  margin: "40px 0",
  width: "900px",

  backgroundColor: "#080808",
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
    <PageBox ref={pageBoxRef}>
      <AppBox ref={appBoxRef}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={4}>
            <ControlPanel />
          </Grid>
          <Grid item xs={4}>
            <Display />
          </Grid>
          <Grid item xs={4}>
            <Pattern />
          </Grid>
          <Grid item xs={12}>
            <Board />
          </Grid>
        </Grid>
      </AppBox>
    </PageBox>
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
