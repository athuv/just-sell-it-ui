import React from 'react';
import Image from 'next/image';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t-2 border-tertiaryBg">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="flex items-stretch justify-between py-4">
          <div className="flex flex-col items-center justify-center divide-y divide-quaternary">
            <div className="flex flex-col">
              <h1 className="text-center font-bold">Download Our App</h1>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on google play store"
                    height={646}
                    width={250}
                    style={{ height: '66px', width: 'auto' }}
                  />
                  <Image
                    src="download-on-the-app-store.svg"
                    alt="Get it on google play store"
                    height={40}
                    width={119.66407}
                    style={{ height: '45px', width: 'auto' }}
                  />
                </div>
              </div>
            </div>
            <div>
              <h1 className="hidden text-center font-bold">Connect With</h1>
              <Link
                className="flex items-center gap-1 pl-2 text-[#3b5999]"
                href="/"
              >
                <div className="text-3xl">
                  <BiLogoFacebookSquare />
                </div>
                <span>Like Us On Facebook</span>
              </Link>
            </div>
            <div className="justify-centerdivide-x-2 flex items-center divide-x-2 p-2 text-quaternary">
              <div className="pr-2">
                <Link href="/">Help & Support</Link>
              </div>
              <div className="pl-2">
                <Link href="/">More</Link>
              </div>
            </div>
            <div className="justify-centerdivide-x-2 flex items-center divide-x-2 p-2 text-quaternary">
              <div className="pr-2">
                <Link href="/">සිංහල</Link>
              </div>
              <div className="pl-2">
                <Link href="/">தமிழ்</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
