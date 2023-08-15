import { Col, Row } from "antd";
import CardItem from "./../CardItem";
const AllSale = (data: any) => {
  const dataProduct = data.data;
  return (
    <div className="cross-sell">
      <div className="title">
        <strong>Gợi ý phụ kiện đi kèm</strong>
      </div>
      <div className="acc-suggest">
        <div className="acc-suggest-list">
          <Row gutter={16}>
            {dataProduct.map(
              (item: {
                id: number;
                productName: string;
                crrPrice: string;
                oldPrice: string;
                cate_id: number;
                imgName: string;
                slug: string;
              }) => {
                if (item.cate_id - 1 === 5) {
                  return (
                    <Col span={6}>
                      <CardItem data={item} />
                    </Col>
                  );
                }
              }
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};
export default AllSale;
