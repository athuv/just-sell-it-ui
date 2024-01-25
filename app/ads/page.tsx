import Slider from '@/app/components/slider/slider';
import React from 'react';

function Allads() {
  return (
    <div className="py-4">
      <div className="px-4 lg:px-0">
        <h1 className="text-sm font-bold">
          Buy, Sell, Rent or Find Anything in Sri Lanka
        </h1>
        <span className="text-xs text-quaternary">
          Showing 1-25 of 341,969 ads
        </span>
      </div>
      <div className="p my-2 flex  items-center justify-center bg-yellow-500 text-center ">
        <Slider />
      </div>
    </div>
  );
}

export default Allads;
