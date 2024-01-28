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
    Electronics: ['mobiles', 'Laptops', 'Oven'],
    Vehicles: ['Cars', 'Van', 'Lorry'],
    Property: ['Land', 'House'],
    Trending: ['Mobiles'],
  };

  /* eslint-disable react/no-array-index-key */
  return (
    <div className="p-4 text-quaternary shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:flex lg:items-start lg:justify-evenly lg:gap-4">
      {Object.entries(categories).map(([key, category], index) => (
        <div key={index}>
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={key}
            type="button"
            className="flex w-full justify-between border-b py-3 font-bold lg:items-start lg:border-b-0"
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
            } flex-col text-sm lg:flex`}
          >
            {category.map((cat, _index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Link key={_index} className="pl-2" href="/">
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
