import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useAreaFetch from "../../hook/useAreaFetch";
import { Container } from "@material-ui/core";
import useStyles from "../../styles/charts";

const AreaChartPart = () => {
  const classes = useStyles();

  const url =
    "https://data.epa.gov.tw/api/v1/stat_p_126?limit=100&api_key=9be7b239-557b-4c10-9775-78cadfc555e9&format=json";

  const { chartData, loading } = useAreaFetch(url);
  // console.log(chartData[0]);

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <Container className={classes.container}>
      <h2 className={classes.title}>
        全國一般廢棄物產生量
        <p className={classes.source}>來源：政府開放資料平台</p>
      </h2>
      <AreaChart
        width={640}
        height={360}
        data={chartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="item1" />
        <YAxis />
        <Tooltip />
        {/* <Area
          type="monotone"
          dataKey="value1"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        /> */}
        <Area
          type="monotone"
          dataKey="一般垃圾量"
          stackId="1"
          stroke="#2885bd"
          fill="#2885bd"
        />
        <Area
          type="monotone"
          dataKey="資源垃圾量"
          stackId="1"
          stroke="#4dd4dd"
          fill="#4dd4dd"
        />
        <Area
          type="monotone"
          dataKey="廚餘量"
          stackId="1"
          stroke="#06a05d"
          fill="#06a05d"
        />
      </AreaChart>
    </Container>
  );
};

export default AreaChartPart;
