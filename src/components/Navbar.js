import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
// import logo from '../../assets/commerce.png'

import useStyles from "../styles/navbar";

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Dashboard by @material-ui
          </Typography>
          <div className={classes.grow} />
          {location.pathname == "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/"
                aria-label="dashboard"
                color="inherit"
              >
                <Badge badgeContent="0" color="secondary">
                  <Dashboard />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
