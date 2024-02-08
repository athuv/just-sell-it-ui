'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { BiMenu } from 'react-icons/bi';

function HumburgerMenuButton({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) {
  return (
    <button
      type="button"
      aria-label="Menu"
      className="absolute left-3 top-[0.85rem] z-10 text-4xl text-tertiaryBg lg:hidden"
      onClick={() => {
        (isOpen ? () => setIsOpen(false) : () => setIsOpen(true))();
      }}
    >
      <BiMenu />
    </button>
  );
}

export default HumburgerMenuButton;
