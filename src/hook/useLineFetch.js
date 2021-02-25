import { useState, useEffect } from "react";
import axios from "axios";

const useLineFetch = (url) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthChartApi = async (url) => {
    try {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          let data = res.data.result.results;
          for (const v in data) {
            let price = data[v]["交易金額[元]"];
            let ton = data[v]["交易量[公斤]"];
            data[v]["交易金額[百萬]"] = Math.round(price / 1000000);
            data[v]["交易量[百噸]"] = Math.round(ton / 100000);
            // console.log(chartData[v]["交易金額[萬]"]);
          }
          setChartData(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // console.log(chartData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // throw new Error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    fecthChartApi(url);
  }, [url]);

  return { chartData, loading };
};

export default useLineFetch;
