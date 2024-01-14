'use client';

import LocationModal from '@/app/components/popup/location/locationModal';
import { useState } from 'react';
import { BiSolidLocationPlus } from 'react-icons/bi';

function ButtonAllLocation() {
  const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedArea, setSelectedArea] = useState<string[] | undefined>(
    undefined,
  );

  return (
    <>
      <button
        aria-label="Select Location"
        type="button"
        className="flex items-center justify-center gap-2 rounded-md bg-quinary p-2 text-lg text-primaryBg"
        onClick={() => setIsModalOpen(true)}
      >
        <BiSolidLocationPlus />
        <span>{selectedArea ? selectedArea[1] : 'ALL LOCATION'}</span>
        <input readOnly hidden name="area" value="" />
      </button>
      {IsModalOpen && (
        <LocationModal
          setSelectedArea={setSelectedArea}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
}

export default ButtonAllLocation;
