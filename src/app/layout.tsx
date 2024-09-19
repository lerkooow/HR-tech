import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "../../provider";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "HR Tech",
  description: "HR Tech app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
