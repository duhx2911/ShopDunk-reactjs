import { Button, Select } from "antd";
import { useParams } from "react-router-dom";
import useFetchSingle from "../../customize/useFetchSingle";
interface PRODUCT {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  imgName: string;
  slug: string;
}
let listCart: any = [];
const PictureOverview = (data: any) => {
  const { productSlug } = useParams();
  const { data: product } = useFetchSingle(
    `http://localhost:8080/${productSlug}`
  );
  const addToCard = (product: PRODUCT) => {
    if (window.localStorage.getItem("listCart")) {
      listCart = JSON.parse(window.localStorage.getItem("listCart") || "[]");
    }
    if (product) {
      const recordCart = listCart.filter(
        (record: any) => record.id === product.id
      );
      // console.log(recordCart);
      if (recordCart.length) {
        const newList = listCart.map((record: any) => {
          if (record.id === product.id) {
            return {
              ...product,
              quantity: record.quantity + 1,
            };
          }
          return record;
        });
        localStorage.setItem("listCart", JSON.stringify(newList));
        console.log("newList:", newList);
      } else {
        const cartItem = { ...product, quantity: 1 };
        const newList = [...listCart, cartItem];
        localStorage.setItem("listCart", JSON.stringify(newList));
        console.log("newList:", newList);
      }
      window.location.assign("http://localhost:3000/cart");
      // Cart.push(product);
      // window.localStorage.setItem("Cart", JSON.stringify(Cart));
    }
  };
  // console.log(product);
  return (
    <div className="overview">
      <div className="wrapper-info">
        <div className="product-name">
          <h1>{product.productName}</h1>
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
        <div className="current-price">{product.crrPrice}₫</div>
        <div className="old-price">
          <del>{product.oldPrice}₫</del>
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
          Ưu đãi
        </p>
        <div className="info-promotions">
          <ul>
            <li>
              <strong style={{ fontSize: "14px", color: "red" }}>
                Chào Tân Sinh Viên (5/7 - 31/7)
              </strong>
              <a href="/#" style={{ fontSize: "14px" }}>
                {" "}
                <strong>(chi tiết)</strong>
              </a>
            </li>
            <li style={{ fontSize: "14px" }}>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#80d150", marginRight: "10px" }}
              ></i>
              Giảm <strong>200.000đ</strong> cho khách hàng là học sinh - sinh
              viên
            </li>
            <li style={{ fontSize: "14px" }}>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#80d150", marginRight: "10px" }}
              ></i>
              Thi tốt quà to - Đỗ cao giảm khủng đến <strong>500.000đ</strong>
            </li>
          </ul>
        </div>
        <div className="" style={{ margin: "20px 0 20px 15px" }}>
          <a href="/">Xem thêm</a>
        </div>
      </div>

      {/* BTN MUA */}
      <div className="add-to-cart" style={{ marginTop: "20px" }}>
        <Button
          type="primary"
          onClick={() => addToCard(product)}
          style={{
            width: "100%",
            height: "50px",
            textTransform: "uppercase",
            fontSize: "16px",
            fontWeight: "700",
          }}
        >
          mua ngay
        </Button>
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
