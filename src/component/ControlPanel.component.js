import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import Knob from "./ControlPanel/Knob.component";
// import SelectBox from './ControlPanel/SelectBox.component'

const KNOB_INFO = [
  {
    name: "PITCH",
    max: 24,
    min: -24,
    step: 1,
    value: 0,
  },
  {
    name: "VOL",
    max: 100,
    min: 0,
    step: 1,
    value: 75,
  },
  {
    name: "PAN",
    max: 1,
    min: -1,
    step: 0.1,
    value: 0,
  },
  {
    name: "REVERB",
    max: 1,
    min: 0,
    step: 0.01,
    value: 0.5,
  },
];

const ControlPanel = (props) => {
  const [controlData] = useState(KNOB_INFO);

  const knobPanel = controlData.map((info, index) => (
    <Grid item xs={6}>
      <Knob info={controlData[index]} />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box>channel</Box>
      </Grid>
      {knobPanel}
    </Grid>
  );
};
export default ControlPanel;
{
  /* <div className="ControlPanel">
      <SelectBox label={"instrument"} />
      <div className="ControlPanel-area">
        <Knob info={controlData[0]} />
        <Knob info={controlData[1]} />
        <Knob info={controlData[2]} />
        <Knob info={controlData[3]} />
      </div>
    </div> */
}
