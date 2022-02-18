import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  CardMapContainer: {
    background: "#e2f5ff",
  },
  navlink: {
    textDecoration: "none",
    color: "rgba(23, 60, 86, 1)",
  },
  CardMapCenter: {
    marginBottom: "30px",
  },
  bbb: {
    fontSize: 38,
    marginRight: "60px",
    color: "rgba(23, 60, 86, 1)",
  },
  CardMapTitle: {
    //     fontSize: "32px",
    //     fontWeight: 700,
    marginBottom: "50px",
    //     color: "rgba(23, 60, 86, 1)",
    //     [theme.breakpoints.up("sm")]: {
    //       fontSize: "32px",
    //       fontWeight: 400,
    //       marginBottom: "0px",
    //     },
    //     [theme.breakpoints.up("xs")]: {
    //       fontSize: "32px",
    //       fontWeight: 700,
    //     },
  },
  CardMapLinks: {
    paddingBottom: "25px",
  },
}));
