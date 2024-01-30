import Carousel from '@/app/components/slider/carousel';
// import Slider from '@/app/components/slider/slider';
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
      <div className="my-2 flex w-full items-center justify-center text-center sm:bg-secondaryBg">
        {/* <Slider /> */}
        <Carousel />
      </div>
    </div>
  );
}

export default Allads;
