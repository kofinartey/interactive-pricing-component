const styles = {
  Card: {
    width: "90%",
    maxWidth: "33.75rem",
    backgroundColor: "white",
    color: "hsl(225, 20%, 60%)",
    borderRadius: "1rem",
    fontWeight: "600",
    boxShadow: "0px 14px 26px 0px rgba(152,152,152,0.2)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem 0",
  },

  Card__section: {
    width: "100%",
  },

  Card__container: {
    width: "90%",
  },
  vsa: {
    position: "relative",
  },
  Card__views: {
    textTransform: "uppercase",
    letterSpacing: ".1rem",
  },
  slider: {
    width: "100%",
    margin: "2rem 0",
  },
  Card__amount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "800",
    color: "hsl(227, 35%, 25%)",
    marginBottom: "2rem",
    "& span": {
      fontWeight: "600",
      fontSize: "1rem",
      marginLeft: "1rem",
      color: "hsl(225, 20%, 60%)",
    },
  },
  Card__billing: {
    fontSize: ".8rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  discount: {
    fontSize: "0.8rem",
    position: "absolute",
    right: "0",
    backgroundColor: "hsl(14, 92%, 95%)",
    color: "hsl(15, 100%, 70%)",
    borderRadius: "1rem",
    padding: "0 .5rem",
  },
  Card__divider: {
    margin: "1rem 0",
  },
  Card__PackageDetails: {
    fontSize: ".8rem",
    margin: "2rem 0",
    "& p": {
      margin: ".5rem 0",
    },
  },

  Card__cta: {
    fontWeight: "600",
    border: "none",
    backgroundColor: "hsl(227, 35%, 25%)",
    color: "hsl(226, 100%, 87%)",
    padding: "1rem 3rem",
    borderRadius: "2rem",
    transition: "all .3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      color: "white",
    },
    "&:active": {
      opacity: "0.5",
    },
  },

  "@media(min-width: 760px)": {
    vsa: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    Card__views: {
      padding: "0",
      margin: "2rem 0",
    },
    Card__amount: {
      position: "absolute",
      right: "0",
    },
    Card__bottom: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    Card__PackageDetails: {
      textAlign: "left",
      margin: "0",
    },
  },
};

export default styles;
