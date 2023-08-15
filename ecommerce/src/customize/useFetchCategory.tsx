import { useState, useEffect } from "react";
import axios from "axios";
const useFetchCategory = (url: string) => {
  const [data, setData] = useState({
    cate_id: 1,
    cate_name: "Iphone",
    slug: "iphone",
    folder: "Iphone",
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      let res = await axios.get(url);
      let data = res && res.data ? res.data : [];
      setData(data);
      setLoading(false);
    })();
  }, []);

  return {
    data,
    loading,
  };
};
export default useFetchCategory;
