import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { Drawer, Divider, IconButton, List } from "@material-ui/core";
import {
  ChevronLeft,
  ChevronRight,
  Timeline,
  InsertChart,
  TableChart,
} from "@material-ui/icons";
import useStyles from "../styles/sidemenu";

const Sidemenu = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const handleSideOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        position="fixed"
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleSideOpen}>
            {open && <ChevronLeft />}
            {!open && <ChevronRight />}
            {/* <ChevronLeft /> */}
          </IconButton>
        </div>
        <Divider />
        <List component={Link} to="/charts/line" className={classes.list}>
          <Timeline />
          {open && <span className={classes.listTitle}>Line chart</span>}
        </List>
        <Divider />
        <List component={Link} to="/charts/area" className={classes.list}>
          <InsertChart />
          {open && <span className={classes.listTitle}>Area chart</span>}
        </List>
        <Divider />
        <List component={Link} to="/charts/mix" className={classes.list}>
          <TableChart />
          {open && <span className={classes.listTitle}>Mix chart</span>}
        </List>
      </Drawer>
    </>
  );
};

export default Sidemenu;
