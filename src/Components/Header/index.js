import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useStyles } from "./style";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import logo from "../../Assets/Images/NFTERA.ONE.png";
import vectorSearch from "../../Assets/Images/Vector.png";

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Box pt={3} className={classes.mainConntainers}>
        <box className={classes.navPartOne}>
          <Box className={classes.navlogomain}>
            <img src={logo} alt="logo here" />
          </Box>
          <Box className={classes.navLinksContainer}>
            <Link className="navlinks" to="Collections">
              Collections
            </Link>
            <Link className="navlinks" to="Marketplace">
              Marketplace
            </Link>
            <Link className="navlinks" to="Profile">
              Profile
            </Link>
            <Link className="navlinks" to="Creators">
              Creators
            </Link>
            <Link className="navlinks" to="Faq">
              Faq
            </Link>
          </Box>
        </box>
        {/* right side of header */}
        <box className={classes.navPartTwo}>
          <Box
            bgcolor="#173C56"
            color="white"
            height={25}
            borderRadius="10px"
            height="30px"
            className={classes.searchBar}
          >
            <img src={vectorSearch} alt="searchicon" className="iconSearch" />
            <input
              type="text"
              placeholder="Search"
              className={classes.iconSearch}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className={classes.navCreateButton}
            >
              Connect Wallet
            </Button>
          </Box>
          <Box className={classes.navIconContainer}>
            <AccountCircleIcon className={classes.navCirclesIcon} />
          </Box>
        </box>
      </Box>
    </>
  );
};

export default Header;
