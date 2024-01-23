import ButtonLocationAds from '@/app/components/buttons/buttonLocationAds';
import SearchInput from '@/app/components/searchComponent/searchInput';
import React from 'react';
import { FaTag } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';

function MobileSearchFilter() {
  return (
    <>
      <div className="bg-tertiaryBg px-4 py-4">
        <SearchInput />
      </div>
      <div className="flex h-11 items-center justify-center divide-x shadow-md">
        <ButtonLocationAds />
        <div className="flex items-center justify-center gap-2 px-4">
          <span className="text-xl text-tertiaryBg">
            <FaTag />
          </span>
          <span>Category</span>
        </div>
        <div className="px-4">
          <span className="text-xl font-bold">
            <GiSettingsKnobs />
          </span>
        </div>
      </div>
    </>
  );
}

export default MobileSearchFilter;
