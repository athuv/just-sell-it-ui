import type { Metadata } from 'next';
import Header from '@/app/components/header/header';
import { roboto } from '../fonts';
import '@/app/globals.css';
import Footer from '@/app/components/footer/footer';

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
        <Footer />
      </body>
    </html>
  );
}
