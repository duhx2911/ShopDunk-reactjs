import Product from "./Product";
import SmallBanner from "./SmallBanner";

const ContentHomePage = () => {
  return (
    <div className="content">
      <div className="container">
        <SmallBanner />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
export default ContentHomePage;
