import type { Metadata } from 'next';

import Header from '@/components/layout/Header';

import '../styles/app/_layout.scss';
import Wrapper from '@/components/layout/Wrapper';

export const metadata: Metadata = {
  title: 'iGamingWebsite',
  description: 'Marketing IGaming Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Wrapper>
          <Header />
          {children}
        </Wrapper>
      </body>
    </html>
  );
}
