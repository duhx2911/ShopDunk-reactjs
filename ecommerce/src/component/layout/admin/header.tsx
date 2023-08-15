import { Avatar } from "antd";
import { useState } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from "../../../constants";
import { useNavigate } from "react-router-dom";
enum STATUS {
  hide,
  show,
}
const HeaderAdminComponent = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState("none");
  const [status, setStatus] = useState(STATUS.hide);
  const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem("user-info");
    navigate("/login");
  };
  const controlAccountBox = () => {
    if (status === STATUS.hide) {
      setDisplay("block");
      setStatus(STATUS.show);
    } else if (status === STATUS.show) {
      setDisplay("none");
      setStatus(STATUS.hide);
    }
  };
  let username = "";
  let avatar = "";
  if (localStorage.getItem(USER_INFO)) {
    const user = JSON.parse(localStorage.getItem(USER_INFO) || "{}");
    username = user.Username;
    avatar = user.AvatarImageName;
  }
  return (
    <div className="header-admin" style={{ backgroundColor: "#001529" }}>
      <div className="logo-brand" style={{ width: "200px" }}>
        <img src="images/logo_brand.png" alt="" style={{ width: "173px" }} />
      </div>
      <div className="account" onClick={controlAccountBox}>
        <Avatar
          size={40}
          src={`images/avatar/${avatar}`}
          style={{ cursor: "pointer" }}
        />
        <span className="username">{username}</span>
        <div className="accout-box" style={{ display: display }}>
          <ul className="account-list">
            <li className="account-item">
              <a href="/#">
                <i className="account-icon fa-solid fa-id-card"></i>Thông tin cá
                nhân
              </a>
            </li>
            <li className="account-item">
              <a href="/#">
                <i className="account-icon fa-solid fa-gear"></i>Cài đặt
              </a>
            </li>
            <li className="account-item">
              <button onClick={() => logout()}>
                <i className="account-icon fa-solid fa-right-from-bracket"></i>
                Đăng xuất
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HeaderAdminComponent;
