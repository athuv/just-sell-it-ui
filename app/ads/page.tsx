import AdCard from '@/app/components/AdCard/ItemCard';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Allads() {
  return (
    <>
      <div className="px-4 py-4">
        <div>
          <h1 className="text-sm font-bold">
            Buy, Sell, Rent or Find Anything in Sri Lanka
          </h1>
          <span className="text-xs text-quaternary">
            Showing 1-25 of 341,969 ads
          </span>
        </div>
        <div className="p my-2 h-48 bg-yellow-500 text-center">Slider</div>
      </div>
      <div className="flex flex-col gap-4">
        <AdCard />
        <AdCard />
      </div>
      <div className="mt-4 flex h-16 items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="pr-2">
          <BiChevronLeft />
        </div>
        <div className="pr-2">Previous</div>
        <div className="border-x px-1">Page 1 of 13, 640</div>
        <div className="pl-2">Next</div>
        <div className="text-2xl">
          <BiChevronRight />
        </div>
      </div>
    </>
  );
}

export default Allads;
