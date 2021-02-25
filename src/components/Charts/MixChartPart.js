import React from "react";
import {
  ComposedChart,
  BarChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import useMixFetch from "../../hook/useMixFetch";
import { Container } from "@material-ui/core";
import useStyles from "../../styles/charts";

const MixChartPart = () => {
  const classes = useStyles();

  const url =
    "https://data.taipei/api/v1/dataset/8af26d29-02f6-4ad5-b9bd-e37a6557110a?scope=resourceAquire";

  const { chartData, loading } = useMixFetch(url);
  // console.log(chartData[0]);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>
        臺北市現有營造建築物總面積
        <p className={classes.source}>來源：台北市 opendata</p>
      </h2>
      <ComposedChart
        width={640}
        height={400}
        data={chartData}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="年別" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="磚造" fill="#cd1542" stroke="#cd1542" />
        <Bar dataKey="鋼骨鋼筋混凝土及預鑄造" barSize={20} fill="#b2a197" />
        <Line type="monotone" dataKey="加強磚造" stroke="#f94895" />
        <Line type="monotone" dataKey="木造" stroke="#ce8627" />

        <Scatter dataKey="其他" fill="#54af86" />
      </ComposedChart>
    </Container>
  );
};

export default MixChartPart;
