import React from "react";
import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {},
  thumb: {
    backgroundColor: "white",
    height: "0.8rem",
    width: "0.8rem",
    marginTop: ".2rem",
    position: "absolute",
  },
  switchBase: {
    left: ".6rem",
    top: ".6rem",
    "&$checked + $track": {
      backgroundColor: "#7FE8D9",
      opacity: "1",
    },
    "&:hover + $track": {
      backgroundColor: "#7FE8D9",
      opacity: "1",
    },
  },
  checked: {},
  track: {
    height: "1.2rem",
    width: "3rem",
    borderRadius: "1rem",
    marginTop: "-0.1rem",
  },
};
const CardSwitch = () => {
  return <Switch />;
};

export default withStyles(styles)(Switch);
