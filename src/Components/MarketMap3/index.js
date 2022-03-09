import React from "react";
import CardOne from "../../Components/CardOne";
import Data from "./Data";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

const MarketMap3 = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-evenly"
      alignItems="center"
      className={classes.CardMapContainer}
    >
      <Grid container alignItems="center" className={classes.CardMapCenter}>
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

export default MarketMap3;
