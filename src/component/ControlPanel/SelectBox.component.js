import React from "react";
import { makeStyles } from "@mui/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "9vw",
  },
  selectEmpty: {
    marginTop: theme.spacing(1.2),
  },
  outlined: {
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "none",
    boxShadow: "0.2px 0.5px 1px black",
    fontSize: "13px",
    color: "rgba(255,255,255,0.87)",
    borderRadius: "5px",
  },
  icon: {
    color: "rgba(255,255,255,0.6)",
  },
  root: {
    color: "rgba(255,255,255,0.87)",
  },
  shrink: {
    color: "rgba(255,255,255,0.38)",
  },
}));

const useOutlinedInputStyles = makeStyles((theme) => ({
  root: {
    "& $notchedOutline": {
      border: "none",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const outlinedInputClasses = useOutlinedInputStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="ControlPanel-selectBox">
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          shrink
          classes={{ root: classes.shrink }}
          id="demo-simple-select-placeholder-label-label"
        >
          Age
        </InputLabel>
        <Select
          classes={{
            outlined: classes.outlined,
            icon: classes.icon,
          }}
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          input={<OutlinedInput classes={outlinedInputClasses} />}
        >
          <MenuItem classes={{ root: classes.root }} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem classes={{ root: classes.root }} value={10}>
            Ten
          </MenuItem>
          <MenuItem classes={{ root: classes.root }} value={20}>
            Twenty
          </MenuItem>
          <MenuItem classes={{ root: classes.root }} value={30}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
