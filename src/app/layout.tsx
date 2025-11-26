import type { Metadata } from 'next';

import Header from '@/components/layout/Header';
import Wrapper from '@/components/layout/Wrapper';

import '../styles/app/layout.scss';

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
