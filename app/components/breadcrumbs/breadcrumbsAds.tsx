import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

function BreadcrumbsAds() {
  return (
    <div className="flex items-center justify-start p-4 text-sm text-quaternary">
      <span>Home</span>
      <span>
        <BiChevronRight />
      </span>
      <span className="text-current">All Ads</span>
    </div>
  );
}

export default BreadcrumbsAds;
