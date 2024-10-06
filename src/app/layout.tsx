import { ReactNode } from 'react';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Project Share: Sessions',
  description: 'An app to handle project sessions',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
