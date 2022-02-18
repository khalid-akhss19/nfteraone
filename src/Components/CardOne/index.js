import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import profile1 from "../../Assets/Images/Ellipse 9.png";

const CardOne = ({ img }) => {
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.CardOneContainer}
        width="292.03px"
        height={460.77}
        // borderColor="red"
        // border={1}
        borderRadius="15px"
        bgcolor="white"
      >
        <Box p={2}>
          <Box
            ClassName={classes.CardOneImage}
            display="flex"
            alignItems="center"
            p={1}
          >
            <img src={profile1} alt="pic" />
            <Typography className={classes.cardOnetitle}>@djterry</Typography>
          </Box>
          <Box>
            <img src={img} alt="pic" className={classes.cardimage} />
          </Box>
          <Typography className={classes.cardOne3D}>The 3D Guy</Typography>
          <Box display="flex" justifyContent="space-between" pt={2}>
            <Typography className={classes.cardOnestock}>
              10 in stock
            </Typography>
            <Typography className={classes.cardOneprice}>
              Price: 2.45ETH
            </Typography>
          </Box>
          <hr
            style={{
              border: "1px solid #173C56",
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={2}
          >
            <Typography className={classes.cardOnehistry}>
              View History
            </Typography>
            <Button
              variant="contained"
              borderRadius="80%"
              className={classes.cardOnaebtn}
            >
              Place a bid
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CardOne;

const useStyles = makeStyles((theme) => ({
  roundCardContainer: {},
  cardOnehistry: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "15px",
    color: "#173C56",
  },
  cardOnaebtn: {
    fontSize: "12px",
    borderRadius: "90px",
    background: "#173C56",
    color: "#FFFFFF",
    backgroundColor: "#173C56 !important",
    lineheight: "14.63px",
  },
  cardOnestock: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: "15px",
    color: "#173C56",
  },
  cardOneprice: {
    fontFamily: "Montserrat",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "15px",
    color: "#173C56",
  },
  cardOne3D: {
    fontFamily: "Montserrat",
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "19.5px",
    color: "#173C56",
    fontWeight: "bold",
    paddingTop: "10px",
  },
  cardOnetitle: {
    fontFamily: "Montserrat",
    fontSize: 12,
    fontWeight: 700,
    lineHeight: "19.5px",
    color: "#173C56",
    paddingLeft: "10px",
  },
  cardimage: {
    borderRadius: "17px",
    width: "254.51px",
    Height: "69.62px",
  },
}));
