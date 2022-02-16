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
            <img src={img} alt="prof top artist" />
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
  },
  topArtistHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 18,
    fontFamily: "Montserrat",
    lineHeight: "21.94px",
    fontWeight: "400",
  },
  topArtistsubHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontSize: 14,
    fontFamily: "Montserrat",
    lineHeight: "17px",
    fontWeight: "400",
  },
  // link: {
  //   [theme.breakpoints.down("sm")]: {
  //     display: "block",
  //     "&:hover": {
  //       color: "black",
  //       border: "none",
  //       paddingBottom: "5px",
  //     },
  //   },
  // },
}));
