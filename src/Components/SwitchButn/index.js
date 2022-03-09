import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import SortByBtn from "../../Components/SortByBtn";

const SwitchButn = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <>
      <Box pt={2} className={classes.filterfilter}>
        <Box className={classes.OneOne}>
          <Typography variant="body1" className={classes.Filterbytext1}>
            FILTER BY:
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
              />
            }
            label="Has list price"
          />
          <FormControlLabel
            control={
              <Switch
                checked={state.checkedB}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="Has open offer"
          />
          <FormControlLabel
            control={<Switch color="primary" backgroundColor="Secondary" />}
            label="Owned by creator"
          />
          <FormControlLabel
            control={<Switch color="primary" />}
            label="Has sold"
          />
        </Box>

        <Box className={classes.TwoTwo}>
          <Typography variant="p" className={classes.Filterbytext2}>
            SORT BY:
          </Typography>
          <Box>
            <SortByBtn />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SwitchButn;

const useStyles = makeStyles((theme) => ({
  filterfilter: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  Filterbytext2: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontweight: "400",
  },
  Filterbytext1: {
    color: "rgba(23, 60, 86, 1)",
    fontFamily: "Montserrat",
    fontweight: "400",
  },
  TwoTwo: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
  },
  OneOne: {
    display: "flex",
    alignItems: "center",
    gap: "1em",
    [theme.breakpoints.down("xs")]: {
      // flexDirection: "column",
      // alignItems: "center",
      // gap: "0em",
      display: "none",
    },
  },
}));
