import React from "react";
import TopArtistSection from "../TopArtistSection";
import Dataa from "./Dataa";
import { Grid } from "@material-ui/core";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <div className={classes.topArtistMain}>
          <h2 className={classes.topArtist}>Top Artists</h2>
          <h3 className={classes.topArtistarrow}>view all</h3>
        </div>
        <Grid container spacing={2} className={classes.top}>
          <Carousel breakPoints={breakPoints}>
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
    background: " rgba(63, 210, 199, 0.31)",
  },
  topArtist: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 36,
    fontFamily: "Montserrat",
    lineHeight: "43.88px",
    fontWeight: "700",
  },
  topArtistarrow: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 12,
    fontFamily: "Montserrat",
    lineHeight: "14.63px",
    fontWeight: "400",
    paddingRight: "140px",
  },
  topArtistMain: {
    display: "flex",
    paddingLeft: "90px",

    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // justifyContent: "space-around",
  },
}));
