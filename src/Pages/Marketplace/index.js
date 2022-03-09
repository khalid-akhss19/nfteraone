import React from "react";

import NewComponent from "../../Components/NewComponent";
import { Box, Typography, makeStyles } from "@material-ui/core";

import Links from "../../Units/Links";
import SwitchButn from "../../Components/SwitchButn";
import WrappperMargin from "../../Components/WrappperMargin";
import MarketMap3 from "../../Components/MarketMap3";
import LoveByCommunity from "../../Components/LoveByCommunity";

const Marketplace = () => {
  const classes = useStyles();
  return (
    <>
      {/* <NewComponent variant="outilned">sample with styles </NewComponent> */}
      <Box className={classes.marketBackground}>
        <Box display="flex" className={classes.marketTopSection}>
          <Typography variant="h2" className={classes.MarketHeading}>
            NFT Marketplace
          </Typography>
        </Box>
        <WrappperMargin>
          <Box>
            <Links />
          </Box>
          <Box>
            <Typography variant="h4" className={classes.MarketSubHeading}>
              Artworks
            </Typography>
            <SwitchButn />
          </Box>
          <Box pt={3}>
            <MarketMap3 />
          </Box>
          <Box>
            <LoveByCommunity />
          </Box>
        </WrappperMargin>
      </Box>
    </>
  );
};

export default Marketplace;

const useStyles = makeStyles((theme) => ({
  marketTopSection: {
    height: "300.91px",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: "1px solid #E2F5FF",
    borderTop: "1px solid #E2F5FF",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      height: "150.91px",
    },
  },

  marketBackground: {
    background: "#e2f5ff",
  },
  MarketHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  MarketSubHeading: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
}));
