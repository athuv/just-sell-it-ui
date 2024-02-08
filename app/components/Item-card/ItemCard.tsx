import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdStars, MdVerifiedUser } from 'react-icons/md';

function ItemCard() {
  return (
    <Link href="/" className="min-h-40 border-y shadow-md hover:shadow-xl">
      <div className="flex h-full justify-stretch gap-1 p-2 lg:gap-4">
        <div className="flex max-w-[120px] lg:max-w-52">
          <Image
            src="/ad-images/desktop-pic.jpg"
            alt="item-image"
            width={605}
            height={466}
            className="self-center"
          />
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <h2 className="text-md block overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
            Apple iPhone 11 Pro Max 256 GB (Used)
          </h2>
          <span className="text-md block overflow-hidden overflow-ellipsis whitespace-nowrap py-1 text-sm">
            2 Bedrooms, 1 Washroom, 1 Dinning Room
          </span>
          <div className="flex items-center justify-evenly gap-1 lg:justify-start">
            <div className="flex items-center justify-center rounded-sm bg-tertiaryBg px-1 text-xs text-primaryBg">
              <MdStars />
              <span className="text-xs">MEMBER</span>
            </div>
            <div className="flex items-center justify-center rounded-sm text-xs text-link">
              <MdVerifiedUser />
              <span className="text-xs">VERIFIED SELLER</span>
            </div>
          </div>
          <div className="text-md flex-grow pt-2 text-quaternary">Category</div>
          <span className="font-bold text-tertiaryBg">Rs 53, 000</span>
          <span className="self-end text-sm text-quaternary">Just Now</span>
        </div>
      </div>
    </Link>
  );
}

export default ItemCard;
