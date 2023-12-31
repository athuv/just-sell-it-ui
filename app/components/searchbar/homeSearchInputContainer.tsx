import React, { Dispatch, SetStateAction } from 'react';
import { BiCategoryAlt, BiLocationPlus, BiSearch } from 'react-icons/bi';

const HomeSearchInputContainer = ({
  setIsLocationOpen,
}: {
  setIsLocationOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleLocationClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsLocationOpen(true);
  };

  return (
    <section className="w-full">
      <div
        role="group"
        aria-label="Search"
        className="flex flex-col gap-2 pt-3 text-quaternary"
      >
        <button
          aria-label="Location"
          className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
          onClick={handleLocationClick}
        >
          <BiLocationPlus />
          <span>Location</span>
        </button>
        <button
          aria-label="Category"
          className="flex h-14 w-full items-center justify-start gap-2 border pl-4"
        >
          <BiCategoryAlt />
          <span>Category</span>
        </button>
        <div className="relative">
          <input
            aria-label="Search"
            placeholder="Keyword"
            className="placeholder:pl-15 h-14 w-full border bg-primaryBg bg-[url('/keyboard-icon.svg')]  bg-[1.1rem] bg-no-repeat pl-10 placeholder:text-quaternary"
            type="text"
          />
        </div>
        <button
          aria-label="Search"
          className="flex h-14 w-full flex-row items-center justify-center gap-2 border bg-tertiaryBg text-xl text-primaryBg"
        >
          <BiSearch />
          <span>Search</span>
        </button>
      </div>
    </section>
  );
};

export default HomeSearchInputContainer;
