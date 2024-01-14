import React, { Dispatch, SetStateAction } from 'react';
import { BiSolidXCircle } from 'react-icons/bi';

function Modal({
  children,
  setIsModalOpen,
}: {
  children: React.ReactNode;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-full w-screen flex-col justify-center bg-black bg-opacity-50">
      <div className="m-4 flex h-full overflow-hidden md:justify-center">
        <div className="relative block w-full overflow-y-auto rounded-xl bg-primaryBg p-4 outline-none md:w-[800px]">
          <button
            type="button"
            aria-label="Close Modal"
            className="float-right text-3xl"
            onClick={() => setIsModalOpen(false)}
          >
            <BiSolidXCircle />
          </button>
          <div className="flex flex-col flex-nowrap content-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
