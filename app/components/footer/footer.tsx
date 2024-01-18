import React from 'react';
import Image from 'next/image';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import Link from 'next/link';

function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="footer"
      className="border-t-2 border-tertiaryBg"
    >
      <div className="flex flex-col items-center justify-center px-4 lg:items-start lg:divide-y-2 xl:px-40">
        <div className="flex items-stretch justify-between py-4 md:flex-col lg:w-full lg:flex-row lg:gap-10">
          <div className="flex flex-col items-center justify-center divide-y divide-quaternary lg:divide-y-0">
            <div className="flex flex-col lg:items-start">
              <h1 className="text-center font-bold">Download Our App</h1>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <Link
                    role="button"
                    aria-label="Get it on google play store"
                    href="/"
                  >
                    <Image
                      src="/google-play-badge.png"
                      alt="Get it on google play store"
                      height={646}
                      width={250}
                      style={{ height: '66px', width: 'auto' }}
                    />
                  </Link>
                  <Link
                    role="button"
                    aria-label="Get it on apple app store"
                    href="/"
                  >
                    <Image
                      src="download-on-the-app-store.svg"
                      alt="Get it on apple app store"
                      height={40}
                      width={119.66407}
                      style={{ height: '45px', width: 'auto' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:flex lg:w-full lg:flex-col lg:items-start lg:p-3">
              <h1 className="hidden text-center font-bold lg:block lg:text-start">
                Connect With Us
              </h1>
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
            <div className="justify-centerdivide-x-2 flex items-center divide-x-2 p-2 text-quaternary lg:hidden">
              <div className="pr-2">
                <Link href="/">Help & Support</Link>
              </div>
              <div className="pl-2">
                <Link href="/">More</Link>
              </div>
            </div>
            <div className="justify-centerdivide-x-2 flex items-center divide-x-2 p-2 text-quaternary lg:hidden">
              <div className="pr-2">
                <Link href="/">සිංහල</Link>
              </div>
              <div className="pl-2">
                <Link href="/">தமிழ்</Link>
              </div>
            </div>
          </div>
          <div
            role="group"
            aria-label="More from just sell it"
            className="hidden lg:block"
          >
            <h1 className="pb-4 font-bold">More From J-S-I</h1>
            <div className="flex flex-col gap-1 text-quaternary">
              <Link href="/">Sell Fast</Link>
              <Link href="/">Membership</Link>
              <Link href="/">Banner Ads</Link>
              <Link href="/">Ad Promotions</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <h1 className="pb-4 font-bold">Help & Support</h1>
            <div className="flex flex-col gap-1 text-quaternary">
              <Link href="/">FAQ</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <h1 className="pb-4 font-bold">Follow J-S-I</h1>
            <div className="flex flex-col gap-1 text-quaternary">
              <Link href="/">Blog</Link>
              <Link href="/">Facebook</Link>
              <Link href="/">Twitter</Link>
              <Link href="/">Youtube</Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <h1 className="pb-4 font-bold">About J-S-I</h1>
            <div className="flex flex-col gap-1 text-quaternary">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy & Policy</Link>
            </div>
          </div>
        </div>
        <div className="p-2 text-quaternary lg:w-full">
          Copyright &copy; Ahamed Athhar
        </div>
      </div>
    </footer>
  );
}

export default Footer;
