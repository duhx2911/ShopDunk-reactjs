import { Breadcrumb } from "antd";
const BreadCrumb = () => {
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
          title: "iPhone 14 Pro Max 128GB",
        },
      ]}
    />
  );
};
export default BreadCrumb;
