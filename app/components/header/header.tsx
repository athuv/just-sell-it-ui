import React from 'react';
import { BiMenu, BiSolidChat, BiSolidUser } from 'react-icons/bi';
import LogoText from '../logo/logoText';

const Header = () => {
  return (
    <header className="h-16 bg-white">
      <div className="flex h-full items-center justify-between px-4 py-1">
        <div className="flex items-center gap-2">
          <button className="text-4xl text-tertiaryBg">
            <BiMenu />
          </button>
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
  );
};

export default Header;
