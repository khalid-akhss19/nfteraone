import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

import small1 from "../../Assets/Images/cardemage21.png";
import small2 from "../../Assets/Images/cardemage22.png";
import small3 from "../../Assets/Images/cardemage23.png";
import one from "../../Assets/Images/Rectangle 39.png";
import two from "../../Assets/Images/imagebig2.png";
import three from "../../Assets/Images/imagebig3.png";
import profile1 from "../../Assets/Images/Ellipse 9.png";

const CardTwo = () => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.CardOneContainer}
        width="416px"
        height="497.31px"
        borderColor="brown"
        border={2}
        borderRadius="15px"
        bgcolor="skyblue"
      >
        <Box p={2}>
          <Box
            className={classes.cardTwo3image}
            display="flex"
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Box className={classes.cardTwo3image11}>
              <img src={small1} alt="pic" className={classes.cardTwo3image1} />
            </Box>
            <Box className={classes.cardTwo3image11}>
              <img src={small2} alt="pic" className={classes.cardTwo3image1} />
            </Box>
            <Box className={classes.cardTwo3image11}>
              <img src={small3} alt="pic" className={classes.cardTwo3image1} />
            </Box>
          </Box>
          <Box align="center" justify="center" pt={1}>
            <img
              src={one}
              alt="pic"
              className={classes.cardTwo3imageBig}
              borderRadius="5px"
            />
          </Box>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography>Creative Art collection</Typography>

            <Box display="flex" flexDirection="row">
              <FavoriteIcon />
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
  cardTwo3image: {},
  cardTwo3image1: {
    width: "113.69px",
    height: "86.28px",
  },
  cardOnehistry: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    // color: theme.,
  },
  cardTwo3imageBig: {
    width: "369.61px",
    height: "277.94px",
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

    color: theme.palette.secondary.main,
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
