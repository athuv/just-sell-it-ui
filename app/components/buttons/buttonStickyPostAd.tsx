import Link from 'next/link';
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function ButtonStickyPostAd() {
  return (
    <div className="flex flex-nowrap items-center justify-center lg:hidden">
      <Link href="/" className="flex justify-center">
        <button
          type="button"
          className="fixed bottom-6 flex items-center justify-center gap-2 rounded-lg border border-tertiaryBg bg-tertiaryBg px-4 py-2 text-lg text-primaryBg"
        >
          <FaPlusCircle />
          <span>Post Ad</span>
        </button>
      </Link>
    </div>
  );
}

export default ButtonStickyPostAd;
