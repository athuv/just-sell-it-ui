import type { Metadata } from 'next';
import Header from '@/app/components/header/Header';
import Footer from '@/app/components/footer/Footer';
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
      <body className={`${roboto.className} flex h-screen flex-col`}>
        <Header />
        {children}
        {modal}
        <div id="modal-root" />
        <Footer />
      </body>
    </html>
  );
}
