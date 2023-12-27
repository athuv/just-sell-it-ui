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
        className="absolute left-3 top-[0.85rem] z-10 text-4xl text-tertiaryBg"
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
