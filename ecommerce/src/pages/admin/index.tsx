import Layouts from "./../../component/layout/admin/index";
import AdminComponent from "./../../component/pages/admin";
import Auth from "../../auth";

const AdminPage = () => {
  return (
    <Auth>
      <Layouts>
        <AdminComponent />
      </Layouts>
    </Auth>
  );
};

export default AdminPage;
