"use client";

import React from "react";
import logo from "../../../assets/svgs/chooselife.svg";
import Image from "next/image";
import { Button, Card, Checkbox, Form, Input } from "antd";
import AuthService from "@/services/auth.service";

const Login = () => {
  const {useHandleLoginInService}=AuthService();
  const { mutate: handleLogin, isLoading: isHandleLoginLoading } =
      useHandleLoginInService();  const onFinish = (values) => {
    console.log("Success:", values);
    handleLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div style={{marginTop:'150px'}}>
        <Image style={{margin:'auto',width:'100%'}}  src={logo} alt="Landscape picture" />
        <Card
          style={{ width: 500,margin:'auto'  }}
          className="flex justify-center items-center"
        >
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600,}}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input placeholder="you@example.com"/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
