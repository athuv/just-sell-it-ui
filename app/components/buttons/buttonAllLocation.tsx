'use client';

import Modal from '@/app/components/popup/modal';
import React, { useState } from 'react';
import { BiSolidLocationPlus } from 'react-icons/bi';

function ButtonAllLocation() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentContent, setCurrentContent] = useState<string>('district');
  const [selectedArea, setSelectedArea] = useState<string[]>([
    '0',
    'All Locations',
  ]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <button
        aria-label="Select Location"
        type="button"
        className="flex items-center justify-center gap-2 rounded-md bg-quinary p-2 text-lg text-primaryBg"
        onClick={handleButtonClick}
      >
        <BiSolidLocationPlus />
        <span>{selectedArea[1]}</span>
        <input readOnly hidden value={selectedArea[0]} />
      </button>
      {isModalOpen && (
        <Modal
          setCurrentContent={setCurrentContent}
          setIsModalOpen={setIsModalOpen}
          currentContent={currentContent}
          setSelectedArea={setSelectedArea}
        />
      )}
    </>
  );
}

export default ButtonAllLocation;
