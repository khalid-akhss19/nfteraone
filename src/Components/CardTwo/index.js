import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

// import small1 from "../../Assets/Images/cardemage21.png";
// import small2 from "../../Assets/Images/cardemage22.png";
// import small3 from "../../Assets/Images/cardemage23.png";
// import one from "../../Assets/Images/Rectangle 39.png";
// import two from "../../Assets/Images/imagebig2.png";
// import three from "../../Assets/Images/imagebig3.png";
import profile1 from "../../Assets/Images/Ellipse 9.png";

const CardTwo = ({ img, imgsmallA, imgsmallB, imgsmallC }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.CardOneContainer}>
        <Box p={2}>
          <Box
            className={classes.cardTwo3image}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box className={classes.cardTwo3image11}>
              <img
                src={imgsmallA}
                alt="pic sm1"
                className={classes.cardTwo3image1}
              />
            </Box>
            <Box className={classes.cardTwo3image11}>
              <img
                src={imgsmallB}
                alt="pic sm2"
                className={classes.cardTwo3image1}
              />
            </Box>
            <Box className={classes.cardTwo3image11}>
              <img
                src={imgsmallC}
                alt="pic sm3"
                className={classes.cardTwo3image1}
              />
            </Box>
          </Box>
          <Box align="center" justify="center" pt={1}>
            <img
              src={img}
              alt="pic bigone"
              className={classes.cardTwo3imageBig}
              borderRadius="5px"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography>Creative Art collection</Typography>

            <Box display="flex" flexDirection="row">
              <FavoriteIcon className={classes.HeartIcon} />
              <Typography className={classes.CardtwoHeart}> .5K</Typography>
            </Box>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pt={2}
          >
            <Typography className={classes.cardTwolastportion}>
              5 items
            </Typography>
            <Typography className={classes.cardTwolastportion}>
              Created by
            </Typography>

            <Box display="flex" alignItems="center">
              <img src={profile1} alt="pic" />
              <Typography>@djterry</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardTwo;

const useStyles = makeStyles((theme) => ({
  CardOneContainer: {
    width: "400px",
    height: "497.31px",
    borderRadius: "15px",
    backgroundColor: "white",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "397.31px",
      borderRadius: "15px",
    },
  },
  cardTwo3image1: {
    width: "100.69px",
    height: "76.28px",
    [theme.breakpoints.down("sm")]: {
      width: "80.69px",
      height: "66.28px",
    },
  },
  cardOnehistry: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    // color: theme.,
  },
  cardTwo3imageBig: {
    width: "359.61px",
    height: "267.94px",
    [theme.breakpoints.down("sm")]: {
      width: "270.61px",
      height: "200.94px",
    },
  },
  CardTwoCollection: {
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "20px",
    color: "rgba(23, 60, 86, 1)",
  },
  CardtwoHeart: {
    fontFamily: "Montserrat",
    fontSize: "10px",
    fontWeight: 400,
    lineHeight: "17px",
    cursor: "pointer",
    color: theme.palette.secondary.main,
  },
  HeartIcon: {
    cursor: "pointer",
    color: "rgba(98, 98, 98, 1)",
    width: "14.09px",

    height: "14.09px",
  },
  cardTwolastportion: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "17px",
  },
  cardOnetitle: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontSize: "1px",
    fontweight: 700,
    lineHeight: "15px",
  },
}));
