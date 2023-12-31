import BreadCrumb from "../../../component/detail/BreadCrumb";
import PictureDetail from "../../../component/detail/PictureDetail";
import PictureOverview from "../../../component/detail/PictureOverview";
import AllSale from "../../../component/detail/AllSale";
import HomeLayouts from "./../../../component/layout/home/index";
import useFetchSingle from "../../../customize/useFetchSingle";
import { useParams } from "react-router-dom";
import useFetch from "../../../customize/useFetch";
import useFetchCategory from "../../../customize/useFetchCategory";
import { useSelector } from "react-redux";
import store from "../../../stores";
import { getListProduct } from "../../../stores/actions/actionReducers";
import { useEffect } from "react";
interface PRODUCT {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  imgName: string;
  slug: string;
}
const Details = () => {
  const dataRedux: any = useSelector((state) => state);
  const dataProduct = dataRedux?.productReducer?.products || [];
  const fetchData = async () => {
    store.dispatch(getListProduct());
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(product);
  return (
    <HomeLayouts>
      <div className="detail">
        <div className="container">
          <BreadCrumb />
          <div className="product-details-page">
            <form action="" id="product-details-form">
              <div className="product-info">
                <PictureDetail />
                <PictureOverview data={dataProduct} />
              </div>
              <div className="all-sells">
                <AllSale data={dataProduct} />
              </div>
              <div className="tab-detail">
                <ul>
                  <li className="tab-detail-item">
                    <a href="/#" className="tab-detail-link">
                      Mô tả sản phẩm
                    </a>
                  </li>
                  <li className="tab-detail-item">
                    <a href="/#" className="tab-detail-link">
                      Mô tả sản phẩm
                    </a>
                  </li>
                  <li className="tab-detail-item">
                    <a href="/#" className="tab-detail-link">
                      Mô tả sản phẩm
                    </a>
                  </li>
                  <li className="tab-detail-item">
                    <a href="/#" className="tab-detail-link">
                      Mô tả sản phẩm
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HomeLayouts>
  );
};
export default Details;
