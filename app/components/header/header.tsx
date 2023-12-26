import React from 'react';
import LogoText from '@/app/components/logo/logoText';
import Link from 'next/link';
import { BiSolidChat, BiSolidUser } from 'react-icons/bi';

const Header = () => {
  return (
    <header className="h-[90px] bg-white">
      <div className="text- mx-40 flex h-full items-center justify-between px-3">
        <div className="flex items-center gap-7">
          <div>
            <LogoText fontSize={'text-4xl'} />
          </div>
          <div className="flex items-center gap-4 text-lg">
            <Link href="/all-ads">All Ads</Link>
            <div className="flex rounded border p-2">
              <button className="pr-1">සිංහල</button>
              <button className="border-l pl-1">தமிழ்</button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1">
            <span>
              <BiSolidChat className="text-xl text-tertiaryBg" />
            </span>
            <span>Chat</span>
          </button>
          <button className="flex items-center gap-1">
            <span>
              <BiSolidUser className="text-xl text-tertiaryBg" />
            </span>
            <span>Login/Signup</span>
          </button>
          <button className="rounded bg-tertiaryBg p-2">POST YOUR AD</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
