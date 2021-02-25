import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    placeContent: "center",
    placeItems: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
  },
  source: {
    color: "#aaa",
    fontSize: "0.75rem",
  },
}));
