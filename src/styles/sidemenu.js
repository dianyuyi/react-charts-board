import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 64;
export default makeStyles((theme) => ({
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    marginTop: "64px",
    height: `calc(100vh - ${drawerWidth}px)`,
    width: 240,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  list: {
    padding: theme.spacing(1),
    marginLeft: theme.spacing(2),
    placeContent: "center start",
    display: "flex",
    textDecoration: "none",
    color: "#4d4d4d",
  },
  listTitle: {
    paddingLeft: theme.spacing(1),
  },
}));
