import { useState, useEffect } from "react";
import axios from "axios";

const useAreaFetch = (url) => {
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthChartApi = async (url) => {
    try {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          // console.log(res);
          let data = res.data.records;
          for (const v in data) {
            data[v]["一般垃圾量"] = data[v]["value2"];
            data[v]["資源垃圾量"] = data[v]["value3"];
            data[v]["廚餘量"] = data[v]["value4"];

            delete data[v]["value2"];
            delete data[v]["value3"];
            delete data[v]["value4"];
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

export default useAreaFetch;
