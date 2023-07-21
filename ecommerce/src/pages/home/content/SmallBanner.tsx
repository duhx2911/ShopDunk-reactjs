import { Col, Row } from "antd";
import { styled } from "styled-components";
const SmallBanner = () => {
  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={8}>
        <a href="/#">
          <IMG src="images/topic/deal-chat.jpeg" />
        </a>
      </Col>
      <Col className="gutter-row" span={8}>
        <a href="/#">
          <IMG src="images/topic/apple-care.jpeg" />
        </a>
      </Col>
      <Col className="gutter-row" span={8}>
        <a href="/#">
          <IMG src="images/topic/sale-soc.png" />
        </a>
      </Col>
    </Row>
  );
};
const IMG = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export default SmallBanner;
