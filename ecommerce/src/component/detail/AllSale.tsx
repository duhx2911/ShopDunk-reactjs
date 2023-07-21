import { Col, Row } from "antd";
import CardItem from "./../CardItem";
const AllSale = () => {
  return (
    <div className="cross-sell">
      <div className="title">
        <strong>Gợi ý phụ kiện đi kèm</strong>
      </div>
      <div className="acc-suggest">
        <div className="acc-suggest-list">
          <Row gutter={16}>
            <Col span={6}>
              <CardItem />
            </Col>
            <Col span={6}>
              <CardItem />
            </Col>
            <Col span={6}>
              <CardItem />
            </Col>
            <Col span={6}>
              <CardItem />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default AllSale;
