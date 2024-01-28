import type { Metadata } from 'next';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { roboto } from './fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Just Sell It',
  description: 'Home',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} h-full`}>
        <Header />
        {children}
        {modal}
        <div id="modal-root" />
        <Footer />
      </body>
    </html>
  );
}
