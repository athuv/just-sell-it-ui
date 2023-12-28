import React from 'react';
import { BiSearch } from 'react-icons/bi';

const HomeSearchbar = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-2 pt-3 text-quaternary">
        <button className="h-14 w-full border">Location</button>
        <button className="h-14 w-full border">Category</button>
        <input className="h-14 w-full border" type="text" />
        <button className="flex h-14 w-full flex-row items-center justify-center gap-2 border bg-tertiaryBg text-xl text-primaryBg">
          <BiSearch />
          <span>Search</span>
        </button>
      </div>
    </section>
  );
};

export default HomeSearchbar;
