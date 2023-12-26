import type { Metadata } from 'next';
import { roboto, spaceMono } from './fonts';
import './globals.css';
import LogoText from './components/logo/logoText';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="h-[90px] bg-white">
          <div className="text- mx-40 flex h-full items-center justify-between px-3">
            <div className="flex items-center gap-4 ">
              <div>
                <LogoText fontSize={'text-4xl'} />
              </div>
              <div>Nav Link</div>
            </div>
            <div>buttons</div>
          </div>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
