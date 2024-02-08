import Link from 'next/link';
import React from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

function Pagination() {
  return (
    <div className="mt-4 flex h-16 items-center justify-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="text-2xl font-bold">
        <BiChevronLeft />
      </div>
      <div className="pr-2">Previous</div>
      <div className="border-x px-1">
        <span className="lg:hidden">Page 1 of 13, 640</span>
        <div className="hidden lg:flex lg:gap-4">
          <Link href="/">1</Link>
          <Link href="/" className="hover:text-link text-quaternary">
            2
          </Link>
          <Link href="/" className="hover:text-link text-quaternary">
            3
          </Link>
          <Link href="/" className="hover:text-link text-quaternary">
            4
          </Link>
          <Link href="/" className="hover:text-link text-quaternary ">
            5
          </Link>
          <span className="text-link">...</span>
        </div>
      </div>
      <div className="pl-2">Next</div>
      <div className="text-2xl font-bold">
        <BiChevronRight />
      </div>
    </div>
  );
}

export default Pagination;
