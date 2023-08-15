import React, { useState, useEffect } from "react";
import {
  Space,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Upload,
  Select,
  Popconfirm,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import axios from "axios";
import useFetch from "../../customize/useFetch";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";

import { useSelector } from "react-redux";
import {
  getProduct,
  startCountAction,
  getListProduct,
  createProduct,
  updateProduct,
  delProduct,
  getListCategory,
} from "../../stores/actions/actionReducers";
import store from "../../stores";
import { ENV_BE } from "../../constants";
import { getAPI } from "../../api";

type NotificationType = "success" | "info" | "warning" | "error";
let cate_df: string = "Choose";
enum FLAG {
  EDIT,
  CREATE,
}
interface DataType {
  id: number;
  productName: string;
  crrPrice: string;
  oldPrice: string;
  cate_id: number;
  imgName: string;
}

const AdminComponent = () => {
  const [api, contextHolder] = notification.useNotification();
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const [flag, setFlag] = useState<FLAG>(FLAG.CREATE);
  // const { data: categories } = useFetch("http://localhost:8080/categories");

  const dataRedux: any = useSelector((state) => state);
  const dataProduct = dataRedux?.productReducer?.products || [];
  const dataCategory = dataRedux?.categoryReducer?.categories;
  const isLoading = dataRedux.productReducer.isLoading || false;
  // console.log("dataCategory: ", dataCategory);
  const fetchData = async () => {
    store.dispatch(getListProduct());
    store.dispatch(getListCategory());
  };
  const openCreate = () => {
    setModal2Open(true);
    setFlag(FLAG.CREATE);
    form.resetFields();
  };
  const openEdit = (record: any) => {
    setFlag(FLAG.EDIT);
    form.setFieldsValue(record);
    setModal2Open(true);
    // console.log(record);
  };
  const deleteProduct = async (record: any) => {
    store.dispatch(delProduct(record, notify));
    // console.log(record);
  };

  const openNotification = (
    placement: NotificationPlacement,
    type: NotificationType,
    mess: string
  ) => {
    api[type]({
      message: mess,
      placement,
    });
  };
  const notify = (status: any) => {
    if (status === "success") {
      openNotification("top", "success", status);
      if (flag === FLAG.CREATE) {
        form.resetFields();
      }
    } else {
      openNotification("top", "error", status);
    }
  };
  const onFinish = async (values: any) => {
    const newValue = {
      ...values,
      imgName: values.imgName.file.name,
    };
    // console.log(newValue);
    if (flag === FLAG.CREATE) {
      store.dispatch(createProduct(newValue, notify));
      // if (response.status === 200) {
      //   form.resetFields();
      // }
    } else {
      store.dispatch(updateProduct(newValue, notify));
      // if (response.status === 200) {
      //   openNotification("top", "success", "Sửa thành công !");
      // }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  // const normFile = (e: any) => {
  //   if (Array.isArray(e)) {
  //     return e;
  //   }
  //   return e?.fileList;
  // };
  useEffect(() => {
    fetchData();
  }, []);
  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      //   render: (value) => <a>{value}</a>,
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "Current Price",
      dataIndex: "crrPrice",
      key: "crrPrice",
    },
    {
      title: "Old Price",
      key: "oldPrice",
      dataIndex: "oldPrice",
    },
    {
      title: "Category",
      key: "cate_id",
      dataIndex: "cate_id",
    },
    {
      title: "Slug",
      key: "slug",
      dataIndex: "slug",
    },
    {
      title: "Image",
      key: "imgName",
      dataIndex: "imgName",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => openEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Xóa sản phẩm"
            description="Bạn chắc chắn muốn xóa sản phẩm này?"
            okText="Có"
            cancelText="Hủy"
            onConfirm={() => deleteProduct(record)}
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      {contextHolder}
      <StyleButton onClick={openCreate}>Add Product</StyleButton>
      <Table
        columns={columns}
        dataSource={dataProduct}
        bordered={true}
        loading={isLoading}
      />
      <Modal
        title={flag === FLAG.CREATE ? "Create New Product" : "Edit Product"}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="Id" name="id">
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Product Name"
            name="productName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Current Price"
            name="crrPrice"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Old Price"
            name="oldPrice"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name="cate_id"
            rules={[{ required: true }]}
          >
            <Select defaultValue={cate_df}>
              {dataCategory.map(
                (item: {
                  cate_id: number;
                  cate_name: string;
                  slug: string;
                  folder: string;
                }) => {
                  return (
                    <Select.Option value={`${item.cate_id}`} key={item.cate_id}>
                      {item.cate_name}
                    </Select.Option>
                  );
                }
              )}
            </Select>
          </Form.Item>
          <Form.Item label="Slug" name="slug" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Image" name="imgName" rules={[{ required: true }]}>
            <Upload maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload </Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <StyleButton type="primary" htmlType="submit">
              Submit
            </StyleButton>
            <WarningButton type="primary" htmlType="reset">
              Reset
            </WarningButton>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
const StyleButton = styled(Button)`
  margin: 12px 5px;
  background-color: #1677ff;
  color: white;
`;
const WarningButton = styled(Button)`
  margin: 12px 5px;
  background-color: #dfef50;
  color: #000000;
  &:hover {
    background-color: #e6fd1b !important;
    color: #000000 !important;
  }
`;
export default AdminComponent;
