import { useState, useEffect } from "react";
import axios from "axios";
const useFetchSingle = (url: string) => {
  const [data, setData] = useState({
    id: 1,
    productName: "iPhone 14 Pro Max 128GB",
    crrPrice: "26.790.000",
    oldPrice: "34.990.000",
    cate_id: 1,
    slug: "iphone-14-pro-max-128gb",
    imgName: "iphone-14-pro-max-128gb.png",
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
export default useFetchSingle;
