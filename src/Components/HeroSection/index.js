import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import ImageList from "../../Units/ImageList";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justifyContent="space-around">
        <Grid
          item
          xs={12}
          md={6}
          className={classes.sectionOne}
          direction="column"
        >
          <Typography variant="h3" className={classes.heroheading}>
            Discover digital art and <br /> collect NFTs
          </Typography>
          <Typography variant="body1" className={classes.heropara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
            convallis
            <br /> nisl, aenean eget ac tincidunt. Erat elit id lectus platea
            integer.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={classes.sectionTwo}>
          <ImageList />
        </Grid>
      </Grid>
    </>
  );
};

export default HeroSection;

const useStyles = makeStyles((theme) => ({
  sectionOne: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#e2f5ff",
  },
  sectionTwo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  heroheading: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "48px",

    fontWeight: "700",
    lineHeight: "59px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      fontWeight: "500",
      lineHeight: "30px",
    },
  },
  heropara: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      fontWeight: 300,
      lineHeight: "18px",
    },
  },
}));
