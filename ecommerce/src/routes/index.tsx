import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./../pages/admin/index";
import HomePage from "./../pages/home/index";
import Details from "./../pages/home/details/Details";

const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />

        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
