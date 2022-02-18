import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import prof from "../../Assets/Images/Ellipse 7.png";

const TopArtistSection = ({ img, title, subtitle }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.overallTopArtist}>
        <Box
          className={classes.roundCardContainer}
          border={1}
          height={90.64}
          width={300.5}
          borderRadius="90px"
          bgcolor="white"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          mt={5}
        >
          <Box borderRadius="90px" ml={3}>
            <img
              src={img}
              alt="prof top artist"
              className={classes.roundimage}
            />
          </Box>
          <Box ml={2}>
            <Typography variant="h6" className={classes.topArtistHeading}>
              {title}
            </Typography>
            <Typography variant="h6" className={classes.topArtistsubHeading}>
              {subtitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TopArtistSection;

const useStyles = makeStyles((theme) => ({
  roundCardContainer: {
    // borderColor: "red",
    display: "flex",
    border: "none",

    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "80px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "150px",
      height: "60px",
    },
  },
  roundimage: {
    [theme.breakpoints.down("sm")]: {
      width: "60px",
      height: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "50px",
      height: "45px",
    },
  },
  topArtistHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 18,
    fontFamily: "Montserrat",
    lineHeight: "21.94px",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "11.94px",
      fontWeight: 300,
    },
  },
  topArtistsubHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 14,
    fontFamily: "Montserrat",
    lineHeight: "17px",
    fontWeight: "400",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "12px",
      fontWeight: "300",
    },
  },
}));
