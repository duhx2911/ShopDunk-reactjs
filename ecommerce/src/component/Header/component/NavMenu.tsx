import { Link } from "react-router-dom";
const NavMenu = () => {
  return (
    <div className="nav-menu">
      <ul className="list-menu">
        <li className="nav-item">
          <Link to="/iphone" className="nav-link">
            Iphone
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ipad" className="nav-link">
            Ipad
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mac" className="nav-link">
            Mac
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/watch" className="nav-link">
            Watch
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/am-thanh" className="nav-link">
            Âm thanh
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/phu-kien" className="nav-link">
            Phụ kiện
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dich-vu" className="nav-link">
            Dịch vụ
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/tin-tuc" className="nav-link">
            Tin tức
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/khuyen-mai" className="nav-link">
            Khuyến mại
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default NavMenu;
