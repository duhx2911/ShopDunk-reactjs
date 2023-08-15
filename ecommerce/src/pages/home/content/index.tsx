import ProductListLayout from "../../../component/ProductListLayout";
// import Product from "./Product";
import SmallBanner from "./SmallBanner";

const ContentHomePage = () => {
  return (
    <div className="content">
      <div className="container">
        <SmallBanner />
        <ProductListLayout />
      </div>
    </div>
  );
};
export default ContentHomePage;
