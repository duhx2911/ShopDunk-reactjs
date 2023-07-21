import BreadCrumb from "../../../component/detail/BreadCrumb";
import PictureDetail from "../../../component/detail/PictureDetail";
import PictureOverview from "../../../component/detail/PictureOverview";
import AllSale from "../../../component/detail/AllSale";
import HomeLayouts from "./../../../component/layout/home/index";
const Details = () => {
  return (
    <HomeLayouts>
      <div className="detail">
        <div className="container">
          <BreadCrumb />
          <div className="product-details-page">
            <form action="" id="product-details-form">
              <div className="product-info">
                <PictureDetail />
                <PictureOverview />
              </div>
              <div className="all-sells">
                <AllSale />
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
