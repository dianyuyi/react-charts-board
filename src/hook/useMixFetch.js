import { useState, useEffect } from "react";
import axios from "axios";

const usePieFetch = (url) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthChartApi = async (url) => {
    try {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          // console.log(res);
          let data = res.data.result.results;
          for (const v in data) {
            data[v]["木造"] = data[v]["木造"].replace(/,/gi, "");
            data[v]["鋼骨鋼筋混凝土及預鑄造"] = data[v][
              "鋼骨鋼筋混凝土及預鑄造"
            ].replace(/,/gi, "");
            data[v]["磚造"] = data[v]["磚造"].replace(/,/gi, "");
            data[v]["加強磚造"] = data[v]["加強磚造"].replace(/,/gi, "");
            data[v]["其他"] = data[v]["其他"].replace(/,/gi, "");
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

export default usePieFetch;
