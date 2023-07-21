import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      (async () => {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        setData(data);
        setLoading(false);
      })();
    }, 2000);
  }, []);

  return {
    data,
    loading,
  };
};
export default useFetch;
