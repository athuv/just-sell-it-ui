import React from 'react';
import Image from 'next/image';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t-2 border-tertiaryBg">
      <div className="flex flex-col px-40">
        <div className="flex items-stretch justify-between py-4">
          <div>
            <div>
              <h1 className="font-bold">Download Our App</h1>
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
            <div className="pt-4">
              <h1 className="font-bold">Connect With</h1>
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
          </div>
          <div>accccccc</div>
          <div>ad</div>
          <div>accccssssssssss</div>
          <div>a33333333333333333</div>
        </div>
        <div className="border-t-2 border-secondaryBg pb-5 pt-4">b</div>
      </div>
    </footer>
  );
}

export default Footer;
