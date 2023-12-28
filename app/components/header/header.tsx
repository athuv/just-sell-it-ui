import React from 'react';
import { BiPlus, BiSolidChat, BiSolidUser } from 'react-icons/bi';
import DrawerSidebar from '@/app/components/header/drawerSidebar';
import LogoSvg from '@/app/components/logo/logoSvg';

const Header = () => {
  return (
    <>
      <header className="relative z-10 h-16 bg-white">
        <div className="flex h-full items-center justify-between overflow-hidden border-b-2 border-tertiaryBg px-4 py-1 pl-12 md:mx-40 md:border-none md:px-3">
          <div className="flex items-center gap-2">
            <LogoSvg />
            {/* <LogoText fontSize="text-2xl">J-S-I</LogoText> */}
          </div>
          <div className="flex gap-2 text-2xl text-tertiaryBg md:gap-6">
            <button
              aria-label="Chat"
              className="flex items-center justify-center gap-1 text-lg"
            >
              <BiSolidChat />
              <span className="hidden md:inline-block">Chat</span>
            </button>
            <button
              aria-label="Login or Register"
              className="flex items-center justify-center gap-1 text-lg"
            >
              <BiSolidUser />
              <span className="hidden md:inline-block">Login/Register</span>
            </button>
            <button
              aria-label="Post Your Advertisement"
              className="hidden items-center justify-center gap-1 rounded-2xl bg-tertiaryBg p-1 px-3 text-lg text-secondaryBg md:flex"
            >
              POST YOUR AD
            </button>
          </div>
        </div>
      </header>
      <DrawerSidebar />
    </>
  );
};

export default Header;
