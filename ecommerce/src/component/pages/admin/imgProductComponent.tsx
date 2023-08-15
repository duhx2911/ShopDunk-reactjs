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
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
import { useSelector } from "react-redux";
import store from "../../../stores";
import {
  getListImagePrd,
  getListProduct,
  updateImageProduct,
  createImageProduct,
  delImageProduct,
} from "../../../stores/actions/actionReducers";
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

const ImgProductComponent = () => {
  const [api, contextHolder] = notification.useNotification();
  const [status, setStatus] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [form] = Form.useForm();
  const [flag, setFlag] = useState<FLAG>(FLAG.CREATE);
  const dataRedux: any = useSelector((state) => state);
  const dataProduct = dataRedux?.productReducer?.products || [];
  const dataImage = dataRedux?.imageProductReducer?.images || [];
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

      form.resetFields();
    } else {
      openNotification("top", "error", status);
    }
  };
  const getStatus = (value: any) => {
    if (value === "success") {
      setStatus(value);
    }
  };

  const fetchData = async () => {
    store.dispatch(getListProduct());
    store.dispatch(getListImagePrd());
  };
  const openCreate = () => {
    setModal2Open(true);
    setFlag(FLAG.CREATE);
    form.resetFields();
  };
  const openEdit = (record: any) => {
    setFlag(FLAG.EDIT);
    form.resetFields();
    form.setFieldsValue(record);
    setModal2Open(true);
  };
  const deleteProduct = async (record: any) => {
    store.dispatch(delImageProduct(record.id, notify));
  };
  const onFinish = async (values: any) => {
    for (let i = 0; i < values.imgDetail.fileList.length; i++) {
      const newValue = {
        ...values,
        imgDetail: values.imgDetail.fileList[i].name,
        // imgDetails: `[${listImgDetails}]`,
      };
      if (flag === FLAG.CREATE) {
        store.dispatch(createImageProduct(newValue, getStatus));
      } else {
        store.dispatch(updateImageProduct(newValue, notify));
      }
    }
    if (status === "success" && flag === FLAG.CREATE) {
      openNotification("top", "success", status);
      form.resetFields();
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  //   const normFile = (e: any) => {
  //     if (Array.isArray(e)) {
  //       return e;
  //     }
  //     return e?.fileList;
  //   };
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
      title: "Product ID",
      dataIndex: "product_id",
      key: "product_id",
    },
    {
      title: "Image Detail",
      dataIndex: "imgDetail",
      key: "crrPriimgDetailce",
    },
    // {
    //   title: "Image Details",
    //   key: "imgDetails",
    //   dataIndex: "imgDetails",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => openEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Xóa bản ghi"
            description="Bạn chắc chắn muốn xóa bản ghi này?"
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
      <StyleButton onClick={openCreate}>Add Image Product</StyleButton>
      <Table columns={columns} dataSource={dataImage} bordered />
      <Modal
        title={
          flag === FLAG.CREATE
            ? "Create New Image Product"
            : "Edit Image Product"
        }
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
            label="Product ID"
            name="product_id"
            rules={[{ required: true }]}
          >
            <Select defaultValue={cate_df}>
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
                  return (
                    <Select.Option value={`${item.id}`}>
                      {item.productName}
                    </Select.Option>
                  );
                }
              )}
            </Select>
          </Form.Item>
          <Form.Item
            label="Image Detail"
            name="imgDetail"
            rules={[{ required: true }]}
          >
            <Upload multiple={true}>
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
export default ImgProductComponent;
