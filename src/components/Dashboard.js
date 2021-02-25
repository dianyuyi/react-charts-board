import React from "react";
import useStyles from "../styles/dashboard";
import { CssBaseline } from "@material-ui/core";

import Sidemenu from "./Sidemenu";
import Board from "./Board";

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <Sidemenu /> */}
      <Board />
    </div>
  );
};

export default Dashboard;
