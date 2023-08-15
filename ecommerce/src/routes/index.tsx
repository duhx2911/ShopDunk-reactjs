import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./../pages/admin/index";
import HomePage from "./../pages/home/index";
import Details from "./../pages/home/details/Details";
import AllProductPage from "../pages/home/categories/index";
import ImageProductPage from "../pages/admin/imageProductPage";
import CartPage from "../pages/home/cart";
// import LoginComponent from "../component/pages/admin/login";
import LoginPage from "../pages/admin/login";
import SignupPage from "../pages/admin/signup";

const BrowerRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin */}
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product-image" element={<ImageProductPage />} />

        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productSlug" element={<Details />} />
        <Route path="/iphone" element={<AllProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BrowerRouter;
