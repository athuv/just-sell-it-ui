import type { Metadata } from 'next';
import { roboto } from './fonts';
import './globals.css';
import Header from './components/header/header';

export const metadata: Metadata = {
  title: 'Just Sell It',
  description: 'Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
