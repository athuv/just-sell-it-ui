'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';

function CategoryListing() {
  const [whichOpen, setWhichOpen] = useState<number | undefined>(undefined);

  interface Categories {
    [key: string]: string[];
  }

  const categories: Categories = {
    Electronics: ['mobiles', 'Laptops', 'Ovens', 'Cameras', 'TVs'],
    Vehicles: ['Cars', 'Van', 'Lorry', 'Motobikes', 'Buses'],
    Property: [
      'Land for Sale',
      'House for Sale',
      'Apartments for Sale',
      'Land Rentals',
      'House Rentals',
    ],
    Trending: ['Mobiles', 'Furniture', 'Pets', 'Watches', 'Vehicles'],
  };

  /* eslint-disable react/no-array-index-key */
  return (
    <div className=" p-4 text-quaternary shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex lg:items-stretch lg:justify-evenly lg:gap-4">
      {Object.entries(categories).map(([key, category], index) => (
        <div className="lg:flex-1 lg:bg-secondaryBg lg:p-4" key={index}>
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            type="button"
            className="lg: flex w-full justify-between  border-b py-3 font-bold lg:items-center lg:justify-center lg:border-b-0"
            onClick={() => {
              setWhichOpen((prev) => (prev === index ? undefined : index));
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            }}
          >
            <span>{key} Ads</span>
            <span className="text-2xl lg:hidden">
              {whichOpen === index ? <BiChevronDown /> : <BiChevronRight />}
            </span>
          </button>
          <div
            className={`${
              whichOpen === index ? 'flex' : 'hidden'
            } flex-col bg-secondaryBg py-2 text-sm lg:flex lg:items-center lg:justify-center`}
          >
            {category.map((cat, _index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link
                key={_index}
                className=" px-2  text-link hover:text-tertiaryBg"
                href="/"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryListing;
