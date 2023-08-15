import React, { useState, ReactNode } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  HomeOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, MenuProps } from "antd";
import { NavLink } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink to={"/admin"}>{"Trang chủ"}</NavLink>,
    "1",
    <HomeOutlined />
  ),
  getItem("Thống kê", "2", <PieChartOutlined />),
  getItem("Quản lý", "sub1", <ToolOutlined />, [
    getItem("Danh mục", "3"),
    getItem(<NavLink to={"/admin"}>{"Sản phẩm"}</NavLink>, "4"),
    getItem("Người dùng", "5"),
    getItem(<NavLink to={"/product-image"}>{"Ảnh sản phẩm"}</NavLink>, "6"),
  ]),
];

const { Header, Sider, Content } = Layout;

const ContentComponent = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          bottom: 0,
          height: "100vh",
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default ContentComponent;
