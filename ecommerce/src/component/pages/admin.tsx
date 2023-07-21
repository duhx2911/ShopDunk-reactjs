import React, { useEffect, useState } from "react";
import { Space, Table, Button, Modal, Form, Input, Upload, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";
import styled from "styled-components";
import axios from "axios";
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
  const [data, setData] = useState([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const [flag, setFlag] = useState<FLAG>(FLAG.CREATE);
  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/products");
    const jsonData = await response.json();
    if (jsonData) {
      setData(jsonData);
    }
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
    console.log(record);
  };
  const deleteProduct = async (record: any) => {
    if (window.confirm("Delete this Product?") == true) {
      const response = await axios.delete(
        "http://localhost:8080/products/" + record.id
      );
      if (response.status === 200) {
        fetchData();
      }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const newValue = {
      ...values,
    };
    if (flag === FLAG.CREATE) {
      const response = await axios.post(
        "http://localhost:8080/products",
        newValue
      );
      if (response.status === 200) {
        form.resetFields();
        fetchData();
      }
    } else {
      const response = await axios.put(
        "http://localhost:8080/products/" + newValue.id,
        newValue
      );
      if (response.status === 200) {
        fetchData();
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
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
          <Button type="primary" onClick={() => deleteProduct(record)} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <StyleButton onClick={openCreate}>Add Product</StyleButton>
      <Table columns={columns} dataSource={data} bordered />
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
              <Select.Option value="1">Demo 1</Select.Option>
              <Select.Option value="2">Demo 2</Select.Option>
              <Select.Option value="3">Demo 3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Image" name="imgName" rules={[{ required: true }]}>
            <Upload maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload </Button>
            </Upload>
            {/* <Input type="file" /> */}
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
