import { Col, Row } from "antd";
import CardItem from "./../../../component/CardItem";
import useFetch from "../../../customize/useFetch";
import { useSelector } from "react-redux";
import store from "../../../stores";
import { useEffect } from "react";
import { getListProduct } from "../../../stores/actions/actionReducers";
const Product = (props: { cateID: number }) => {
  const dataRedux: any = useSelector((state) => state);
  const dataProduct = dataRedux?.productReducer?.products || [];
  const fetchData = async () => {
    store.dispatch(getListProduct());
  };
  useEffect(() => {
    fetchData();
  }, []);
  const cateID = props.cateID;
  return (
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
          if (item.cate_id === cateID) {
            return (
              <Col span={6}>
                <CardItem data={item} />
              </Col>
            );
          }
        }
      )}
    </Row>
  );
};
export default Product;
