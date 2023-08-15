import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import background from "../../../assets/images/bg-login.jpg";
import { LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { postAPI } from "../../../api";
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_INFO } from "../../../constants";
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
const LoginComponent = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    const postData = await postAPI({
      path: "/auth/login",
      body: {
        password: values.password,
        username: values.username,
      },
    });
    if (postData.status === 200) {
      if (postData.data.msg === "Đăng nhập thành công.") {
        // openNotification("top", "error", "Đăng ký thành công");
        // console.log("PostData", postData);

        const accessToken = postData.data.accessToken;
        const refreshToken = postData.data.refreshToken;
        const userInfo = postData.data.user;
        localStorage.setItem(ACCESS_TOKEN, accessToken);
        localStorage.setItem(REFRESH_TOKEN, refreshToken);
        localStorage.setItem(USER_INFO, JSON.stringify(userInfo));
        navigate("/admin");
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
      <div className="login-wrapper">
        <div className="login-title">Đăng nhập</div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<i className="fa-regular fa-user"></i>}
              placeholder="Email hoặc tên tài khoản"
              bordered={false}
              className="input-login"
            />
          </Form.Item>
          <Form.Item
            name="password"
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Nhớ mật khẩu</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/#">
              Quên mật khẩu?
            </a>
          </Form.Item>

          <Form.Item className="btn-submit">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Đăng nhập
            </Button>
          </Form.Item>
          <div className="" style={{ textAlign: "center" }}>
            Hoặc <a href="/signup">tạo tài khoản ngay!</a>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default LoginComponent;
