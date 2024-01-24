import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Pagination() {
  return (
    <div className="mt-4 flex h-16 items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="text-2xl font-bold">
        <BiChevronLeft />
      </div>
      <div className="pr-2">Previous</div>
      <div className="border-x px-1">Page 1 of 13, 640</div>
      <div className="pl-2">Next</div>
      <div className="text-2xl font-bold">
        <BiChevronRight />
      </div>
    </div>
  );
}

export default Pagination;
