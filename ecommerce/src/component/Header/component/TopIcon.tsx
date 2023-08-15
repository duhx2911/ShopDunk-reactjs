import { Badge } from "antd";
import { Link } from "react-router-dom";
const TopIcon = () => {
  let listCartData: any = [];
  let coutBadge;
  const fetchCart = () => {
    if (window.localStorage.getItem("listCart")) {
      listCartData = JSON.parse(
        window.localStorage.getItem("listCart") || "[]"
      );
    }
  };
  fetchCart();
  if (listCartData && listCartData.length > 0) {
    coutBadge = listCartData.reduce(
      (total: number, crrval: any) => total + crrval.quantity,
      0
    );
  }
  return (
    <div className="top-icon">
      <ul className="list-menu list-icon">
        <li className="nav-item list-icon-item">
          <Link to="/#" className="nav-link icon-link">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
        <li className="nav-item list-icon-item">
          <Link to="/cart" className="nav-link icon-link">
            {listCartData && listCartData.length > 0 && (
              <Badge
                size="small"
                offset={[0, 20]}
                color="#fff"
                style={{ color: "#4b4b4b" }}
                count={coutBadge}
              >
                <i
                  className="fa-solid fa-bag-shopping"
                  style={{ color: "#d0d0d5", fontSize: "20px" }}
                ></i>
              </Badge>
            )}
          </Link>
        </li>
        <li className="nav-item list-icon-item">
          <Link to="/#" className="nav-link icon-link">
            <i className="fa-regular fa-user"></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default TopIcon;
