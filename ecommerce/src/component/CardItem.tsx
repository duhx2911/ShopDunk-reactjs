const CardItem = () => {
  return (
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
  );
};
export default CardItem;
