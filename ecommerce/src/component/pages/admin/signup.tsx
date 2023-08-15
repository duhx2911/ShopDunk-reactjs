import React from "react";
import { Button, Form, Input, Upload } from "antd";
import background from "../../../assets/images/bg-login.jpg";
import { LockOutlined, UploadOutlined } from "@ant-design/icons";
import { postAPI } from "../../../api";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";
import { NotificationPlacement } from "antd/es/notification/interface";
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
type NotificationType = "success" | "info" | "warning" | "error";

const SignUpComponent = () => {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
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
  const onFinish = async (values: any) => {
    const postData = await postAPI({
      path: "/auth/register",
      body: {
        email: values.Email,
        password: values.Password,
        username: values.Username,
        fullname: values.FullName,
        avatarimagename: values.AvatarImageName.file.name,
      },
    });
    if (postData.status === 200) {
      if (postData.data.status === "success") {
        openNotification("top", "error", "Đăng ký thành công");
        navigate("/login");
        // console.log("Received values of form: ", postData);
      }
    }
  };
  return (
    <div
      className="login-section user-section"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {contextHolder}
      <div className="login-wrapper">
        <div className="login-title">Đăng ký</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="FullName"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input
              prefix={<i className="fa-regular fa-user"></i>}
              placeholder="Họ và tên"
              bordered={false}
              className="input-login"
            />
          </Form.Item>
          <Form.Item
            name="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              prefix={<i className="fa-regular fa-envelope"></i>}
              placeholder="Email"
              bordered={false}
              className="input-login"
            />
          </Form.Item>
          <Form.Item
            name="Username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<i className="fa-regular fa-user"></i>}
              placeholder="Tên tài khoản"
              bordered={false}
              className="input-login"
            />
          </Form.Item>

          <Form.Item
            name="Password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật khẩu"
              bordered={false}
              className="input-login"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            dependencies={["Password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("Password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Xác nhận mật khẩu"
              bordered={false}
              className="input-login"
            />
          </Form.Item>
          <Form.Item name="AvatarImageName">
            <Upload
              maxCount={1}
              listType="picture"
              className="upload-list-inline"
            >
              <Button icon={<UploadOutlined />}>Upload avatar</Button>
            </Upload>
          </Form.Item>
          <Form.Item className="btn-submit" style={{ paddingTop: "20px" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng ký
            </Button>
          </Form.Item>
          <div className="" style={{ textAlign: "center" }}>
            Hoặc <a href="/login">Đăng nhập ngay!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default SignUpComponent;
