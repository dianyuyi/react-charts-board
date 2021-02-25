import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Container } from "@material-ui/core";
import useStyles from "../../styles/charts";
import useLineFetch from "../../hook/useLineFetch";

const LineChartPart = () => {
  const classes = useStyles();

  const url =
    "https://data.taipei/api/v1/dataset/fa462b88-84ce-4f4b-a584-baf036de331c?scope=resourceAquire";
  const { chartData, loading } = useLineFetch(url);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>
        主要農產品產銷及進出口量值
        <p className={classes.source}>來源：台北市 opendata</p>
      </h2>
      <LineChart
        width={640}
        height={360}
        data={chartData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="年別" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="交易金額[百萬]"
          stroke="#ff3321"
          activeDot={{ r: 6 }}
        />
        <Line type="monotone" dataKey="交易量[百噸]" stroke="#ffb759" />
      </LineChart>
    </Container>
  );
};

export default LineChartPart;
