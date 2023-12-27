import React, { Dispatch, SetStateAction } from 'react';
import { BiLogIn, BiPurchaseTagAlt, BiSolidXCircle } from 'react-icons/bi';

const Sidebar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  console.log(isOpen);
  return (
    <aside
      className={`absolute z-0 h-fit w-full ${
        isOpen ? 'translate-y-0' : '-translate-y-48'
      } bg-primaryBg drop-shadow-lg transition-transform duration-500 md:hidden`}
    >
      <div className="flex flex-col items-start px-4 py-1">
        <button
          className="self-end pb-1 text-3xl text-tertiaryBg"
          onClick={() => {
            isOpen ? setIsOpen(false) : setIsOpen(true);
          }}
        >
          <BiSolidXCircle />
        </button>
        <button className="flex items-center justify-center gap-2">
          <span className=" text-tertiaryBg">
            <BiPurchaseTagAlt />
          </span>
          <span>All Ads</span>
        </button>
        <button className="flex items-center justify-center gap-2">
          <span className="text-tertiaryBg">
            <BiLogIn />
          </span>
          <span>Login/Register</span>
        </button>
        <div className="flex w-full items-center justify-center gap-2 pb-1 pt-3">
          <div className="flex rounded border p-1">
            <button className="px-2">සිංහල</button>
            <button className="border-l px-2">தமிழ்</button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
