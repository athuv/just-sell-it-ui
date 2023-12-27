import React from 'react';
import {
  BiMenu,
  BiSolidChat,
  BiSolidUser,
  BiPurchaseTagAlt,
  BiLogIn,
} from 'react-icons/bi';
import LogoText from '../logo/logoText';

const Header = () => {
  return (
    <header className="h-16 bg-white">
      <div className="flex h-full items-center justify-between border-b-2 border-tertiaryBg px-4 py-1">
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
      {/* Sliding Menu */}
      <aside className="absolute h-fit w-full bg-primaryBg drop-shadow-lg md:hidden">
        <div className="flex flex-col items-start px-4 py-1">
          <button className="flex items-center justify-center gap-2">
            <span className="text-tertiaryBg">
              <BiPurchaseTagAlt />
            </span>
            <span>All Ads</span>
          </button>
          <button className="flex items-center justify-center gap-2">
            <span className="text-tertiaryBg">
              <BiLogIn />
            </span>
            <span>Login/Register</span>
          </button>
          <div className="flex w-full items-center justify-center gap-2 pb-1 pt-3">
            <div className="flex rounded border p-1">
              <button className="px-2">සිංහල</button>
              <button className="border-l px-2">தமிழ்</button>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
};

export default Header;
