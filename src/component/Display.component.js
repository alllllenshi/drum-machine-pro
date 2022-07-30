import { Box, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState, useContext } from "react";
import { Context } from "../Context";

const Screen = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
  flexDirection: "column",
  height: "100%",
  backgroundColor: "#000000",
});

const Display = (props) => {
  const { started, setStarted } = useContext(Context);
  const [displayContent, setDisplayContent] = useState(
    "Drum Machine Master(test version)"
  );

  const start = () => {
    setStarted(!started);
  };

  return (
    <Screen>
      <Typography variant="body1" color="initial">
        {displayContent}
      </Typography>
      <button className="Display-enter" id="test3" onClick={start}>
        {started ? "started" : "paused"}
      </button>
    </Screen>
  );
};
export default Display;
