import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Today I Learned',
  description: 'A daily work & learning journal for developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
