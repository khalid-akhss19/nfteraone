import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  mainConntainers: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navPartOne: {
    display: "flex",
    justifyContent: "space-around",
  },
  navlogomain: {
    marginRight: 40,
    display: "flex",
    justifyContent: "flex-start",
  },
  navLinksContainer: {
    "& .navlinks": {
      textDecoration: "none",
      fontFamily: "Montserrat",
      fontSize: 14,
      color: "#173C56",
      marginRight: 15,
    },
  },

  navPartTwo: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: "10",
  },

  searchBar: {
    width: 286.38,
    Height: "30px",
    "& .iconSearch": {
      textAlign: "center",
      color: "white",
      outline: "none",
      backgroundColor: "red",
    },
  },
  iconSearch: {},
  last: {},

  [theme.breakpoints.down("md")]: {
    // Searchicon: {
    //   display: "none",
    // },
  },
  navCreateButton: {
    borderRadius: "90px",
    backgroundColor: "rgba(153, 221, 255, 1)",
    color: "rgba(23, 60, 86, 1)",
    boxShadow: "0px 0px 5px rgba(0, 69, 139, 0.15)",
    textDecoration: "none",
    borderStyle: "none",
    width: "143.87",
    height: "41.22",
  },

  navIconContainer: {},
  navCirclesIcon: {
    width: "50px",
    height: "40px",
  },
}));
