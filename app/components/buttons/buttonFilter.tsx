'use client';

import FilterModal from '@/app/components/popup/filter/filterModal';
import React, { useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';

function ButtonFilter() {
  const [IsModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => {
          setIsModalOpen(true);
          document.body.style.overflow = 'hidden';
        }}
        type="button"
        aria-label="filter"
        className="px-4"
      >
        <span className="text-xl font-bold">
          <GiSettingsKnobs />
        </span>
      </button>
      {IsModalOpen && <FilterModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default ButtonFilter;
