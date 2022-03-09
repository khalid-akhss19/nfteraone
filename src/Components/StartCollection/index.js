import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import WrappperMargin from "../../Components/WrappperMargin";
import Button from "@material-ui/core/Button";

import emage from "../../Assets/Images/emage4.png";

const StartCollection = () => {
  const classes = useStyles();
  return (
    <div className={classes.contaonerstrtcollection}>
      <WrappperMargin>
        <Box
          display="flex"
          justifyContent="space-around"
          color="white"
          pt={2}
          p={2}
          className={classes.outer}
        >
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={2}
            justifyContent="center"
            className={classes.left}
          >
            <Typography variant="h4">
              Start your own collection today
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida{" "}
              <br />
              vulputate sit elementum non tellus, diam elementum.
            </Typography>
            <Button variant="contained" className={classes.whitebtn}>
              Start collecting
            </Button>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            className={classes.squareimage}
          >
            <img src={emage} alt="sddddfdf" />
          </Box>
        </Box>
      </WrappperMargin>
    </div>
  );
};

export default StartCollection;

const useStyles = makeStyles((theme) => ({
  contaonerstrtcollection: {
    background:
      " radial-gradient(59.94% 187.75% at 47.89% -52.68%, #00458B 0%, #173C56 0.01%, #00172F 100%)",
  },
  whitebtn: {
    borderRadius: "20px",
    marginTop: "10px",
  },
  outer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      margin: "30px 15px",
      alignItems: "center",
    },
  },
  squareimage: {},
}));
