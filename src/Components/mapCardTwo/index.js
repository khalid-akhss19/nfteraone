import React from "react";
import CardTwo from "../../Components/CardTwo";
import DataTwo from "./DataTwo";
import { Grid, Typography, Box } from "@material-ui/core";
import { useStyles } from "./style";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import WrappperMargin from "../../Components/WrappperMargin";
const MapCardTwo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.CardMapContainer}>
      <Grid container alignItems="center" className={classes.CardMapCenter}>
        <WrappperMargin>
          {/* <Grid container xs={12}> */}
          <Box display="flex" alignItems="center">
            {/* <Grid
                container
                item
                md={12}
                style={{
                  justifyContent: "space-between",
                  alignItem: " center",
                }}
              > */}
            <Box>
              <Typography
                variant="h3 "
                justify="center"
                className={classes.bbb}
              >
                Collections
              </Typography>
            </Box>
            <Box display="flex" align="center">
              <Typography variant="h5" className={classes.bbbc}>
                View all
              </Typography>
              <Box display="flex" align="center" justify="center">
                <ArrowLeftIcon /> <ArrowRightIcon />
              </Box>
            </Box>
            {/* </Grid> */}
          </Box>
          {/* </Grid> */}
        </WrappperMargin>
        <Grid container alignItems="center">
          {DataTwo.map(({ img, imgsmallA, imgsmallB, imgsmallC }) => {
            return (
              <Grid
                item
                container
                className={classes.CardMapCenter}
                md={6}
                xs={12}
                lg={4}
                justify="center"
              >
                <CardTwo
                  img={img}
                  imgsmallA={imgsmallA}
                  imgsmallB={imgsmallB}
                  imgsmallC={imgsmallC}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MapCardTwo;
