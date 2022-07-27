import React from "react";
import withStyles from '@mui/styles/withStyles';
import Button from "@mui/material/Button";

const styles = (theme) => ({
  button: {
    backgroundColor: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.87)",
    fontSize: "12px",
    marginLeft: "1vw",
    padding: "8px 16px",
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.05)",
      color: "#CBFF8B",
    },
  },
  child: {
    backgroundColor: "#CBFF8B",
  },
  rippleVisible: {
    opacity: 0.5,
    animation: `$enter 550ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes enter": {
    "0%": {
      transform: "scale(0)",
      opacity: 0.1,
    },
    "100%": {
      transform: "scale(1)",
      opacity: 0.5,
    },
  },
});

function MyButton({ classes, ...other }) {
  const { button: buttonClass, ...rippleClasses } = classes;
  return (
    <Button
      TouchRippleProps={{ classes: rippleClasses }}
      className={buttonClass}
      {...other}
    />
  );
}

export default withStyles(styles)(MyButton);
