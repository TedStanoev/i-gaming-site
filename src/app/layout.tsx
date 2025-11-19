import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
