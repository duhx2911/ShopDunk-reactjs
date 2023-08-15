import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
import ListCart from "./ListCart";
import { useEffect } from "react";

const CartComponent = () => {
  let listCartData: any = [];
  const fetchCart = () => {
    if (window.localStorage.getItem("listCart")) {
      listCartData = JSON.parse(
        window.localStorage.getItem("listCart") || "[]"
      );
    }
  };
  fetchCart();

  // console.log("data", listCartData);
  return (
    <div className="cart-shopping">
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <span>›</span>
              <Link to="/cart">Giỏ hàng</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="shoping-cart-page">
          {listCartData && listCartData.length > 0 && (
            <ListCart data={listCartData} />
          )}
          {listCartData && listCartData.length <= 0 && <EmptyCart />}
        </div>
      </div>
    </div>
  );
};
export default CartComponent;
