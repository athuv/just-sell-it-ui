import React from 'react';
import { BiSearch, BiSolidLocationPlus } from 'react-icons/bi';

function SearchComponent() {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center bg-tertiaryBg px-4">
      <form className="w-full">
        <div className="flex flex-col items-center justify-center gap-4">
          <div>
            <button
              aria-label="Select Location"
              type="button"
              className="flex items-center justify-center gap-2 rounded-md bg-quinary p-2 text-lg text-primaryBg"
            >
              <BiSolidLocationPlus />
              <span>All Locations</span>
              <input readOnly hidden value="" />
            </button>
          </div>
          <div className="w-full">
            <div className="flex h-11 items-center justify-center">
              <input
                type="text"
                className="box-border h-full w-full rounded-l-3xl pl-4 focus:outline-none"
              />
              <div className="flex h-full w-12 items-center justify-center rounded-r-3xl bg-primaryBg">
                <button
                  type="button"
                  aria-label="submit search"
                  className="rounded-full bg-tertiaryBg p-2 text-xl"
                >
                  <BiSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
