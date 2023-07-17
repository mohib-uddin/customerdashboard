"use client"
import "../styles/globals.css";
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/main-layout";
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choose Ketamine",
  description: "Choose Ketamine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={{token:{colorPrimary: "#4261EF"}}}>
          <MainLayout>
            {children}
          </MainLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
