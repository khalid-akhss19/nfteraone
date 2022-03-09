import React from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import {
  Grid,
  Button,
  makeStyles,
  MenuItem,
  MenuList,
  Popper,
  Grow,
} from "@material-ui/core";

const options = ["Owned by creator", "Recent Active", "Has sold"];

const SortByBtn = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Button
          className={classes.sortByBtn}
          onClick={(handleClick, handleToggle)}
          ref={anchorRef}
          variant="contained"
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          style={{ backgroundColor: "rgba(23, 60, 86, 1)" }}
        >
          {options[selectedIndex]}
          <ArrowDropDownIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu">
                  {options.map((option, index) => (
                    <MenuItem
                      key={option}
                      disabled={index === 2}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
};

export default SortByBtn;

const useStyles = makeStyles((theme) => ({
  SwitchButnArtwork: {
    paddingRight: "10px",
  },
  sortByBtn: {
    borderRadius: "90px",
    color: "white",
    backgroundColor: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
  },
}));
