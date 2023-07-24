"use client"
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/main-layout";
import { ConfigProvider } from "antd";
import "../styles/common.scss"
import "../styles/global-styling.scss"
import "../styles/utilities.scss"
import "../styles/screen-media-query.scss"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className="margin-none">
      <QueryClientProvider client={queryClient}>
          <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
          <ConfigProvider theme={{token:{colorPrimary: "#4261EF"}}}>
              <MainLayout>
                  {children}
              </MainLayout>
          </ConfigProvider>
          {/*<ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />*/}
      </QueryClientProvider>

      </body>
    </html>
  );
}
