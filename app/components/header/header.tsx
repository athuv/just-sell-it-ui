import React from 'react';
import { BiSolidChat } from 'react-icons/bi';
import DrawerSidebar from '@/app/components/header/drawerSidebar';
import LogoSvg from '@/app/components/logo/logoSvg';
import ButtonLoginRegisterNavbar from '@/app/components/buttons/buttonLoginRegisterNavbar';
import Link from 'next/link';

function Header() {
  return (
    <>
      <header
        role="banner"
        aria-label="Global Navigation"
        className="relative z-10 h-16 bg-white lg:border-b-2 lg:border-tertiaryBg"
      >
        <div className="flex h-full items-center justify-between overflow-hidden border-b-2 border-tertiaryBg px-4 py-1 pl-12 lg:mx-40 lg:border-none lg:px-3">
          <div className="flex items-center gap-4">
            <LogoSvg />
            <div className="flex items-center justify-center">
              <button
                type="button"
                className="border border-tertiaryBg px-2 text-tertiaryBg"
              >
                <Link href="/ads">All Ads</Link>
              </button>
            </div>
          </div>
          <div className="flex gap-2 text-2xl text-tertiaryBg lg:gap-6">
            <button
              type="button"
              aria-label="Chat"
              className="flex items-center justify-center gap-1 text-lg"
            >
              <BiSolidChat />
              <span className="hidden lg:inline-block">Chat</span>
            </button>
            <ButtonLoginRegisterNavbar />
            <button
              type="button"
              aria-label="Post Your Advertisement"
              className="hidden items-center justify-center gap-1 rounded-2xl bg-tertiaryBg p-1 px-3 text-lg text-secondaryBg lg:flex"
            >
              POST YOUR AD
            </button>
          </div>
        </div>
      </header>
      <DrawerSidebar />
    </>
  );
}

export default Header;
