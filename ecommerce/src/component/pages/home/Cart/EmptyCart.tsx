import { Empty } from "antd";
import { styled } from "styled-components";

const EmptyCart = () => {
  return (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description={
        <span style={{ color: "#777" }}> Giỏ hàng của bạn đang trống! </span>
      }
    >
      <BtnLink href="/">Tiếp tục mua sắm</BtnLink>
    </Empty>
  );
};
const BtnLink = styled.a`
  padding: 10px 20px;
  background-color: #1677ff;
  border-radius: 8px;
  color: white;

  &:hover {
    color: white;
    background-color: rgba(22, 119, 255, 0.7);
  }
`;

export default EmptyCart;
