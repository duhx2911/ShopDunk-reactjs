import { Button, Col, Image, Input, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import store from "../../../../stores";
import { getListCategory } from "../../../../stores/actions/actionReducers";
import { useEffect, useState } from "react";
import InputNumber from "../../../form/inputNumber";
interface DataType {
  key: string;
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  imgName: string;
  slug: string;
  quantity: number;
}
let dataCategory!: any;

const ListCart = (data: any) => {
  const listCate = [
    { cate_id: 1, cate_name: "Iphone", slug: "iphone", folder: "Iphone" },
    { cate_id: 2, cate_name: "iPad", slug: "ipad", folder: "iPad" },
    { cate_id: 3, cate_name: "Mac", slug: "mac", folder: "Mac" },
    { cate_id: 4, cate_name: "Watch", slug: "watch", folder: "Watch" },
    { cate_id: 5, cate_name: "Âm thanh", slug: "am-thanh", folder: "sound" },
    {
      cate_id: 6,
      cate_name: "Phụ kiện",
      slug: "phu-kien",
      folder: "accessories",
    },
  ];
  const dataCart = data.data;
  const totalCart = dataCart.reduce(
    (total: number, crrval: any) =>
      total + parseInt(crrval.crrPrice.replaceAll(".", "")) * crrval.quantity,
    0
  );
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "Hình ảnh",
      key: "imgName",
      align: "center",
      render: (_, record) => (
        <Image
          style={{ width: "70px" }}
          src={`/images/${listCate[record.cate_id - 1].folder}/${
            record.imgName
          }`}
        />
      ),
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "productName",
      key: "productName",
      render: (value) => <h3>{value}</h3>,
    },
    {
      title: "Giá bán",
      dataIndex: "crrPrice",
      key: "crrPrice",
      render: (value) => <h3>{value}₫</h3>,
    },
    {
      title: "Số lượng",
      key: "quantity",
      render: (_, record) => <InputNumber data={record} />,
    },
    {
      title: "",
      align: "center",
      render: (_, record) => (
        <Button>
          <DeleteOutlined />
        </Button>
      ),
    },
  ];
  const dataRedux: any = useSelector((state) => state);
  dataCategory = dataRedux?.categoryReducer?.categories;

  return (
    <div className="cart-body">
      <Row gutter={16}>
        <Col span={17}>
          <div className="cart-info">
            <div className="cart-details">
              <div className="cart-table">
                <Table
                  style={{ width: "100%" }}
                  columns={columns}
                  dataSource={dataCart}
                  pagination={false}
                />
              </div>
              <div className="cart-option">
                <Button style={{ color: "#0066cc" }}>Cập nhật giỏ hàng</Button>
                <Button style={{ color: "#0066cc" }}>Tiếp tục mua sắm</Button>
              </div>
            </div>
            <div className="cart-checkout-billing"></div>
          </div>
        </Col>
        <Col span={7}>
          <div className="cart-payment">
            <div className="cart-discount">
              <div className="deal">
                <Space.Compact style={{ width: "100%", height: "40px" }}>
                  <Input placeholder="Mã giảm giá" />
                  <Button type="primary" style={{ height: "40px" }}>
                    Áp dụng
                  </Button>
                </Space.Compact>
              </div>
            </div>
            <div className="cart-total">
              <div className="total-info">
                <div className="order-subtotal">
                  <span>Tổng phụ:</span>
                  <span className="price">{VND.format(totalCart)}</span>
                </div>
                <div className="order-total">
                  <span>Tổng cộng:</span>
                  <span className="price">{VND.format(totalCart)}</span>
                </div>
              </div>
              <div className="cart-service">
                <input type="checkbox" id="check-service" />
                <label htmlFor="check-service">
                  Tôi đã đọc và đồng ý với{" "}
                  <a href="/#">điều khoản và điều kiện</a> của website
                </label>
              </div>
              <div className="order-button">
                <Button type="primary">Tiến hành đặt hàng</Button>
              </div>
              <div className="note-ck">
                (*) Phí phụ thu sẽ được tính khi bạn tiến hành thanh toán.
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default ListCart;
