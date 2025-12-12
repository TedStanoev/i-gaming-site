import type { Metadata } from 'next';
import localFont from "next/font/local";

import Header from '@/components/layout/Header';
import Wrapper from '@/components/layout/Wrapper';


import '../styles/app/layout.scss';

export const metadata: Metadata = {
  title: 'iGamingWebsite',
  description: 'Marketing IGaming Website',
};

const ProdigyFont = localFont({
  src: [
    {
      path: './fonts/Prodigy.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: "--font-prodigy",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ProdigyFont.variable}>
      <body>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
