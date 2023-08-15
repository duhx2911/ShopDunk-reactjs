import { Breadcrumb } from "antd";
import { useParams } from "react-router-dom";
import useFetchSingle from "../../customize/useFetchSingle";
const BreadCrumb = () => {
  const { productSlug } = useParams();
  const { data: product } = useFetchSingle(
    `http://localhost:8080/${productSlug}`
  );
  return (
    <Breadcrumb
      separator=">"
      items={[
        {
          title: "Home",
          href: "/",
        },
        {
          title: "iPhone",
          href: "/iphone",
        },
        {
          title: "iPhone 14 series",
          href: "/iphone-14-series",
        },
        {
          title: `${product.productName}`,
        },
      ]}
    />
  );
};
export default BreadCrumb;
