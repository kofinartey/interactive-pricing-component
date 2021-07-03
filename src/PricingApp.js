import React from "react";
import Card from "./Card.js";
import { withStyles } from "@material-ui/styles";
import Pattern from "./images/pattern-circles.svg";
import Background from "./images/bg-pattern.svg";
// import "./PricingApp.css";

const styles = {
  PricingApp: {
    width: "100%",
    // height: "100vh",
    backgroundImage: `url(${Background}) `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left 0px",
    backgroundSize: "auto",
    backgroundAttachment: "fixed",
    color: "hsl(227, 35%, 25%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: "3rem",
  },
  PricingApp__heading: {
    background: `url(${Pattern}) no-repeat center`,
    margin: "3rem 0",
    padding: "3rem 0",
    textAlign: "center",
    "& h1": {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
    "& p": {
      color: "hsl(225, 20%, 60%)",
    },
  },
  "@media(min-width: 760px)": {
    PricingApp__heading: {
      "& h1": {
        fontSize: "1.8rem",
      },
      "& div": {
        display: "flex",
        justifyContent: "center",
        fontSize: "rem",
      },
    },
  },
  "@media(min-width: 1440px)": {
    PricingApp: {
      backgroundSize: "contain",
    },
  },
};

const PricingApp = (props) => {
  const { classes } = props;
  return (
    <div className={classes.PricingApp}>
      <div className={classes.PricingApp__heading}>
        <h1>Simple, traffic-based pricing</h1>
        <div>
          <p>Sign-up for our 30-day trial. </p>
          <p> No credit card required. </p>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default withStyles(styles)(PricingApp);
