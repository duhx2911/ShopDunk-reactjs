const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="ft-top-block about-us">
            <div className="footer-logo">
              <img src="images/logo_brand.png" alt="Logo brand" />
            </div>
            <div className="ft-introduce">
              <p>
                Năm 2020, ShopDunk trở thành đại lý ủy quyền của Apple. Chúng
                tôi phát triển chuỗi cửa hàng tiêu chuẩn và Apple Mono Store
                nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của
                Apple cho người dùng Việt Nam.
              </p>
            </div>
            <div className="ft-social">
              <ul className="social-list">
                <li className="social-item">
                  <a href="/#">
                    <img src="images/facebook-icon.png" alt="" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="/#">
                    <img src="images/tiktok-icon.png" alt="" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="/#">
                    <img src="images/zalo-icon.png" alt="" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="/#">
                    <img src="images/youtube-icon.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ft-top-block information">
            <p className="title">
              Thông tin <i className="fa-solid fa-chevron-down"></i>
            </p>
            <ul className="ft-list close">
              <li>
                <a href="/#">Tin Tức</a>
              </li>
              <li>
                <a href="/#">Giới thiệu</a>
              </li>
              <li>
                <a href="/#">Check IMEI</a>
              </li>
              <li>
                <a href="/#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="/#">Thuê điểm bán lẻ</a>
              </li>
              <li>
                <a href="/#">Bảo hành và sửa chữa</a>
              </li>
              <li>
                <a href="/#">Tuyển dụng</a>
              </li>
              <li>
                <a href="/#">Đánh giá chất lượng, khiếu nại</a>
              </li>
            </ul>
          </div>
          <div className="ft-top-block customer-service">
            <p className="title">
              Chính sách <i className="fa-solid fa-chevron-down"></i>
            </p>
            <ul className="ft-list close">
              <li>
                <a href="/#">Thu cũ đổi mới</a>
              </li>
              <li>
                <a href="/#">Giao hàng</a>
              </li>
              <li>
                <a href="/#">Giao hàng (ZaloPay)</a>
              </li>
              <li>
                <a href="/#">Hủy giao dịch</a>
              </li>
              <li>
                <a href="/#">Đổi trả</a>
              </li>
              <li>
                <a href="/#">Bảo hành</a>
              </li>
              <li>
                <a href="/#">Giải quyết khiếu nại</a>
              </li>
              <li>
                <a href="/#">Bảo mật thông tin</a>
              </li>
            </ul>
          </div>
          <div className="ft-top-block my-contact">
            <p className="title">
              Địa chỉ &amp; Liên hệ <i className="fa-solid fa-chevron-down"></i>
            </p>
            <ul className="ft-list close">
              <li>
                <a href="/#">Tài khỏa của tôi</a>
              </li>
              <li>
                <a href="/#">Đơn đặt hàng</a>
              </li>
              <li>
                <a href="/#">Hệ thống cửa hàng </a>
              </li>
              <li>
                <a href="/#">Tìm Store trên Google Map</a>
              </li>
              <li>
                <a href="tel:19006626">
                  Mua hàng:{" "}
                  <span style={{ color: "#06c", fontSize: "16px" }}>
                    1900.6626
                  </span>
                  <ul>
                    <li>Nhánh 1: khu vực Hà Nội và các tỉnh phía bắc</li>
                    <li>Nhánh 2: khu vực Hồ Chí Minh và các tỉnh phía nam</li>
                    <li>Nhánh 3: Khiếu nại và góp ý</li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="tel:19006626">
                  Doanh nghiệp:{" "}
                  <span style={{ color: "#06c", fontSize: "16px" }}>
                    1900.6626
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
};
export default Footer;
