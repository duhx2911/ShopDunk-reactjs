import React, { useState, ReactNode } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ToolOutlined,
  HomeOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, MenuProps } from "antd";

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
  getItem("Trang chủ", "1", <HomeOutlined />),
  getItem("Thống kê", "2", <PieChartOutlined />),
  getItem("Quản lý", "sub1", <ToolOutlined />, [
    getItem("Danh mục", "3"),
    getItem("Sản phẩm", "4"),
    getItem("Người dùng", "5"),
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
      <Sider trigger={null} collapsible collapsed={collapsed}>
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
