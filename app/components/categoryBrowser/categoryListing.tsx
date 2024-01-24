import React from 'react';
import { BiChevronRight } from 'react-icons/bi';

function CategoryListing() {
  const categories: string[] = [
    'Electronics',
    'Vehicles',
    'Property',
    'Trendings',
  ];

  return (
    <div className="divide-y p-4 text-quaternary shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {categories.map((category, index) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          type="button"
          className="flex w-full justify-between py-3 font-bold"
        >
          <span>{category} Ads</span>
          <span className="text-2xl">
            <BiChevronRight />
          </span>
        </button>
      ))}
    </div>
  );
}

export default CategoryListing;
