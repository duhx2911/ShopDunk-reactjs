const Newletter = () => {
  return (
    <div className="newletter">
      <div className="newletter-title">Đăng ký nhập tin từ ShopDunk</div>
      <p>Thông tin sản phẩm mới nhất và chương trình khuyến mãi</p>
      <div className="newletter-subscribe">
        <input
          type="email"
          id="newletter-email"
          className="newletter-subscribe-input"
          placeholder="Nhập email của bạn"
        />
        <button
          type="button"
          id="newletter-subscribe-button"
          className="btn btn-primary btn-subscribe"
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};
export default Newletter;
