import ButtonLoginRegisterSidebar from '@/app/components/buttons/buttonLoginRegisterSidebar';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { BiPurchaseTagAlt, BiSolidXCircle } from 'react-icons/bi';

function Sidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <aside
      className={`absolute z-0 h-fit w-full ${
        isOpen ? 'translate-y-0' : '-translate-y-48'
      } bg-primaryBg drop-shadow-lg transition-transform duration-500 lg:hidden`}
    >
      <div className="flex flex-col items-start px-4 py-1">
        <button
          type="button"
          aria-label="Close Menu"
          className="self-end pb-1 text-3xl text-tertiaryBg"
          onClick={() => setIsOpen(false)}
        >
          <BiSolidXCircle />
        </button>
        <Link
          href="/ads"
          aria-label="All Ads"
          className="flex items-center justify-center gap-2"
        >
          <span className=" text-tertiaryBg">
            <BiPurchaseTagAlt />
          </span>
          <span>All Ads</span>
        </Link>
        <ButtonLoginRegisterSidebar />
        <div className="flex w-full items-center justify-center gap-2 pb-1 pt-3">
          <div
            role="group"
            aria-label="Select Language"
            className="flex rounded border p-1"
          >
            <button type="button" aria-label="Sinhala" className="px-2">
              සිංහල
            </button>
            <button type="button" aria-label="Tamil" className="border-l px-2">
              தமிழ்
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
