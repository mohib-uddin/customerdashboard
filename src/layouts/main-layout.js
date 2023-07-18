"use client";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Image from "next/image";
import ChooseLife from "../assets/svgs/logo-white.svg";
import Home from "../assets/svgs/Home.svg";
import Contact from "../assets/svgs/Contact.svg";
import Faqs from "../assets/svgs/FAQ'S.svg";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  return (
    <Layout className="height-100vh">
      <Sider
        style={{
          background: "#4261EF",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="flex justify-center">
          <Image src={ChooseLife} style={{ margin: 25, width: 90 }} />
        </div>
        <div>
          <Menu
            style={{
              background: "#4261EF",
              fontSize: "18px",
              fontWeight: "700",
              color: "white",
            }}
            onChange={(a) => {
              console.log(a);
            }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <Image src={Home} />,
                label: "Home",
                onClick: () => {
                  router.push("/home");
                },
              },
              {
                key: "2",
                icon: <Image src={Faqs} />,
                label: "FAQ's",
              },
              {
                key: "3",
                icon: <Image src={Contact} />,
                label: "Contact",
              },
            ]}
          />
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 50 }}>
          <Button
            style={{ fontSize: "16px", fontWeight: "700" }}
            type="primary"
          >
            Logout
          </Button>
        </div>
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

export default MainLayout;
