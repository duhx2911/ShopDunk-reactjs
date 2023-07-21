import { Col, Row } from "antd";
const Product = () => {
  return (
    <div className="product-block">
      <div className="category-item">
        <h2 className="block-title">
          <a href="/#">iPhone</a>
        </h2>
        <div className="product-list">
          <Row gutter={16}>
            <Col span={6}>
              <div className="card-item">
                <div className="product-tag">
                  <img src="images/khai-truong.png" alt="" />
                </div>
                <div className="product-img">
                  <a href="/details">
                    <img
                      src="images/Iphone/iphone-14-pro-max-128gb.png"
                      alt="iPhone 14 Pro Max 128GB img"
                    />
                  </a>
                </div>
                <div className="product-detail">
                  <p className="product-name">
                    <a href="/details">iPhone 14 Pro Max 128GB</a>
                  </p>
                  <div className="product-price">
                    <p className="current-price">26.790.000₫</p>
                    <del className="old-price">34.990.000₫</del>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="card-item">
                <div className="product-tag">
                  <img src="images/khai-truong.png" alt="" />
                </div>
                <div className="product-img">
                  <a href="/#">
                    <img
                      src="images/Iphone/iphone-14-128gb.png"
                      alt="iPhone 14 Pro Max 128GB img"
                    />
                  </a>
                </div>
                <div className="product-detail">
                  <p className="product-name">
                    <a href="/#">iPhone 14 Pro Max 128GB</a>
                  </p>
                  <div className="product-price">
                    <p className="current-price">26.790.000₫</p>
                    <del className="old-price">34.990.000₫</del>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="card-item">
                <div className="product-tag">
                  <img src="images/khai-truong.png" alt="" />
                </div>
                <div className="product-img">
                  <a href="/#">
                    <img
                      src="images/Iphone/iphone-14-plus-128gb.png"
                      alt="iPhone 14 Pro Max 128GB img"
                    />
                  </a>
                </div>
                <div className="product-detail">
                  <p className="product-name">
                    <a href="/#">iPhone 14 Pro Max 128GB</a>
                  </p>
                  <div className="product-price">
                    <p className="current-price">26.790.000₫</p>
                    <del className="old-price">34.990.000₫</del>
                  </div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="card-item">
                <div className="product-tag">
                  <img src="images/khai-truong.png" alt="" />
                </div>
                <div className="product-img">
                  <a href="/#">
                    <img
                      src="images/Iphone/iphone-14-pro-128gb.png"
                      alt="iPhone 14 Pro Max 128GB img"
                    />
                  </a>
                </div>
                <div className="product-detail">
                  <p className="product-name">
                    <a href="/#">iPhone 14 Pro Max 128GB</a>
                  </p>
                  <div className="product-price">
                    <p className="current-price">26.790.000₫</p>
                    <del className="old-price">34.990.000₫</del>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="show-all ">
            <a className="Product-btn" href="/#">
              Xem tất cả Iphone
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
