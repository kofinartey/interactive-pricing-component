import React from "react";
import Card from "./Card.js";
import { withStyles } from "@material-ui/styles";
import styles from "./PricingAppStyles";
// import "./PricingApp.css";

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
