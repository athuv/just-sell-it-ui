import React from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchInput() {
  return (
    <div className="h-full w-full md:flex md:justify-center">
      <div className="flex h-full w-full items-center justify-center ">
        <input
          placeholder="Keyword"
          aria-label="Search Keyword"
          type="text"
          className="box-border h-full w-full rounded-l-3xl pl-4 focus:outline-none "
        />
        <div className="flex h-full w-12 items-center justify-center rounded-r-3xl bg-primaryBg md:pr-4">
          <button
            type="submit"
            aria-label="submit search"
            className="rounded-full bg-tertiaryBg p-2 text-xl text-primaryBg md:text-3xl"
          >
            <BiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
