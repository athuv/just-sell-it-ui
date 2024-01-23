import Image from 'next/image';
import React from 'react';
import { MdStars, MdVerifiedUser } from 'react-icons/md';

function ItemCard() {
  return (
    <div className="h-40 border-y shadow-md hover:shadow-xl">
      <div className="flex h-full justify-stretch gap-1 p-2">
        <div className="flex min-w-[120px]">
          <Image
            src="/ad-images/house.webp"
            alt="item-image"
            width={160}
            height={120}
            className="self-center"
          />
        </div>
        <div className="flex w-full flex-col overflow-hidden">
          <h2 className="text-md block overflow-hidden overflow-ellipsis whitespace-nowrap font-bold">
            Apple iPhone 11 Pro Max 256 Gb (Used)
          </h2>
          <span className="text-md block overflow-hidden overflow-ellipsis whitespace-nowrap py-1 text-sm">
            2 Bedrooms, 1 Washroom, 1 Dinning Room
          </span>
          <div className="flex items-center justify-evenly gap-1">
            <div className="flex items-center justify-center rounded-sm bg-tertiaryBg px-1 text-xs text-primaryBg">
              <MdStars />
              <span className="text-xs">MEMBER</span>
            </div>
            <div className="flex items-center justify-center rounded-sm text-xs">
              <MdVerifiedUser />
              <span className="text-xs">VERIFIED SELLER</span>
            </div>
          </div>
          <div className="text-md flex-grow pt-2 text-quaternary">Category</div>
          <span className="font-bold text-tertiaryBg">Rs 58, 000</span>
          <span className="self-end text-sm text-quaternary">Just Now</span>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;