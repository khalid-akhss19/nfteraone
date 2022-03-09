import { alpha, Button, withStyles } from "@material-ui/core";
const NewComponent = withStyles((theme) => ({
  // root: { background: "green" },
  // label: { color: "red", background: "yellow" },
  root: {
    boxSizing: "border-box",
    boxShadow: "0 0 5px -3px" + theme.palette.primary.main,
    borderWidth: 1,
    fontSize: 14,
    fontWeight: 600,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: "white",
      backgroundColor: alpha(theme.palette.primary.dark, 0.9),
    },
  },
  outlined: {
    "&:hover": {
      backgroundColor: alpha("#000", 0.2),
    },
  },
  containedSecondary: {
    color: "blue",
    backgroundColor: "red",
    borderRadius: "20px",
    // backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.8),
    },
  },
  outlinedPrimary: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: alpha(theme.palette.secondary.main, 0.8),
    },
  },
  outlinedSecondary: {
    border: "1px solid var(--black)",
    color: "rgba(23, 60, 86, 1)",
    backgroundColor: "transparent",
  },
}))(Button);
export default NewComponent;
