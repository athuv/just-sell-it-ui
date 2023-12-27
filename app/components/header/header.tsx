import React from 'react';
import {
  BiMenu,
  BiSolidChat,
  BiSolidUser,
  BiPurchaseTagAlt,
  BiLogIn,
} from 'react-icons/bi';
import LogoText from '../logo/logoText';
import HumburgerMenuButton from '@/app/components/buttons/hamburgerMenuButton';
import DrawerSidebar from '@/app/components/header/drawerSidebar';

const Header = () => {
  return (
    <>
      <header className="relative z-10 h-16 bg-white">
        <div className="flex h-full items-center justify-between overflow-hidden border-b-2 border-tertiaryBg px-4 py-1 pl-12">
          <div className="flex items-center gap-2">
            <LogoText fontSize="text-2xl">J-S-I</LogoText>
          </div>
          <div className="flex gap-2 text-2xl text-tertiaryBg">
            <button>
              <BiSolidChat />
            </button>
            <button>
              <BiSolidUser />
            </button>
          </div>
        </div>
      </header>
      <DrawerSidebar />
    </>
  );
};

export default Header;
