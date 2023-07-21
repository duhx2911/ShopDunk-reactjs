import { useParams } from "react-router";
import Layouts from "./../../component/layout/admin/index";
import AdminComponent from "./../../component/pages/admin";

const AdminPage = () => {
  return (
    <Layouts>
      <AdminComponent />
    </Layouts>
  );
};

export default AdminPage;
