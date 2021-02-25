import React from "react";
import clsx from "clsx";
import useStyles from "../styles/dashboard";
import { Box, Container, Grid, Paper } from "@material-ui/core";
import LineChartPart from "./Charts/LineChartPart";
import AreaChartPart from "./Charts/AreaChartPart";
import MixChartPart from "./Charts/MixChartPart";

const Board = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={fixedHeightPaper}>
              <LineChartPart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={fixedHeightPaper}>
              <AreaChartPart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <Paper className={classes.paper}>
              <MixChartPart />
            </Paper>
          </Grid>
        </Grid>
        <Box pt={4}></Box>
      </Container>
    </main>
  );
};

export default Board;
