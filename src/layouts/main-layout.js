"use client";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {Layout, Menu, Button, theme, Grid} from "antd";
import { useRouter } from "next/navigation";
import Navigation from "@/components/widgets/navigation";
import Login from "@/app/auth/login/page";
import { useSearchParams } from 'next/navigation'

const {useBreakpoint}=Grid;
const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  const screens=useBreakpoint();

  const user=true;
  const searchParams = useSearchParams()
  const accessToken = searchParams.get('accessToken')
  sessionStorage.setItem('token',accessToken);

  return (
      <>
          {accessToken?<Layout>
              <Navigation collapsed={collapsed}/>
              <Layout>
                  <Header style={{ padding: 0, background: colorBgContainer }}>
                      {!screens.xs&&<Button
                          type="text"
                          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                          onClick={() => setCollapsed(!collapsed)}
                          style={{
                              fontSize: "16px",
                              width: 64,
                              height: 64,
                          }}
                      />}
                  </Header>
                  <Content
                      style={{
                          minHeight: 280,
                          background: 'white',
                      }}
                  >
                      {children}
                  </Content>
              </Layout>
          </Layout>:<Login/>}
      </>

  );
};

export default MainLayout;
