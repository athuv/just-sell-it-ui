'use client';
import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import { BiMenu } from 'react-icons/bi';

const HumburgerMenuButton = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}) => {
  return (
    <>
      <button
        aria-label="Menu"
        className="absolute left-3 top-[0.85rem] z-10 text-4xl text-tertiaryBg md:hidden"
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        <BiMenu />
      </button>
    </>
  );
};

export default HumburgerMenuButton;
