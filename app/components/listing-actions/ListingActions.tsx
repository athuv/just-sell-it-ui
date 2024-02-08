import React from 'react';
import { BiArrowBack, BiSolidStar, BiSolidShareAlt } from 'react-icons/bi';

function ListingActions() {
  return (
    <div className="flex h-12 items-center justify-between bg-tertiaryBg px-4 py-4 text-2xl text-primaryBg ">
      <button
        className="hover:text-quaternary"
        type="button"
        aria-label="Go Back"
      >
        <BiArrowBack />
      </button>
      <button
        className="hover:text-quaternary"
        type="button"
        aria-label="Share advertisement"
      >
        <BiSolidShareAlt />
      </button>
      <button
        className="hover:text-quaternary"
        type="button"
        aria-label="Add to favourites"
      >
        <BiSolidStar />
      </button>
    </div>
  );
}

export default ListingActions;
