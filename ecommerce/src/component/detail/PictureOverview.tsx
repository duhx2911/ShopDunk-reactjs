import { Select } from "antd";
const PictureOverview = () => {
  return (
    <div className="overview">
      <div className="wrapper-info">
        <div className="product-name">
          <h1>iPhone 14 Pro Max 128GB</h1>
        </div>
        <div className="product-rate d-flex justify-content-between">
          <div className="d-flex">
            <div className="product-review d-flex">
              <div className="review-star">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#b6f42f" }}
                ></i>
              </div>
              <div className="review-cmt">
                <a href="/#">87 đánh giá</a>
                <span> | </span>
              </div>
            </div>
            <div className="review-btn">
              <button>
                <i
                  className="fa-solid fa-circle-plus"
                  style={{ color: "#1c61d9", marginRight: "10px" }}
                ></i>
                So sánh
              </button>
            </div>
          </div>
          <div className="select-region">
            <Select
              defaultValue="north"
              style={{ width: 160 }}
              options={[
                { label: "Vui lòng chọn" },
                { value: "north", label: "Khu vực miền Bắc" },
                { value: "southern", label: "Khu vực miền Nam" },
              ]}
            />
          </div>
        </div>
      </div>
      {/* Price */}
      <div className="prices">
        <div className="current-price">25.990.000₫</div>
        <div className="old-price">
          <del>34.990.000₫</del>
        </div>
      </div>

      <div className="attributes">
        <label className="text-prompt">Dung lượng</label>
        <div className="storage-capacity">
          <ul>
            <li>128GB</li>
            <li>256GB</li>
            <li>512GB</li>
            <li>1TB</li>
          </ul>
        </div>
        <label className="text-prompt">Màu sắc</label>
        <div className="color-picker">
          <ul>
            <li>
              <label style={{ backgroundColor: "#4c4b49" }}>
                <span>&nbsp;</span>
              </label>
            </li>
            <li>
              <label style={{ backgroundColor: "#e3e5e3" }}>
                <span>&nbsp;</span>
              </label>
            </li>
            <li>
              <label style={{ backgroundColor: "#fcebd3" }}>
                <span>&nbsp;</span>
              </label>
            </li>
            <li>
              <label style={{ backgroundColor: "#61586b" }}>
                <span>&nbsp;</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="short-des">
        <p className="title">
          <i className="fa-solid fa-gift"></i>
          Khuyến mại
        </p>
        <div className="info-promotions">
          <ul>
            <li>
              <input type="radio" id="pay-off" name="promotion" value="100" />
              <label htmlFor="pay-off">Mua thẳng</label>
            </li>
            <li>
              <input
                type="radio"
                id="installment"
                name="promotion"
                value="50"
              />
              <label htmlFor="installment">Trả góp 0%</label>
            </li>
            <li>
              <input type="radio" id="vip" name="promotion" value="50" />
              <label htmlFor="vip">
                Giá ưu đãi mua kèm bảo hành kim cương, VIP
              </label>
            </li>
          </ul>
        </div>
        <p className="title">
          <i className="fa-solid fa-gift"></i>
          Khuyến mại
        </p>
        <div className="info-promotions">
          <ul>
            <li>
              <input type="radio" id="pay-off" name="promotion" value="100" />
              <label htmlFor="pay-off">Mua thẳng</label>
            </li>
            <li>
              <input
                type="radio"
                id="installment"
                name="promotion"
                value="50"
              />
              <label htmlFor="installment">Trả góp 0%</label>
            </li>
            <li>
              <input type="radio" id="vip" name="promotion" value="50" />
              <label htmlFor="vip">
                Giá ưu đãi mua kèm bảo hành kim cương, VIP
              </label>
            </li>
          </ul>
        </div>
        <div className="" style={{ margin: "20px 0 20px 15px" }}>
          <a href="/">Xem thêm</a>
        </div>
      </div>
      <div className="product-policy">
        <div className="prd-policy">
          <ul>
            <li>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#3c6fd8" }}
              ></i>
              Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning -
              Type C
            </li>
            <li>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#3c6fd8" }}
              ></i>
              Bảo hành chính hãng 1 năm
            </li>
            <li>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#3c6fd8" }}
              ></i>
              Giao hàng nhanh toàn quốc
            </li>
            <li>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#3c6fd8" }}
              ></i>
              Gọi đặt mua <a href="tel:1900.6626">1900.6626</a> (7:30 - 22:00)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PictureOverview;
