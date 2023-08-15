import { Link } from "react-router-dom";
import NavMenu from "../../Header/component/NavMenu";
import TopIcon from "../../Header/component/TopIcon";
const Header = () => {
  return (
    <div className="header">
      <div className="container container-esm-fluid">
        <div className="top-nav">
          <div className="top-brand">
            <Link to="/">
              <img
                className="logo-brand"
                src="/images/logo_brand.png"
                alt="Logo ShopDunk"
              />
            </Link>
          </div>
          <NavMenu />
          <TopIcon />
        </div>
      </div>
    </div>
  );
};
export default Header;
