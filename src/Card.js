import React, { useState } from "react";
import { Slider } from "@material-ui/core";
import { Switch } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import styles from "./CardStyles.js";
import { withStyles } from "@material-ui/core";
import check from "./images/icon-check.svg";
import thumb from "./images/icon-slider.svg";

//customize slider from MUI slider
const CardSlider = withStyles({
  root: {},
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
})(Slider);

//customize switch
const CardSwitch = withStyles({
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
})(Switch);

const planFeatures = [
  " Unlimited websites",
  "100% data ownership",
  "Email reports",
];
const prices = [
  { step: 1, value: 1, views: "10K", amount: 8 },
  { step: 2, value: 2, views: "50K", amount: 12 },
  { step: 3, value: 3, views: "100K", amount: 16 },
  { step: 4, value: 4, views: "500K", amount: 24 },
  { step: 5, value: 5, views: "1M", amount: 36 },
];

const Card = (props) => {
  const [isAnnual, setAnnual] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [level, setLevel] = useState(3);
  const { classes } = props;
  window.addEventListener("resize", () => {
    let width = window.innerWidth;
    setPageWidth(width);
  });

  function changeLevel(e, val) {
    setLevel(val);
  }
  function displayAmount() {
    let pack = prices.find((price) => price.step === level);
    let annualAmount = (pack.amount * 12 * 0.75).toFixed(2); //annual amount with 25% discount
    let monthlyAmount = pack.amount.toFixed(2);
    return <h1>${isAnnual ? annualAmount : monthlyAmount}</h1>;
  }
  function displayViews() {
    let pack = prices.find((price) => price.step === level);
    return <p className={classes.Card__views}>{pack.views} PAGEVIEWS</p>;
  }
  return (
    <div className={classes.Card}>
      <div className={classes.Card__container}>
        <div className={`${classes.Card__section} ${classes.top}`}>
          <div className={classes.vsa}>
            {displayViews()}
            <div className={classes.slider}>
              <CardSlider
                value={level}
                steps={2}
                min={1}
                max={5}
                onChange={changeLevel}
              />
            </div>
            <div className={classes.Card__amount}>
              {displayAmount()}
              <span>/ {isAnnual ? "year" : "month"}</span>
            </div>
          </div>

          <div className={classes.Card__billing}>
            <p>Monthly Billing</p>
            <CardSwitch
              onClick={() => {
                setAnnual(!isAnnual);
              }}
            />
            <p>Yearly Billing </p>
            <div className={classes.discount}>
              {pageWidth < 630 ? <p>-25%</p> : <p>25% discount</p>}
            </div>
          </div>
        </div>
        <div className={classes.Card__divider}>
          <Divider />
        </div>

        <div className={`${classes.Card__section} ${classes.Card__bottom}`}>
          <div className={classes.Card__PackageDetails}>
            {planFeatures.map((feature) => (
              <p key={feature}>
                <img src={check} alt="" /> {feature}
              </p>
            ))}
          </div>
          <button className={classes.Card__cta}>Start my trial</button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Card);

//

// Start my trial
