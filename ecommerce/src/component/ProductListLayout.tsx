import { useSelector } from "react-redux";
import useFetch from "../customize/useFetch";
import Product from "./../pages/home/content/Product";
import store from "../stores";
import { useEffect } from "react";
import { getListCategory } from "../stores/actions/actionReducers";
const ProductListLayout = () => {
  const dataRedux: any = useSelector((state) => state);
  const dataCategory = dataRedux?.categoryReducer?.categories;
  const fetchData = async () => {
    store.dispatch(getListCategory());
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="product-block">
      {dataCategory.map(
        (item: {
          cate_id: number;
          cate_name: string;
          slug: string;
          folder: string;
        }) => {
          return (
            <div className="category-item">
              <h2 className="block-title">
                <a href={`${item.slug}`}>{item.cate_name}</a>
              </h2>
              <div className="product-list">
                <Product cateID={item.cate_id} />
                <div className="show-all ">
                  <a className="Product-btn" href="/#">
                    Xem tất cả {item.cate_name}
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
export default ProductListLayout;
