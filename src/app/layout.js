import "../styles/globals.css";
import { Inter } from "next/font/google";
import MainLayout from "@/layouts/main-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Choose Ketamine",
  description: "Choose Ketamine",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
