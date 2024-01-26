import ButtonCategory from '@/app/components/buttons/buttonCategory';
import ButtonLocationAds from '@/app/components/buttons/buttonLocationAds';
import SearchInput from '@/app/components/searchComponent/searchInput';
import React from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';

function MobileSearchFilter() {
  return (
    <>
      <div className="bg-tertiaryBg px-4 py-4">
        <SearchInput />
      </div>
      <div className="flex h-11 items-center justify-between divide-x shadow-md">
        <ButtonLocationAds />
        <ButtonCategory />
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
