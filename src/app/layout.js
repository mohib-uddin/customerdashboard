"use client"
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/main-layout";
import { ConfigProvider } from "antd";
import "../styles/common.scss"
import "../styles/global-styling.scss"
import "../styles/utilities.scss"
import "../styles/screen-media-query.scss"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choose Ketamine",
  description: "Choose Ketamine",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="margin-none">
        <ConfigProvider theme={{token:{colorPrimary: "#4261EF"}}}>
          <MainLayout>
            {children}
          </MainLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
