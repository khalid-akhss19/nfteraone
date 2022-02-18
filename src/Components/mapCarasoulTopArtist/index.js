import React from "react";
import TopArtistSection from "../TopArtistSection";
import Dataa from "./Dataa";
import { Grid } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";

const MapCarasoulTopArtist = () => {
  const classes = useStyles();

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <Grid container className={classes.mainCarasoul}>
        <Box className={classes.topArtistMain}>
          <Typography className={classes.topArtist}>Top Artists</Typography>
          <Typography className={classes.topArtistarrow}>view all</Typography>
        </Box>
        <Grid container spacing={2} className={classes.top}>
          <Carousel breakPoints={breakPoints} className={classes.addas}>
            {Dataa.map(({ img, title, subtitle }) => {
              return (
                <TopArtistSection img={img} title={title} subtitle={subtitle} />
              );
            })}
          </Carousel>
        </Grid>
      </Grid>
    </>
  );
};

export default MapCarasoulTopArtist;

const useStyles = makeStyles((theme) => ({
  top: {
    width: "100%",
  },
  mainCarasoul: {
    background: " #E2F5FF",
  },
  topArtist: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 36,
    fontFamily: "Montserrat",
    lineHeight: "43.88px",
    fontWeight: "700",
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
      lineHeight: "33.88px",
      fontWeight: "400",
    },
  },
  topArtistarrow: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 12,
    fontFamily: "Montserrat",
    lineHeight: "14.63px",
    fontWeight: "400",
    paddingRight: "140px",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "0px",
      lineHeight: "12.63px",
    },
  },
  topArtistMain: {
    display: "flex",
    paddingLeft: "90px",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  addas: {
    // display: "flex",
    paddingLeft: "90px",
    paddingRight: "100px",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "0px",
      paddingRight: "0px",
      justifyContent: "center",
    },
  },
}));
