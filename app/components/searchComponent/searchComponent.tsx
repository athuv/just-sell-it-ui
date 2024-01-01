import SearchInput from '@/app/components/searchComponent/searchInput';
import React from 'react';
import { BiSolidLocationPlus } from 'react-icons/bi';

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
          <SearchInput />
        </div>
      </form>
    </div>
  );
}

export default SearchComponent;
