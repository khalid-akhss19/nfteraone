import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import WrappperMargin from "../WrappperMargin";
import Button from "@material-ui/core/Button";
import Metamask from "../../Assets/Images/Metamask.png";
import OpenSea from "../../Assets/Images/OpenSea.png";

const LoveByCommunity = () => {
  const classes = useStyles();
  return (
    <div className={classes.contaonerstrtcollection}>
      <WrappperMargin>
        <Box
          display="flex"
          justifyContent="space-around"
          color="rgba(23, 60, 86, 1)"
          alignItems="center"
          borderRadius="15px"
          // p={12}
          // pt={12}
          bgcolor=" #FFFFFF"
          className={classes.lovebycommunity}
          height={165}
        >
          <Box display="flex" gap={2}>
            <Typography variant="h4" className={classes.heading}>
              Loved by community
            </Typography>
          </Box>
          <Box>
            <img src={Metamask} alt="sddddfdf" className={classes.pic1} />
          </Box>
          <Box>
            <img src={OpenSea} alt="sddddfdf" className={classes.pic2} />
          </Box>
        </Box>
      </WrappperMargin>
    </div>
  );
};

export default LoveByCommunity;

const useStyles = makeStyles((theme) => ({
  contaonerstrtcollection: {
    background: "#e2f5ff",
    padding: "60px",
    [theme.breakpoints.down("xs")]: {
      padding: "15px 0px",
    },
  },
  lovebycommunity: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  pic1: {
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  pic2: {
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
}));
