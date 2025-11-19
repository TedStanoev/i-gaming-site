import type { Metadata } from "next";

import Header from "@/components/layout/Header";

import "../styles/app/_layout.module.scss";

export const metadata: Metadata = {
  title: "iGamingWebsite",
  description: "Marketing IGaming Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
