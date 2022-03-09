import React from "react";
import CardOne from "../../Components/CardOne";
import Data from "./Data";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import WrappperMargin from "../../Components/WrappperMargin";

const MapCardOne = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.CardMapContainer}
    >
      <Grid container alignItems="center" className={classes.CardMapCenter}>
        <WrappperMargin>
          <Grid item container xs={12} className={classes.CardMapTitle}>
            <Typography variant="h4" className={classes.bbb}>
              Explore
            </Typography>
          </Grid>
        </WrappperMargin>

        <Grid
          item
          container
          xs={12}
          justifyContent="space-evenly"
          className={classes.CardMapLinks}
        >
          <Link className={classes.navlink} to="/">
            All
          </Link>
          <Link className={classes.navlink} to="Collections">
            Games
          </Link>
          <Link className={classes.navlink} to="Home">
            Art
          </Link>
          <Link className={classes.navlink} to="Home">
            Trading Cards
          </Link>
          <Link className={classes.navlink} to="Creators">
            Music
          </Link>
          <Link className={classes.navlink} to="Faq">
            Memes
          </Link>
          <Link className={classes.navlink} to="Faq">
            Collectables
          </Link>
        </Grid>

        <Grid container alignItems="center">
          {Data.map(({ img }) => {
            return (
              <Grid
                item
                container
                justifyContent="space-evenly"
                className={classes.CardMapCenter}
                xs={12}
                md={3}
              >
                <CardOne img={img} />
              </Grid>
            );
          })}
        </Grid>

        <Grid item container xs={12} justify="center">
          <Button variant="contained" className={classes.btnbtn}>
            View all items
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MapCardOne;
