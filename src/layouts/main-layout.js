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
              <Navigation/>
              <Layout>
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
