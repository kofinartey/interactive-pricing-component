import React from "react";
import thumb from "./images/icon-slider.svg";
import { Slider } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  rail: {
    backgroundColor: "hsl(224, 65%, 95%)",
    height: ".6rem",
    borderRadius: "1rem",
    marginTop: ".4rem",
  },
  track: {
    height: ".6rem",
    borderRadius: "1rem 0 0 1rem ",
    marginTop: ".4rem",
    backgroundColor: "#A8F1E8",
  },
  thumb: {
    backgroundImage: `url(${thumb})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "#77ECDC",
    width: "2rem",
    height: "2rem",
    "&:active": {
      backgroundColor: "#20AFA0",
      cursor: "grabbing",
    },
  },
};

const CardSlider = (props) => {
  return <Slider onChange={props.onChange} />;
};

export default withStyles(styles)(Slider);
