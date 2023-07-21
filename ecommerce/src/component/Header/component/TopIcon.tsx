import { Link } from "react-router-dom";
const TopIcon = () => {
  return (
    <div className="top-icon">
      <ul className="list-menu list-icon">
        <li className="nav-item list-icon-item">
          <Link to="/#" className="nav-link icon-link">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </li>
        <li className="nav-item list-icon-item">
          <Link to="/#" className="nav-link icon-link">
            <i className="fa-solid fa-bag-shopping"></i>
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
